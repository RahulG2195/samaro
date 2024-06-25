"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'; // Adjust imports as per your project setup

const DimensionsEditor = () => {
  const [dimensionsData, setDimensionsData] = useState({
    plank_sizes_heading: '',
    plank_sizes_description: '',
    plank_sizes_image: null,
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
    const { name, value } = e.target;
    setDimensionsData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (name, file) => {
    if (file) {
      // If a file is provided, set the file name
      setDimensionsData(prevData => ({
        ...prevData,
        [name]: file.name
      }));
    } else {
      // If no file is provided, retain the previous data
      setDimensionsData(prevData => ({
        ...prevData,
        [name]: prevData[name]
      }));
    }
  };

  const handleSave = async () => {
    try {
      // Prepare data to be sent to the backend
      const { plank_thickness_main_image_url, ...dataToSave } = dimensionsData;

      await axios.put('/api/admin/dimensions', {
        ...dataToSave,
        plank_thickness_main_image_url: plank_thickness_main_image_url.split('/').pop() // Save only the filename
      });

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
          <Label for="plankSizesImage">Plank Sizes Image</Label>
          {dimensionsData.plank_sizes_image && (
            <div>
              <img
                src={`${dimensionsData.plank_sizes_image}`}
                alt="Plank Sizes"
                className="img-thumbnail"
                style={{ width: '100px', height: 'auto' }}
              />
              <p>{dimensionsData.plank_sizes_image}</p>
            </div>
          )}
          <Input
            type="file"
            id="plankSizesImage"
            onChange={(e) => handleFileChange('plank_sizes_image', e.target.files[0])}
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
            type="file"
            name="plank_thickness_main_image_url"
            id="plankThicknessMainImage"
            onChange={(e) => handleFileChange('plank_thickness_main_image_url', e.target.files[0])}
            disabled={!editMode} // Disable input in view mode
          />
        </FormGroup>
        <FormGroup>
          <Label for="plankThicknessImage1">Plank Thickness Image 1</Label>
          {dimensionsData.plank_thickness_image_1 && (
            <div>
              <img
                src={`/uploads/${dimensionsData.plank_thickness_image_1}`}
                alt="Plank Thickness 1"
                className="img-thumbnail"
                style={{ width: '100px', height: 'auto' }}
              />
              <p>{dimensionsData.plank_thickness_image_1}</p>
            </div>
          )}
          <Input
            type="file"
            id="plankThicknessImage1"
            onChange={(e) => handleFileChange('plank_thickness_image_1', e.target.files[0])}
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
          {dimensionsData.plank_thickness_image_2 && (
            <div>
              <img
                src={`/uploads/${dimensionsData.plank_thickness_image_2}`}
                alt="Plank Thickness 2"
                className="img-thumbnail"
                style={{ width: '100px', height: 'auto' }}
              />
              <p>{dimensionsData.plank_thickness_image_2}</p>
            </div>
          )}
          <Input
            type="file"
            id="plankThicknessImage2"
            onChange={(e) => handleFileChange('plank_thickness_image_2', e.target.files[0])}
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
          {dimensionsData.plank_thickness_image_3 && (
            <div>
              <img
                src={`/uploads/${dimensionsData.plank_thickness_image_3}`}
                alt="Plank Thickness 3"
                className="img-thumbnail"
                style={{ width: '100px', height: 'auto' }}
              />
              <p>{dimensionsData.plank_thickness_image_3}</p>
            </div>
          )}
          <Input
            type="file"
            id="plankThicknessImage3"
            onChange={(e) => handleFileChange('plank_thickness_image_3', e.target.files[0])}
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
