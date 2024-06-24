"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Input, Button, Table } from 'reactstrap';

const DownloadCenterEditor = () => {
  const [downloads, setDownloads] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [newDownload, setNewDownload] = useState({
    dc_category: '',
    dc_type: '',
    image: null,
    pdf: null,
    status: 1
  });

  useEffect(() => {
    fetchDownloads();
  }, []);

  const fetchDownloads = async () => {
    try {
      const response = await axios.get('/api/admin/main_dcPage');
      setDownloads(response.data);
    } catch (error) {
      console.error('Error fetching download items:', error);
    }
  };

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  const handleSave = async () => {
    try {
      // Save updated downloads
      await Promise.all(downloads.map(async (download) => {
        await axios.put(`/api/admin/main_dcPage`, download);
      }));

      // Save new download if any
      if (newDownload.dc_category && newDownload.dc_type && newDownload.image && newDownload.pdf) {
        const formData = new FormData();
        formData.append('dc_category', newDownload.dc_category);
        formData.append('dc_type', newDownload.dc_type);
        formData.append('image', newDownload.image);
        formData.append('pdf', newDownload.pdf);
        formData.append('status', newDownload.status);

        await axios.post('/api/admin/main_dcPage', newDownload);

        setNewDownload({
          dc_category: '',
          dc_type: '',
          image: null,
          pdf: null,
          status: 1
        });

        fetchDownloads(); // Refresh the list after save
      }
      
      setEditMode(false);
    } catch (error) {
      console.error('Error saving downloads:', error);
    }
  };

  const handleInputChange = (field, value, dc_id) => {
    if (dc_id !== 'new') {
      // Update existing download
      const updatedDownloads = downloads.map(download => {
        if (download.dc_id === dc_id) {
          return {
            ...download,
            [field]: value,
          };
        }
        return download;
      });
      setDownloads(updatedDownloads);
    } else {
      // Update new download
      setNewDownload({
        ...newDownload,
        [field]: value,
      });
    }
  };
    // const updatedDownloads = downloads.map(download => {
    //   if (download.dc_id === dc_id) {
    //     return {
    //       ...download,
    //       [field]: value,
    //     };
    //   }
    //   return download;
    // });

  //   setDownloads(updatedDownloads);
  // };

  const handleFileChange = (event, fileType) => {
    const file = event.target.files[0];
    const fileName = file ? file.name : ''; // Get the file name, if file exists

    setNewDownload({
      ...newDownload,
      [fileType]: file,
      [`${fileType}Name`]: fileName, // Store file name in state
    });
  };

  const handleAddNewDownload = () => {
    // Add new download to downloads array
    if (newDownload.dc_category && newDownload.dc_type && newDownload.image && newDownload.pdf) {
      setDownloads([...downloads, { ...newDownload }]);
      setNewDownload({
        dc_category: '',
        dc_type: '',
        image: null,
        pdf: null,
        status: 1
      });
    }
  };

  const handleRemove = async (dc_id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`/api/admin/main_dcPage`,{data:{dc_id}});
        setDownloads(downloads.filter(item => item.dc_id !== dc_id));
      } catch (error) {
        console.error('Error deleting download item:', error);
      }
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between mb-3">
        <h3>Download Center Editor</h3>
        {!editMode && (
          <Button color="secondary" onClick={handleToggleEditMode}>
            Edit
          </Button>
        )}
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Type</th>
            <th>Image</th>
            <th>PDF</th>
            {editMode && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {downloads.map((download, index) => (
            <tr key={download.dc_id}>
              <td>
                {editMode ? (
                  <Input
                    type="text"
                    value={download.dc_category}
                    onChange={(e) => handleInputChange('dc_category', e.target.value, download.dc_id)}
                  />
                ) : (
                  download.dc_category
                )}
              </td>
              <td>
                {editMode ? (
                  <Input
                    type="text"
                    value={download.dc_type}
                    onChange={(e) => handleInputChange('dc_type', e.target.value, download.dc_id)}
                  />
                ) : (
                  download.dc_type
                )}
              </td>
              <td>
                {editMode ? (
                  <Input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'image')}
                  />
                ) : (
                  // <div>
                  //   {download.imageName && (
                  //     <a className='color-danger' href={download.image} target="_blank" rel="noopener noreferrer">{download.imageName}</a>
                  //   )}
                  // </div>
                  <img src={download.image} alt="err" />
                )}
              </td>
              <td>
                {editMode ? (
                  <Input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'pdf')}
                  />
                ) : (
                  // <div>
                  //   {download.pdfName && (
                  //     <a href={download.pdf} target="_blank" rel="noopener noreferrer">{download.pdfName}</a>
                  //   )}
                  // </div>
                  <span>{download.pdf}</span>
                )}
              </td>
              {editMode && (
                <td>
                  <Button color="danger" onClick={() => handleRemove(download.dc_id)}>Remove</Button>
                </td>
              )}
            </tr>
          ))}
          {editMode && (
            <tr key="new-download">
              <td>
                <Input
                  type="text"
                  value={newDownload.dc_category}
                  onChange={(e) => handleInputChange('dc_category', e.target.value, 'new')}
                />
              </td>
              <td>
                <Input
                  type="text"
                  value={newDownload.dc_type}
                  onChange={(e) => handleInputChange('dc_type', e.target.value, 'new')}
                />
              </td>
              <td>
                <Input
                  type="file"
                  onChange={(e) => handleFileChange(e, 'image')}
                />
              </td>
              <td>
                <Input
                  type="file"
                  onChange={(e) => handleFileChange(e, 'pdf')}
                />
              </td>
              <td>
                <Button color="primary" onClick={handleAddNewDownload}>Add</Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {editMode && (
        <div className="text-right mt-3">
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      )}
    </Container>
  );
};

export default DownloadCenterEditor;