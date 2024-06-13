"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Container, Button, Input, Form, FormGroup, Label } from 'reactstrap';

const Page = ({ pageName, initialData, isEditing }) => {
  const [products, setProducts] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    setProducts(initialData);
  }, [initialData]);

  const columns = [
    {
      name: 'Sr. No',
      selector: (row, index) => index + 1,
      sortable: true,
      width: '80px',
    },
    {
      name: 'Image',
      selector: 'banner_img',
      cell: row => isEditing && editedData.banner_id === row.banner_id ? (
        <Form>
          <FormGroup>
            <Label for={`imageUpload_${row.banner_id}`}>Upload Image</Label>
            <Input type="file" id={`imageUpload_${row.banner_id}`} onChange={(e) => handleImageChange(e, row, 'banner_img')} />
          </FormGroup>
        </Form>
      ) : (
        <img src={row.banner_img} alt="Banner Image" style={{ width: '50px' }} className="img-fluid" />
      ),
    },
    {
      name: 'Mobile Banner',
      selector: 'mobileBanner_img',
      cell: row => isEditing && editedData.banner_id === row.banner_id ? (
        <Form>
          <FormGroup>
            <Label for={`mobileImageUpload_${row.banner_id}`}>Upload Mobile Banner</Label>
            <Input type="file" id={`mobileImageUpload_${row.banner_id}`} onChange={(e) => handleImageChange(e, row, 'mobileBanner_img')} />
          </FormGroup>
        </Form>
      ) : (
        <img src={row.mobileBanner_img} alt="Mobile Banner Image" style={{ width: '50px' }} className="img-fluid" />
      ),
    },
    {
      name: 'Title',
      selector: 'banner_title',
      sortable: true,
      cell: row => isEditing && editedData.banner_id === row.banner_id ? (
        <Input type="text" value={editedData.banner_title} onChange={(e) => setEditedData({ ...editedData, banner_title: e.target.value })} />
      ) : (
        <p>{row.banner_title}</p>
      ),
    },
    {
      name: 'Content',
      selector: 'banner_content',
      sortable: true,
      cell: row => isEditing && editedData.banner_id === row.banner_id ? (
        <Input type="text" value={editedData.banner_content} onChange={(e) => setEditedData({ ...editedData, banner_content: e.target.value })} />
      ) : (
        <p>{row.banner_content}</p>
      ),
    },
    {
      name: 'Action',
      cell: row => (
        <div className='gap-2 d-flex'>
          {isEditing && editedData.banner_id === row.banner_id ? (
            <Button color="success" onClick={() => saveChanges(row)}>Save</Button>
          ) : (
            <Button color="secondary" onClick={() => handleEdit(row)}>Edit</Button>
          )}
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  const handleEdit = (row) => {
    setEditMode(true);
    setEditedData({ ...row, banner_img: row.banner_img, mobileBanner_img: row.mobileBanner_img }); // Store the image names in editedData
  };

  const handleImageChange = (e, row, imageType) => {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name; // Get the file name
      setEditedData({ ...editedData, [imageType]: fileName }); // Update editedData with the file name
    }
    // No else block needed here since editedData remains unchanged if no file is selected
  };

  const saveChanges = async (row) => {
    try {
      const response = await axios.put('/api/admin/heroBanners', editedData);

      const updatedProducts = products.map(p => {
        if (p.banner_id === editedData.banner_id) {
          return { ...editedData, banner_img: editedData.banner_img, mobileBanner_img: editedData.mobileBanner_img }; // Update the banner_img and mobileBanner_img fields with the image names
        }
        return p;
      });

      setProducts(updatedProducts);
      setEditMode(false);
      setEditedData({});
    } catch (error) {
      console.error("Error updating the banner:", error);
      // Handle error (show error message, etc.)
    }
  };

  return (
    <Container>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className="my-4">{pageName}</h1>
      </div>

      <DataTable
        columns={columns}
        data={products}
        highlightOnHover
        responsive
        subHeader
        noDataComponent="No banners found."
      />
    </Container>
  );
};

export default Page;
