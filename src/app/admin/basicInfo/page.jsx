"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Button, Input, Form, FormGroup, Label } from "reactstrap";

const BasicInfoPage = () => {
  const [basicInfo, setBasicInfo] = useState({
    comp_logo: "",
    email1: "",
    email2: "",
    mobile_no_1: "",
    mobile_no_2: "",
    facebook_url: "",
    insta_url: "",
    linkedin_url: "",
    youtube_url: "",
    address: "",
    map_url: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [logoPreview, setLogoPreview] = useState("");

  // Function to fetch initial data
  useEffect(() => {
    const fetchBasicInfo = async () => {
      try {
        const response = await axios.get("/api/admin/basicInfo");
        const info = response.data;
        setBasicInfo(info);
        setEditedData(info);
        setLogoPreview(info.comp_logo); // Set the initial logo preview
      } catch (error) {
        console.error("Error fetching basic info:", error);
      }
    };

    fetchBasicInfo();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditedData((prevData) => ({ ...prevData, comp_logo: file.name }));
      setLogoPreview(URL.createObjectURL(file)); // Set the logo preview
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.put("/api/admin/basicInfo", editedData);
      setBasicInfo(editedData);
      setEditMode(false);
      console.log("Basic info updated:", response.data);
    } catch (error) {
      console.error("Error updating basic info:", error);
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-4">Basic Info</h1>
        {!editMode && (
          <Button color="secondary" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </div>

      <Form>
        <FormGroup>
          <Label for="comp_logo">Company Logo</Label>
          {logoPreview && (
            <div>
              <img src={logoPreview} alt="Company Logo" style={{ width: "100px", marginBottom: "10px" }} />
            </div>
          )}
          <Input
            type="file"
            name="comp_logo"
            id="comp_logo"
            onChange={handleFileChange}
            disabled={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email1">Email 1</Label>
          <Input
            type="email"
            name="email1"
            value={editedData.email1}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email2">Email 2</Label>
          <Input
            type="email"
            name="email2"
            value={editedData.email2}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="mobile_no_1">Mobile No 1</Label>
          <Input
            type="text"
            name="mobile_no_1"
            value={editedData.mobile_no_1}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="mobile_no_2">Mobile No 2</Label>
          <Input
            type="text"
            name="mobile_no_2"
            value={editedData.mobile_no_2}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="facebook_url">Facebook URL</Label>
          <Input
            type="text"
            name="facebook_url"
            value={editedData.facebook_url}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="insta_url">Instagram URL</Label>
          <Input
            type="text"
            name="insta_url"
            value={editedData.insta_url}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="linkedin_url">LinkedIn URL</Label>
          <Input
            type="text"
            name="linkedin_url"
            value={editedData.linkedin_url}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="youtube_url">YouTube URL</Label>
          <Input
            type="text"
            name="youtube_url"
            value={editedData.youtube_url}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            type="textarea"
            name="address"
            value={editedData.address}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="map_url">Map URL</Label>
          <Input
            type="text"
            name="map_url"
            value={editedData.map_url}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>

        {editMode && (
          <Button color="success" onClick={handleSave}>
            Save
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default BasicInfoPage;