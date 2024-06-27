"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

const EditBuildHomePage = () => {
  const [buildHomeData, setBuildHomeData] = useState({
    heading: "",
    description: "",
    feature1_icon: "",
    feature1_title: "",
    feature2_icon: "",
    feature2_title: "",
    feature3_icon: "",
    feature3_title: "",
  });

  const [editMode, setEditMode] = useState(false);

  // Function to fetch initial data
  useEffect(() => {
    const fetchBuildHomeData = async () => {
      try {
        const response = await axios.get("/api/admin/buildHome"); // Using API route for fetching data
        const data = response.data;
        setBuildHomeData({
          ...data,
          feature1_icon: data.feature1_icon || "",
          feature2_icon: data.feature2_icon || "",
          feature3_icon: data.feature3_icon || "",
        });
      } catch (error) {
        console.error("Error fetching build home data:", error);
      }
    };

    fetchBuildHomeData();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const fileName = files[0]?.name || "";
      setBuildHomeData((prevData) => ({
        ...prevData,
        [name]: fileName,
      }));
    } else {
      setBuildHomeData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      Object.entries(buildHomeData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await axios.put("/api/admin/buildHome", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Build home data updated:", response.data);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating build home data:", error);
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="my-4">Edit Build Home Data</h3>
        {!editMode && (
          <Button color="secondary" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </div>

      <Form>
        <FormGroup>
          <Label for="heading" className="fw-bold">Heading</Label>
          <Input
            type="text"
            name="heading"
            id="heading"
            value={buildHomeData.heading}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            value={buildHomeData.description}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>

        <FormGroup>
          <Label for="feature1_icon">Feature 1 Icon</Label>
          <img src={`/uploads/${buildHomeData.feature1_icon}`} alt="Feature 1 Icon" />
          <Input
            type="file"
            name="feature1_icon"
            id="feature1_icon"
            onChange={handleChange}
            disabled={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="feature1_title">Feature 1 Title</Label>
          <Input
            type="text"
            name="feature1_title"
            id="feature1_title"
            value={buildHomeData.feature1_title}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>

        <FormGroup>
          <Label for="feature2_icon">Feature 2 Icon</Label>
          <img src={`/uploads/${buildHomeData.feature2_icon}`} alt="Feature 2 Icon" />
          <Input
            type="file"
            name="feature2_icon"
            id="feature2_icon"
            onChange={handleChange}
            disabled={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="feature2_title">Feature 2 Title</Label>
          <Input
            type="text"
            name="feature2_title"
            id="feature2_title"
            value={buildHomeData.feature2_title}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>

        <FormGroup>
          <Label for="feature3_icon">Feature 3 Icon</Label>
          <img src={`/uploads/${buildHomeData.feature3_icon}`} alt="Feature 3 Icon" />
          <Input
            type="file"
            name="feature3_icon"
            id="feature3_icon"
            onChange={handleChange}
            disabled={!editMode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="feature3_title">Feature 3 Title</Label>
          <Input
            type="text"
            name="feature3_title"
            id="feature3_title"
            value={buildHomeData.feature3_title}
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

export default EditBuildHomePage;
