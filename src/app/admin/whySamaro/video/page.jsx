"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'; // Adjust as per your styling library

const EditVideoForm = ({  }) => {
  const [videoData, setVideoData] = useState({
    id:'',
    heading: '',
    description: '',
    logo_file: null,
    logo_filename: '',
    video_file: null,
    video_filename: ''
  });
  
  const [editMode, setEditMode] = useState(false); // Edit mode state
  const [logoPreview, setLogoPreview] = useState(null); // State for logo preview
  const [videoPreview, setVideoPreview] = useState(null); // State for video preview

  useEffect(() => {
    // Fetch video data based on videoId
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(`/api/admin/whysamaro_video`); // Adjust endpoint as per your API route
        setVideoData(response.data);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideoData();
  }, []);

  useEffect(() => {
    // Set initial previews if filenames are available
    if (videoData.logo_filename) {
      setLogoPreview(`/uploads/logos/${videoData.logo_filename}`); // Assuming logos are stored in /uploads/logos/
    }
    if (videoData.video_filename) {
      setVideoPreview(`/uploads/videos/${videoData.video_filename}`); // Assuming videos are stored in /uploads/videos/
    }
  }, [videoData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (e.target.name === 'logo_file') {
      setVideoData(prevData => ({
        ...prevData,
        logo_file: file,
        logo_filename: file.name // Store logo file name
      }));
      setLogoPreview(URL.createObjectURL(file)); // Update logo preview
    } else if (e.target.name === 'video_file') {
      setVideoData(prevData => ({
        ...prevData,
        video_file: file,
        video_filename: file.name // Store video file name
      }));
      setVideoPreview(URL.createObjectURL(file)); // Update video preview
    }
  };

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData for file uploads
    const formData = new FormData();
    // formData.append('logo_file', videoData.logo_file); // Append the selected logo file
    // formData.append('video_file', videoData.video_file); // Append the selected video file
    formData.append('heading', videoData.heading);
    formData.append('description', videoData.description);
    formData.append('logo_filename', videoData.logo_filename); // Store logo file name
    formData.append('video_filename', videoData.video_filename); // Store video file name

    try {
      const response = await axios.put(`/api/admin/whysamaro_video`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Video data updated:', response.data);
      // Optionally, handle success feedback or redirection
      setEditMode(false); // Exit edit mode after successful update
    } catch (error) {
      console.error('Error updating video data:', error);
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-end mb-3">
        {!editMode && (
          <Button color="secondary" onClick={handleToggleEditMode}>
            Edit
          </Button>
        )}
      </div>
      <h3>Edit Video Details</h3>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="heading">Heading</Label>
          <Input type="text" name="heading" id="heading" value={videoData.heading} onChange={handleChange} disabled={!editMode} />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="textarea" name="description" id="description" value={videoData.description} onChange={handleChange} disabled={!editMode} />
        </FormGroup>
        
        {/* Logo Preview or File Input */}
        {!editMode ? (
          <FormGroup>
            <Label>Logo Preview</Label>
            {logoPreview && (
              <img src={logoPreview} alt="Logo Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
            )}
          </FormGroup>
        ) : (
          <FormGroup>
            <Label for="logo_file">Upload Logo File</Label>
            <Input type="file" name="logo_file" id="logo_file" onChange={handleFileChange} disabled={!editMode} />
          </FormGroup>
        )}
        
        {/* Video Preview or File Input */}
        {!editMode ? (
          <FormGroup>
            <Label>Video Preview</Label>
            {videoPreview && (
              <video controls width="400">
                <source src={videoPreview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </FormGroup>
        ) : (
          <FormGroup>
            <Label for="video_file">Upload Video File</Label>
            <Input type="file" name="video_file" id="video_file" onChange={handleFileChange} disabled={!editMode} />
          </FormGroup>
        )}

        {editMode && (
          <Button color="primary" type="submit">
            Save
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default EditVideoForm;
