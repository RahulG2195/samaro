"use client"
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Button, Input, Form, FormGroup, Label, Row, Col } from "reactstrap";

const page = () => {
  const [benefitsData, setBenefitsData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState(null);

  useEffect(() => {
    const fetchBenefitsData = async () => {
      try {
        const response = await axios.get("/api/admin/benifits");
        const data = response.data[0]; // Assuming response is an array with a single object

        // Initialize benefits with icons and titles
        const benefits = data.icons.split(",").map((icon, index) => ({
          icon: icon,
          title: data.titles.split(",")[index],
          file: null, // placeholder for uploaded file
        }));

        const initialData = {
          id: data.id,
          heading: data.heading,
          benefits: benefits,
          sliderImages: data.slider_images.split(",") || [],
        };

        setBenefitsData(initialData);
        setEditedData(initialData);
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
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    const updatedBenefits = [...editedData.benefits];
    updatedBenefits[index].file = file;
    setEditedData((prevData) => ({
      ...prevData,
      benefits: updatedBenefits,
    }));
  };

  const handleSave = async () => {
    try {
      console.log("Edited Data:", editedData); // Log editedData before making the request

      // Prepare form data
      const formData = new FormData();
      formData.append("id", editedData.id);
      formData.append("heading", editedData.heading);

      // Append benefits data with icons and titles
      editedData.benefits.forEach((benefit, index) => {
        formData.append(`icon_${index}`, benefit.icon);
        formData.append(`title_${index}`, benefit.title);
        if (benefit.file) {
          formData.append(`file_${index}`, benefit.file);
        }
      });

      // Append slider images
      editedData.sliderImages.forEach((image, index) => {
        formData.append(`slider_image_${index}`, image);
      });

      // Send PUT request to update data
      const response = await axios.put("/api/admin/benifits", formData);

      console.log("Benefits data updated successfully:", response.data);
      setBenefitsData(editedData); // Update local state with edited data
      setEditMode(false);
    } catch (error) {
      console.error("Error updating benefits data:", error);
    }
  };

  const handleAddBenefit = () => {
    setEditedData((prevData) => ({
      ...prevData,
      benefits: [
        ...prevData.benefits,
        {
          icon: "",
          title: "",
          // file: null,
        },
      ],
    }));
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-4">Benefits Info</h1>
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
            value={editedData?.heading || ""}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </FormGroup>

        {/* Render benefits icons, titles, and remove buttons */}
        {editedData?.benefits.map((benefit, index) => (
          <FormGroup key={index} className="mb-3">
            <Row>
              <Col sm="2">
                <Label>{`Benefit ${index + 1} Icon`}</Label>
                <Input
                  type="file"
                  name={`benefit_icon_${index}`}
                  onChange={(e) => handleFileChange(index, e)}
                  disabled={!editMode}
                />
                {benefit.icon && typeof benefit.icon === "string" && (
                  <img
                    src={benefit.icon}
                    alt={`Benefit ${index + 1} Icon`}
                    style={{ width: "100px", marginTop: "10px" }}
                  />
                )}
                {benefit.icon && typeof benefit.icon !== "string" && (
                  <img
                    src={URL.createObjectURL(benefit.icon)}
                    alt={`Benefit ${index + 1} Icon`}
                    style={{ width: "100px", marginTop: "10px" }}
                  />
                )}
              </Col>
              <Col sm="8">
                <Label>{`Benefit ${index + 1} Title`}</Label>
                <Input
                  type="text"
                  value={benefit.title}
                  onChange={(e) =>
                    setEditedData((prevData) => ({
                      ...prevData,
                      benefits: prevData.benefits.map((item, idx) =>
                        idx === index ? { ...item, title: e.target.value } : item
                      ),
                    }))
                  }
                  readOnly={!editMode}
                />
              </Col>
              <Col sm="2">
                {editMode && (
                  <Button
                    color="danger"
                    onClick={() =>
                      setEditedData((prevData) => ({
                        ...prevData,
                        benefits: prevData.benefits.filter(
                          (item, idx) => idx !== index
                        ),
                      }))
                    }
                    className="mt-4"
                  >
                    Remove
                  </Button>
                )}
              </Col>
            </Row>
          </FormGroup>
        ))}

        {/* Add benefit button */}
        {editMode && (
          <Button color="primary" onClick={handleAddBenefit} className="mb-3">
            Add New Benefit
          </Button>
        )}

        {/* File input for slider images */}
        <FormGroup>
          <Label for="sliderImages">Slider Images</Label>
          {editedData?.sliderImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slider Image ${index + 1}`}
                style={{ width: "100px", marginBottom: "10px" }}
              />
              {editMode && (
                <Button
                  color="danger"
                  onClick={() =>
                    setEditedData((prevData) => ({
                      ...prevData,
                      sliderImages: prevData.sliderImages.filter(
                        (item, idx) => idx !== index
                      ),
                    }))
                  }
                  className="mt-2"
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Input
            type="file"
            name="sliderImages"
            id="sliderImages"
            onChange={(e) =>
              setEditedData((prevData) => ({
                ...prevData,
                sliderImages: [...prevData.sliderImages, ...e.target.files],
              }))
            }
            multiple
            disabled={!editMode}
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

export default page;
