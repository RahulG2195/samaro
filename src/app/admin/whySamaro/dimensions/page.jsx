"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'; // Adjust imports as per your project setup

const DimensionsEditor = () => {
  const [dimensionsData, setDimensionsData] = useState({
    plank_sizes_heading: '',
    plank_sizes_description: '',
    plank_sizes_image_url: '',
    plank_thickness_heading: '',
    plank_thickness_description: '',
    plank_thickness_main_image_url: '',
    plank_thickness_image_1: null,
    plank_thickness_size_range_1: '',
    plank_thickness_image_2: null,
    plank_thickness_size_range_2: '',
    plank_thickness_image_3: null,
    plank_thickness_size_range_3: ''
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchDimensionsData = async () => {
      try {
        const response = await axios.get('/api/admin/dimensions');
        if (response.status === 200) {
          setDimensionsData(response.data[0]); // Assuming there's only one row of dimensions data
        }
      } catch (error) {
        console.error('Error fetching dimensions data:', error);
      }
    };

    fetchDimensionsData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // For file inputs, set the actual file object in state
    if (type === 'file') {
      setDimensionsData(prevData => ({
        ...prevData,
        [name]: files[0] // Assuming single file upload
      }));
    } else {
      setDimensionsData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSave = async () => {
    try {
   

      await axios.put('/api/admin/dimensions', dimensionsData)
      setEditMode(false); // Exit edit mode after saving
    } catch (error) {
      console.error('Error saving dimensions data:', error);
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between mb-3">
        <h3>Dimensions Editor</h3>
        {!editMode && (
          <Button color="secondary" onClick={() => setEditMode(true)}>Edit</Button>
        )}
      </div>
      <Form>
        <FormGroup>
          <Label for="plankSizesHeading">Plank Sizes Heading</Label>
          <Input
            type="text"
            name="plank_sizes_heading"
            id="plankSizesHeading"
            value={dimensionsData.plank_sizes_heading}
            onChange={handleChange}
            disabled={!editMode} // Disable input in view mode
          />
        </FormGroup>
        <FormGroup>
          <Label for="plankSizesDescription">Plank Sizes Description</Label>
          <Input
            type="textarea"
            name="plank_sizes_description"
            id="plankSizesDescription"
            value={dimensionsData.plank_sizes_description}
            onChange={handleChange}
            disabled={!editMode} // Disable input in view mode
          />
        </FormGroup>
        <FormGroup>
          <Label for="plankSizesImage">Plank Sizes Image URL</Label>
          <Input
            type="text"
            name="plank_sizes_image_url"
            id="plankSizesImage"
            value={dimensionsData.plank_sizes_image_url}
            onChange={handleChange}
            disabled={!editMode} // Disable input in view mode
          />
        </FormGroup>
        <FormGroup>
          <Label for="plankThicknessHeading">Plank Thickness Heading</Label>
          <Input
            type="text"
            name="plank_thickness_heading"
            id="plankThicknessHeading"
            value={dimensionsData.plank_thickness_heading}
            onChange={handleChange}
            disabled={!editMode} // Disable input in view mode
          />
        </FormGroup>
        <FormGroup>
          <Label for="plankThicknessDescription">Plank Thickness Description</Label>
          <Input
            type="textarea"
            name="plank_thickness_description"
            id="plankThicknessDescription"
            value={dimensionsData.plank_thickness_description}
            onChange={handleChange}
            disabled={!editMode} // Disable input in view mode
          />
        </FormGroup>
        <FormGroup>
          <Label for="plankThicknessMainImage">Plank Thickness Main Image URL</Label>
          <Input
            type="text"
            name="plank_thickness_main_image_url"
            id="plankThicknessMainImage"
            value={dimensionsData.plank_thickness_main_image_url}
            onChange={handleChange}
            disabled={!editMode} // Disable input in view mode
          />
        </FormGroup>
        <FormGroup>
          <Label for="plankThicknessImage1">Plank Thickness Image 1</Label>
          <Input
            type="file"
            name="plank_thickness_image_1"
            id="plankThicknessImage1"
            onChange={handleChange}
            disabled={!editMode} // Disable input in view mode
          />
          <Label for="plankThicknessSizeRange1">Size Range 1</Label>
          <Input
            type="text"
            name="plank_thickness_size_range_1"
            id="plankThicknessSizeRange1"
            value={dimensionsData.plank_thickness_size_range_1}
            onChange={handleChange}
            disabled={!editMode} // Disable input in view mode
          />
        </FormGroup>
        <FormGroup>
          <Label for="plankThicknessImage2">Plank Thickness Image 2</Label>
          <Input
            type="file"
            name="plank_thickness_image_2"
            id="plankThicknessImage2"
            onChange={handleChange}
            disabled={!editMode} // Disable input in view mode
          />
          <Label for="plankThicknessSizeRange2">Size Range 2</Label>
          <Input
            type="text"
            name="plank_thickness_size_range_2"
            id="plankThicknessSizeRange2"
            value={dimensionsData.plank_thickness_size_range_2}
            onChange={handleChange}
            disabled={!editMode} // Disable input in view mode
          />
        </FormGroup>
        <FormGroup>
          <Label for="plankThicknessImage3">Plank Thickness Image 3</Label>
          <Input
            type="file"
            name="plank_thickness_image_3"
            id="plankThicknessImage3"
            onChange={handleChange}
            disabled={!editMode} // Disable input in view mode
          />
          <Label for="plankThicknessSizeRange3">Size Range 3</Label>
          <Input
            type="text"
            name="plank_thickness_size_range_3"
            id="plankThicknessSizeRange3"
            value={dimensionsData.plank_thickness_size_range_3}
            onChange={handleChange}
            disabled={!editMode} // Disable input in view mode
          />
        </FormGroup>
        
        {editMode && (
          <Button color="primary" onClick={handleSave}>Save</Button>
        )}
      </Form>
    </Container>
  );
};

export default DimensionsEditor;