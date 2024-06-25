"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap'; // Adjust imports as per your project setup

const VisionMissionEditor = () => {
  const [visionData, setVisionData] = useState({
    title: '',
    logo: '',
    subpoints: []
  });

  const [missionData, setMissionData] = useState({
    title: '',
    logo: '',
    subpoints: []
  });
  


  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchVisionData = async () => {
      try {
        const response = await axios.get('/api/admin/vision');
        const { subpoints, ...rest } = response.data;
        setVisionData({
          ...rest,
          subpoints: subpoints.split(',').map(subpoint => subpoint.trim())
        });
      } catch (error) {
        console.error('Error fetching Vision data:', error);
      }
    };

    const fetchMissionData = async () => {
      try {
        const response = await axios.get('/api/admin/mission');
        const { subpoints, ...rest } = response.data;
        setMissionData({
          ...rest,
          subpoints: subpoints.split(',').map(subpoint => subpoint.trim())
        });
      } catch (error) {
        console.error('Error fetching Mission data:', error);
      }
    };

    fetchVisionData();
    fetchMissionData();
  }, []);

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  const handleSave = async () => {
    try {
      await axios.put('/api/admin/vision', {
        ...visionData,
        subpoints: visionData.subpoints.join(', ') // Convert subpoints array back to comma-separated string
      });
      await axios.put('/api/admin/mission', {
        ...missionData,
        subpoints: missionData.subpoints.join(', ') // Convert subpoints array back to comma-separated string
      });
      setEditMode(false);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleSubpointChange = (index, type, value) => {
    if (type === 'vision') {
      const updatedSubpoints = [...visionData.subpoints];
      updatedSubpoints[index] = value;
      setVisionData(prevData => ({
        ...prevData,
        subpoints: updatedSubpoints
      }));
    } else if (type === 'mission') {
      const updatedSubpoints = [...missionData.subpoints];
      updatedSubpoints[index] = value;
      setMissionData(prevData => ({
        ...prevData,
        subpoints: updatedSubpoints
      }));
    }
  };

  const handleAddSubpoint = (type) => {
    if (type === 'vision') {
      setVisionData(prevData => ({
        ...prevData,
        subpoints: [...prevData.subpoints, '']
      }));
    } else if (type === 'mission') {
      setMissionData(prevData => ({
        ...prevData,
        subpoints: [...prevData.subpoints, '']
      }));
    }
  };

  const handleRemoveSubpoint = (index, type) => {
    if (type === 'vision') {
      const updatedSubpoints = [...visionData.subpoints];
      updatedSubpoints.splice(index, 1);
      setVisionData(prevData => ({
        ...prevData,
        subpoints: updatedSubpoints
      }));
    } else if (type === 'mission') {
      const updatedSubpoints = [...missionData.subpoints];
      updatedSubpoints.splice(index, 1);
      setMissionData(prevData => ({
        ...prevData,
        subpoints: updatedSubpoints
      }));
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between mb-3">
        <h3>Vision & Mission Editor</h3>
        {!editMode && (
          <Button color="secondary" onClick={handleToggleEditMode}>
            Edit
          </Button>
        )}
      </div>

      {/* Vision Section */}
      <Card className="mb-4">
        <CardBody>
          <CardTitle tag="h5">Vision</CardTitle>
          <Form>
            <FormGroup>
              <Label for="visionTitle">Title</Label>
              <Input
                type="text"
                id="visionTitle"
                value={visionData.title}
                onChange={(e) => setVisionData({ ...visionData, title: e.target.value })}
                disabled={!editMode}
              />
            </FormGroup>
            <FormGroup>
              <Label for="visionLogo">Logo Preview</Label><br />
              {visionData.logo && (
                <CardImg src={visionData.logo} alt="Vision Logo" style={{ maxWidth: '200px', maxHeight: '200px' }} />
              )}
            </FormGroup>
            {editMode && (
              <FormGroup>
                <Label for="visionLogoFile">Upload Logo File</Label>
                <Input
                  type="file"
                  id="visionLogoFile"
                  onChange={(e) => setVisionData({ ...visionData, logo: URL.createObjectURL(e.target.files[0]) })}
                />
              </FormGroup>
            )}
            <FormGroup>
              <Label for="visionSubpoints">Subpoints</Label>
              {visionData.subpoints.map((subpoint, index) => (
                <div key={index} className="d-flex mb-2">
                  <Input
                    type="text"
                    value={subpoint}
                    onChange={(e) => handleSubpointChange(index, 'vision', e.target.value)}
                    disabled={!editMode}
                  />
                  {editMode && (
                    <Button color="danger" className="ml-2" onClick={() => handleRemoveSubpoint(index, 'vision')}>
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              {editMode && (
                <Button color="primary" onClick={() => handleAddSubpoint('vision')}>
                  Add Subpoint
                </Button>
              )}
            </FormGroup>
          </Form>
        </CardBody>
      </Card>

      {/* Mission Section */}
      <Card>
        <CardBody>
          <CardTitle tag="h5">Mission</CardTitle>
          <Form>
            <FormGroup>
              <Label for="missionTitle">Title</Label>
              <Input
                type="text"
                id="missionTitle"
                value={missionData.title}
                onChange={(e) => setMissionData({ ...missionData, title: e.target.value })}
                disabled={!editMode}
              />
            </FormGroup>
            <FormGroup>
              <Label for="missionLogo">Logo Preview</Label><br />
              {missionData.logo && (
                <CardImg src={missionData.logo} alt="Mission Logo" style={{ maxWidth: '200px', maxHeight: '200px' }} />
              )}
            </FormGroup>
            {editMode && (
              <FormGroup>
                <Label for="missionLogoFile">Upload Logo File</Label>
                <Input
                  type="file"
                  id="missionLogoFile"
                  onChange={(e) => setMissionData({ ...missionData, logo: URL.createObjectURL(e.target.files[0]) })}
                />
              </FormGroup>
            )}
            <FormGroup>
              <Label for="missionSubpoints">Subpoints</Label>
              {missionData.subpoints.map((subpoint, index) => (
                <div key={index} className="d-flex mb-2">
                  <Input
                    type="text"
                    value={subpoint}
                    onChange={(e) => handleSubpointChange(index, 'mission', e.target.value)}
                    disabled={!editMode}
                  />
                  {editMode && (
                    <Button color="danger" className="ml-2" onClick={() => handleRemoveSubpoint(index, 'mission')}>
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              {editMode && (
                <Button color="primary" onClick={() => handleAddSubpoint('mission')}>
                  Add Subpoint
                </Button>
              )}
            </FormGroup>
          </Form>
        </CardBody>
      </Card>

      {/* Save Button */}
      {editMode && (
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>
      )}
    </Container>
  );
};

export default VisionMissionEditor;
