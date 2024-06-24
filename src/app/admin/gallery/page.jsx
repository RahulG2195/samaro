// components/GalleryEditor.js
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const GalleryEditor = () => {
  const [images, setImages] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('/api/admin/gallery');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  const handleSave = async () => {
    try {
      for (let image of images) {
        if (image.id) {
          await axios.put('/api/admin/gallery', image);
        } else {
          await axios.post('/api/admin/gallery', image);
        }
      }
      setEditMode(false);
    } catch (error) {
      console.error('Error updating gallery data:', error);
    }
  };

  const handleFileChange = (index, file) => {
    const updatedImages = [...images];
    updatedImages[index].imageName = file.name;
    setImages(updatedImages);
  };

  const handleAddImage = () => {
    setImages(prevImages => [
      ...prevImages,
      { id: null, imageName: '' }
    ]);
  };

  const handleRemoveImage = async (index, id) => {
    if (id) {
      try {
        await axios.delete('/api/admin/gallery', { data: { id } });
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <Container>
      <h3 className="mb-4">Gallery Editor</h3>
      
      <Row className="mb-4">
        {images.map((image, index) => (
          <Col key={image.id || index} xs="12" sm="6" md="4" lg="3" className="mb-4">
            <Card className="h-100">
              <CardImg top src={image.imageName} alt={`Image ${index + 1}`} className="img-fluid" />
              <CardBody className="d-flex flex-column">
                {editMode && (
                  <Form className="mb-3">
                    <FormGroup>
                      <Label for={`imageFile${index}`} className="visually-hidden">
                        Upload Image
                      </Label>
                      <Input
                        type="file"
                        id={`imageFile${index}`}
                        onChange={(e) => handleFileChange(index, e.target.files[0])}
                      />
                    </FormGroup>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => handleRemoveImage(index, image.id)}
                    >
                      Remove
                    </Button>
                  </Form>
                )}
                {!editMode && <CardTitle tag="h5" className="mb-auto">Image {index + 1}</CardTitle>}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center">
        {!editMode && (
          <Button color="primary" onClick={handleToggleEditMode}>
            Edit Images
          </Button>
        )}
        {editMode && (
          <>
            <Button color="success" className="mx-2" onClick={handleSave}>
              Save Changes
            </Button>
            <Button color="secondary" className="mx-2" onClick={handleToggleEditMode}>
              Cancel
            </Button>
          </>
        )}
        {editMode && (
          <Button color="primary" className="ml-2" onClick={handleAddImage}>
            Add Image
          </Button>
        )}
      </div>
    </Container>
  );
};

export default GalleryEditor;
