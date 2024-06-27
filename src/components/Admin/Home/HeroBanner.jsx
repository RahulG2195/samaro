"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Button, Input, Form, FormGroup, Label, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

const Page = ({ pageName, initialData, isEditing }) => {
  const [products, setProducts] = useState(initialData);
  const [editedData, setEditedData] = useState({});
  const [editId, setEditId] = useState(null);
  const [files, setFiles] = useState({});

  useEffect(() => {
    setProducts(initialData);
  }, [initialData]);
  console.log("banner initial data ,",initialData)

  const handleEdit = (row) => {
    setEditId(row.banner_id);
    setEditedData({ 
      ...row, 
      banner_img: row.banner_img, 
      mobileBanner_img: row.mobileBanner_img,
      button_text: row.button_text,
      banner_url: row.banner_url
    });
  };

  const handleImageChange = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [imageType]: file
      }));
      setEditedData({ ...editedData, [imageType]: file.name });
    }
  };

  const saveChanges = async (row) => {
    try {
      const formData = new FormData();
      Object.entries(editedData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      Object.entries(files).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await axios.put('/api/admin/heroBanners', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      const updatedProducts = products.map(p => {
        if (p.banner_id === editedData.banner_id) {
          return { 
            ...editedData, 
            banner_img: editedData.banner_img, 
            mobileBanner_img: editedData.mobileBanner_img,
            button_text: editedData.button_text,
            banner_url: editedData.banner_url
          };
        }
        return p;
      });
      setProducts(updatedProducts);
      setEditId(null);
      setEditedData({});
      setFiles({});
    } catch (error) {
      console.error("Error updating the banner:", error);
    }
  };

  return (
    <Container>
      <div className='d-flex justify-content-between align-items-center'>
        <h3 className="my-4">{pageName}</h3>
      </div>
      {products.map((product, index) => (
        <Card className="mb-4" key={product.banner_id}>
          <CardBody>
            <CardTitle tag="h5">Banner {index + 1}</CardTitle>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Image</Label>
                    {editId === product.banner_id ? (
                      <Input type="file" onChange={(e) => handleImageChange(e, 'banner_img')} />
                    ) : (
                      <img src={product.banner_img} alt="Banner Image" style={{ width: '100px' }} className="img-fluid" />
                    )}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Mobile Banner</Label>
                    {editId === product.banner_id ? (
                      <Input type="file" onChange={(e) => handleImageChange(e, 'mobileBanner_img')} />
                    ) : (
                      <img src={product.mobileBanner_img} alt="Mobile Banner Image" style={{ width: '100px' }} className="img-fluid" />
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Title</Label>
                    {editId === product.banner_id ? (
                      <Input type="text" value={editedData.banner_title} onChange={(e) => setEditedData({ ...editedData, banner_title: e.target.value })} />
                    ) : (
                      <p>{product.banner_title}</p>
                    )}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Content</Label>
                    {editId === product.banner_id ? (
                      <Input type="text" value={editedData.banner_content} onChange={(e) => setEditedData({ ...editedData, banner_content: e.target.value })} />
                    ) : (
                      <p>{product.banner_content}</p>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Button Text</Label>
                    {editId === product.banner_id ? (
                      <Input type="text" value={editedData.button_text} onChange={(e) => setEditedData({ ...editedData, button_text: e.target.value })} />
                    ) : (
                      <p>{product.button_text}</p>
                    )}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Button URL</Label>
                    {editId === product.banner_id ? (
                      <Input type="text" value={editedData.banner_url} onChange={(e) => setEditedData({ ...editedData, banner_url: e.target.value })} />
                    ) : (
                      <p>{product.banner_url}</p>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <div className='gap-2 d-flex'>
                {editId === product.banner_id ? (
                  <Button color="success" onClick={() => saveChanges(product)}>Save</Button>
                ) : (
                  <Button color="secondary" onClick={() => handleEdit(product)}>Edit</Button>
                )}
              </div>
            </Form>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
};

export default Page;
