"use client"
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Button, Form, FormGroup, Label, Input, Table } from "reactstrap";

const EditBenefitsPage = () => {
  const [benefitsData, setBenefitsData] = useState({
    heading: "",
    benefits: [],
    sliderImages: [],
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchBenefitsData = async () => {
      try {
        const response = await axios.get("/api/admin/benifits");
        const data = response.data[0]; // Assuming the API response is an array with a single object
        setBenefitsData({
          heading: data.heading,
          benefits: JSON.parse(data.icons).map((icon, index) => ({
            icon: icon,
            title: JSON.parse(data.titles)[index],
          })),
          sliderImages: JSON.parse(data.slider_images).map((image) => ({
            url: image,
            file: null, // Placeholder for file upload
          })),
        });
      } catch (error) {
        console.error("Error fetching benefits data:", error);
      }
    };

    fetchBenefitsData();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setBenefitsData((prevData) => ({
        ...prevData,
        sliderImages: [...prevData.sliderImages, { url: URL.createObjectURL(file), file }],
      }));
    } else {
      setBenefitsData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleBenefitChange = (index, field, value) => {
    const updatedBenefits = benefitsData.benefits.map((benefit, i) =>
      i === index ? { ...benefit, [field]: value } : benefit
    );
    setBenefitsData((prevData) => ({
      ...prevData,
      benefits: updatedBenefits,
    }));
  };

  const handleAddBenefit = () => {
    setBenefitsData((prevData) => ({
      ...prevData,
      benefits: [...prevData.benefits, { icon: "", title: "" }],
    }));
  };

  const handleRemoveBenefit = (index) => {
    const updatedBenefits = benefitsData.benefits.filter((_, i) => i !== index);
    setBenefitsData((prevData) => ({
      ...prevData,
      benefits: updatedBenefits,
    }));
  };

  const handleSliderImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setBenefitsData((prevData) => ({
      ...prevData,
      sliderImages: [...prevData.sliderImages, ...files.map((file) => ({ url: URL.createObjectURL(file), file }))],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("heading", benefitsData.heading);
    
    // Append benefits icons and titles
    formData.append("icons", JSON.stringify(benefitsData.benefits.map((benefit) => benefit.icon)));
    formData.append("titles", JSON.stringify(benefitsData.benefits.map((benefit) => benefit.title)));
  
    // Append slider images files
    benefitsData.sliderImages.forEach((image, index) => {
      if (image.file) {
        formData.append(`sliderImages[${index}]`, image.file);
      }
    });
  
    try {
      const response = await axios.put("/api/admin/benefits", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Benefits data updated:", response.data);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating benefits data:", error);
      console.log("Error response:", error.response); // Log the Axios error response for more details
    }
  };
  

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-4">Edit Benefits Data</h1>
        {!editMode && (
          <Button color="secondary" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </div>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="heading">Heading</Label>
          <Input
            type="text"
            name="heading"
            id="heading"
            value={benefitsData.heading}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>

        <h3>Benefits</h3>
        <Table>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Title</th>
              {editMode && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {benefitsData.benefits.map((benefit, index) => (
              <tr key={index}>
                <td>
                  {benefit.icon && (
                    <img
                      src={benefit.icon}
                      alt="Benefit Icon"
                      style={{ width: "50px", height: "50px", marginRight: "10px" }}
                    />
                  )}
                  <Input
                    type="file"
                    name="icon"
                    onChange={(e) => handleBenefitChange(index, "icon", e.target.files[0])}
                    disabled={!editMode}
                  />
                </td>
                <td>
                  <Input
                    type="text"
                    value={benefit.title}
                    onChange={(e) => handleBenefitChange(index, "title", e.target.value)}
                    readOnly={!editMode}
                  />
                </td>
                {editMode && (
                  <td>
                    <Button color="danger" onClick={() => handleRemoveBenefit(index)}>
                      Remove
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
        {editMode && (
          <Button color="primary" onClick={handleAddBenefit}>
            Add Benefit
          </Button>
        )}

        <h3>Slider Images</h3>
        <FormGroup>
          <Label for="sliderImages">Slider Images</Label>
          <Input
            type="file"
            name="sliderImages"
            id="sliderImages"
            multiple
            onChange={handleSliderImagesChange}
            disabled={!editMode}
          />
          {benefitsData.sliderImages.length > 0 && (
            <div className="slider-preview">
              {benefitsData.sliderImages.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`Slider ${index + 1}`}
                  style={{ width: "100px", height: "100px", marginRight: "10px" }}
                />
              ))}
            </div>
          )}
        </FormGroup>

        {editMode && (
          <Button color="success" type="submit">
            Save
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default EditBenefitsPage;
