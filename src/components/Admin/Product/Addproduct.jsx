"use client"
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Addproducts = () => {
  const router = useRouter();
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [frontImage, setFrontImage] = useState("");
  const [otherImages, setOtherImages] = useState([]);
  


  const notify = () => {
    toast.success(' Product added successfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const places = [
    "Bathroom",
    "Bedroom",
    "Childrensroom",
    "Dining room",
    "Hallway",
    "Kitchen",
    "Living room",
    "Office",
  ];

  const togglePlace = (option) => {
    if (selectedPlaces.includes(option)) {
      setSelectedPlaces(selectedPlaces.filter((item) => item !== option));
    } else {
      setSelectedPlaces([...selectedPlaces, option]);
    }
  };



  const handleAllinputs = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("places", (selectedPlaces));
    formData.append("frontImage", frontImage);
    formData.append("otherImages", otherImages.join(","));

    const Fdata = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post("/api/admin/products", Fdata);
      console.log("formdata", Fdata)
      if (response.status === 200) {
        notify();
        router.push('/admin/product');

        console.log("Product added successfully");

      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error:", error);

    }
  };
  const handleImageChange = (e) => {
    const { name, files } = e.target;
    if (name === "frontImage") {
      setFrontImage(files[0].name);
    } else if (name === "otherImages") {
      const newImageNames = Array.from(files).map((file) => file.name);
      setOtherImages((prevImages) => [...prevImages, ...newImageNames]);
    }
  };


  return (
    <Row>
      <Col>

        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Add product
          </CardTitle>
          <CardBody>
            <Form className="row justify-content-center" onSubmit={handleAllinputs}>
              <FormGroup className="col-6">
                <Label for="productname">Product Name*</Label>
                <Input
                  id="productname"
                  name="productname"
                  placeholder="Enter Product Name*"
                  type="text"
                  required
                  className="form-control"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="category">Category*</Label>
                <Input
                  id="type"
                  name="category"
                  placeholder="Enter category SPC/LVT*"
                  type="text"
                  required
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="catalogue">Catalogue*</Label>
                <Input
                  id="catalogue"
                  name="catalogue"
                  placeholder="Enter catalogue Sicilian/Tuscany/LVT 1/LVT 2*"
                  type="text"
                  required
                />
              </FormGroup>
              {/* variation */}
              <FormGroup className="col-6">
                <Label for="productType">Product Type*</Label>
                <Input
                  id="catalogue"
                  name="variation"
                  placeholder="Enter Product Type wood/stone/marbel*"
                  type="text"
                  required
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="color">Color*</Label>
                <Input
                  id="color"
                  name="color"
                  placeholder="Enter Product color"
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="code">Code*</Label>
                <Input
                  required
                  id="code"
                  name="code"
                  placeholder="Enter Product Code"
                  type="text"
                />
              </FormGroup>

              <FormGroup className="col-6">
                <Label for="places">Select Places*</Label>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic" className="border">
                    Select Options
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {places.map((option, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => togglePlace(option)}
                        active={selectedPlaces.includes(option)}
                      >
                        {option}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <div>
                  <strong>Selected Places:</strong> {selectedPlaces.join(", ")}
                </div>
                {!selectedPlaces.length && (
                <FormText color="danger">
                  select atleast one place
                </FormText>
              )}
              </FormGroup>
             
              <FormGroup className="col-6">
                <Label for="thikness">Thikness</Label>
                <Input
                  id="thikness"
                  name="thikness"
                  placeholder="Enter Product thikness"
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="layer">layer</Label>
                <Input
                  id="layer"
                  name="layer"
                  placeholder="Enter Product layer"
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="prod_finish">prod_finish</Label>
                <Input
                  id="prod_finish"
                  name="prod_finish"
                  placeholder="Enter product finishing"
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="size">prod_size</Label>
                <Input
                  id="size"
                  name="size"
                  placeholder="Enter Product size"
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="spiece">prod_spiece</Label>
                <Input
                  id="spiece"
                  name="spiece"
                  placeholder="Enter Product spiece"
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="grove">no_of_grove</Label>
                <Input
                  id="grove"
                  name="grove"
                  placeholder="Enter Product's grove number"
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="m2pack">m2pack</Label>
                <Input
                  id="m2pack"
                  name="m2pack"
                  placeholder="Enter Product m2pack"
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="plank">plank</Label>
                <Input
                  id="plank"
                  name="plank"
                  placeholder="Enter Product plank"
                  type="text"
                />
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="Status">Status</Label>
                <Input
                  id="Status"
                  name="Status"
                  placeholder="Enter Product Status 1/0"
                  type="text"
                />
              </FormGroup>

              {/* <FormGroup className="col-6">
                  <Label for="exampleSelectMulti">Select Places</Label>
                  <Input id="exampleSelectMulti" multiple name="selectMulti" type="select">
                    <option>Bathroom</option>
                    <option>Bedroom</option>
                    <option>Childrensroom</option>
                    <option>Dining room</option>
                    <option>Hallway</option>
                    <option>Kitchen</option>
                    <option>Living room</option>
                    <option>Office</option>
                  </Input>
                </FormGroup> */}

              <FormGroup className="col-6">
                <Label for="frontImage">Front image*</Label>
                <Input required id="frontImage" name="frontImage" type="file" onChange={handleImageChange}
                />
                <FormText>
                  Upload front image here.
                </FormText>
              </FormGroup>
              <FormGroup className="col-6">
                <Label for="otherImages">Other images*</Label>
                <Input
                  multiple
                  required
                  id="otherImages"
                  name="otherImages"
                  type="file"
                  onChange={handleImageChange}
                />
                <FormText>
                  Upload interior or more images of product.
                </FormText>
                <div>

                  {otherImages.length > 0 && (
                    <div>
                      <strong>selected Images:</strong>{" "}
                      {otherImages.map((image, index) => (
                        <span key={index}>{index === 0 ? image : `, ${image}`}</span>
                      ))}
                    </div>
                  )}
                </div>
              </FormGroup>
              <center><Button className="col-2" type="submit">Submit</Button></center>

            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Addproducts;
