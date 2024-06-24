"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Button, Input, Form, FormGroup, Label } from "reactstrap";

const BenefitsSection = () => {
  const [benefit, setBenefit] = useState({
    heading: "",
    icons: [],
    titles: [],
    slider_images: []
  });
  const [editMode, setEditMode] = useState(false);
  const [editedBenefit, setEditedBenefit] = useState({
    heading: "",
    icons: [],
    titles: [],
    slider_images: []
  });
  const [iconPreviews, setIconPreviews] = useState([]);
  const [sliderImagePreviews, setSliderImagePreviews] = useState([]);

  // Function to fetch initial data
  useEffect(() => {
    const fetchBenefit = async () => {
      try {
        const response = await axios.get("/api/admin/benifits");
        const benefitData = response.data[0]; // Assuming the API returns an array with one object
        
        // Convert comma-separated strings to arrays
        benefitData.icons = benefitData.icons.split(",");
        benefitData.titles = benefitData.titles.split(",");
        benefitData.slider_images = benefitData.slider_images.split(",");
        
        setBenefit(benefitData);
        setEditedBenefit(benefitData);
        setIconPreviews(benefitData.icons.map(icon => `/path/to/icons/${icon}`));
        setSliderImagePreviews(benefitData.slider_images.map(img => `/path/to/images/${img}`));
      } catch (error) {
        console.error("Error fetching benefit:", error);
      }
    };

    fetchBenefit();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBenefit((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddIcon = () => {
    setEditedBenefit((prevData) => ({
      ...prevData,
      icons: [...prevData.icons, ""],
      titles: [...prevData.titles, ""]
    }));
    setIconPreviews([...iconPreviews, ""]);
  };

  const handleIconChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newIcons = [...editedBenefit.icons];
      newIcons[index] = file.name;
      setEditedBenefit((prevData) => ({ ...prevData, icons: newIcons }));

      const newPreviews = [...iconPreviews];
      newPreviews[index] = URL.createObjectURL(file);
      setIconPreviews(newPreviews);
    }
  };

  const handleTitleChange = (index, e) => {
    const { value } = e.target;
    const newTitles = [...editedBenefit.titles];
    newTitles[index] = value;
    setEditedBenefit((prevData) => ({ ...prevData, titles: newTitles }));
  };

  const handleRemoveIcon = (index) => {
    const newIcons = [...editedBenefit.icons];
    const newTitles = [...editedBenefit.titles];
    const newPreviews = [...iconPreviews];
    newIcons.splice(index, 1);
    newTitles.splice(index, 1);
    newPreviews.splice(index, 1);
    setEditedBenefit((prevData) => ({ ...prevData, icons: newIcons, titles: newTitles }));
    setIconPreviews(newPreviews);
  };

  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newSliderImages = [...editedBenefit.slider_images];
      newSliderImages[index] = file.name;
      setEditedBenefit((prevData) => ({ ...prevData, slider_images: newSliderImages }));
      const newPreviews = [...sliderImagePreviews];
      newPreviews[index] = URL.createObjectURL(file);
      setSliderImagePreviews(newPreviews);
    }
  };

  const handleAddSliderImage = () => {
    setEditedBenefit((prevData) => ({
      ...prevData,
      slider_images: [...prevData.slider_images, ""]
    }));
    setSliderImagePreviews([...sliderImagePreviews, ""]);
  };

  const handleRemoveSliderImage = (index) => {
    const newSliderImages = [...editedBenefit.slider_images];
    const newPreviews = [...sliderImagePreviews];
    newSliderImages.splice(index, 1);
    newPreviews.splice(index, 1);
    setEditedBenefit((prevData) => ({ ...prevData, slider_images: newSliderImages }));
    setSliderImagePreviews(newPreviews);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put("/api/admin/benifits", {
        ...editedBenefit,
        icons: editedBenefit.icons.join(","),
        titles: editedBenefit.titles.join(","),
        slider_images: editedBenefit.slider_images.join(",")
      });
      setBenefit(editedBenefit);
      setEditMode(false);
      console.log("Benefit updated:", response.data);
    } catch (error) {
      console.error("Error updating benefit:", error);
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="my-4">Benefits Section</h3>
        {!editMode && (
          <Button color="secondary" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </div>

      <Form>
        <FormGroup>
          <Label for="heading">Heading</Label>
          <Input
            type="text"
            name="heading"
            value={editedBenefit.heading}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>

        <FormGroup>
          <Label>Icons and Titles</Label>
          {editedBenefit.icons.map((icon, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              {iconPreviews[index] && (
                <img src={iconPreviews[index]} alt={`Icon ${index + 1}`} style={{ width: "50px", marginRight: "10px" }} />
              )}
              <Input
                type="file"
                name="icon"
                onChange={(e) => handleIconChange(index, e)}
                disabled={!editMode}
                className="mr-2"
              />
              <Input
                type="text"
                name="title"
                value={editedBenefit.titles[index]}
                onChange={(e) => handleTitleChange(index, e)}
                readOnly={!editMode}
                placeholder={`Title ${index + 1}`}
                className="mr-2"
              />
              {editMode && (
                <Button color="danger" onClick={() => handleRemoveIcon(index)}>
                  Remove
                </Button>
              )}
            </div>
          ))}
          {editMode && (
            <Button color="primary" onClick={handleAddIcon}>
              Add Icon
            </Button>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Slider Images</Label>
          {editedBenefit.slider_images.map((image, index) => (
            <div key={index} className="mb-2 d-flex align-items-center">
              {sliderImagePreviews[index] && (
                <img src={sliderImagePreviews[index]} alt="Slider" style={{ width: "100px", marginRight: "10px" }} />
              )}
              <Input
                type="file"
                name="slider_image"
                onChange={(e) => handleFileChange(index, e)}
                disabled={!editMode}
                className="mr-2"
              />
              {editMode && (
                <Button color="danger" onClick={() => handleRemoveSliderImage(index)}>
                  Remove
                </Button>
              )}
            </div>
          ))}
          {editMode && (
            <Button color="primary" onClick={handleAddSliderImage}>
              Add Slider Image
            </Button>
          )}
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

export default BenefitsSection;
