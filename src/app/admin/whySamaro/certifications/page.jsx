"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap';

const CertificationsEditor = () => {
  const [certifications, setCertifications] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await axios.get('/api/admin/certifications');
        setCertifications(response.data);
      } catch (error) {
        console.error('Error fetching certifications data:', error);
      }
    };

    fetchCertifications();
  }, []);

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  const handleSave = async () => {
    try {
      for (let certification of certifications) {
        if (certification.id) {
          await axios.put('/api/admin/certifications', certification);
        } else {
          await axios.post('/api/admin/certifications', certification);
        }
      }
      setEditMode(false);
    } catch (error) {
      console.error('Error updating certifications data:', error);
    }
  };

  const handleLogoChange = (index, file) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index].logo = URL.createObjectURL(file);
    setCertifications(updatedCertifications);
  };

  const handleAddCertification = () => {
    setCertifications(prevCertifications => [
      ...prevCertifications,
      { id: null, logo: '' }
    ]);
  };

  const handleRemoveCertification = async (index, id) => {
    if (id) {
      try {
        await axios.delete('/api/admin/certifications', { data: { id } });
      } catch (error) {
        console.error('Error deleting certification:', error);
      }
    }
    const updatedCertifications = [...certifications];
    updatedCertifications.splice(index, 1);
    setCertifications(updatedCertifications);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between mb-3">
        <h3>Certifications Editor</h3>
        {!editMode && (
          <Button color="secondary" onClick={handleToggleEditMode}>
            Edit
          </Button>
        )}
      </div>

      {certifications.map((certification, index) => (
        <Card key={certification.id || index} className="mb-4">
          <CardBody>
            <CardTitle tag="h5">Certification {index + 1}</CardTitle>
            <Form>
              <FormGroup>
                <Label for={`certificationLogo${index}`}>Logo Preview</Label><br />
                {certification.logo && (
                  <CardImg src={certification.logo} alt="Certification Logo" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                )}
              </FormGroup>
              {editMode && (
                <FormGroup>
                  <Label for={`certificationLogoFile${index}`}>Upload Logo File</Label>
                  <Input
                    type="file"
                    id={`certificationLogoFile${index}`}
                    onChange={(e) => handleLogoChange(index, e.target.files[0])}
                  />
                </FormGroup>
              )}
            </Form>
            {editMode && (
              <Button color="danger" className="mt-2" onClick={() => handleRemoveCertification(index, certification.id)}>
                Remove
              </Button>
            )}
          </CardBody>
        </Card>
      ))}

      {editMode && (
        <>
          <Button color="primary" onClick={handleAddCertification}>
            Add Certification
          </Button>
          <Button color="primary" className="ml-2" onClick={handleSave}>
            Save
          </Button>
        </>
      )}
    </Container>
  );
};

export default CertificationsEditor;
