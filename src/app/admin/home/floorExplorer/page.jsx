"use client"
import React, { useState, useEffect } from 'react';
import { Container, Button, Input, Form, FormGroup, Label } from 'reactstrap';
import axios from 'axios';

const FloorExplorer = () => {
    const [explorerData, setExplorerData] = useState({
        heading: '',
        sub_heading: '',
        description: '',
        button: '',
        url: '',
        ply_image: '',
        tab_image: ''
    });

    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState({});
    const [plyImagePreview, setPlyImagePreview] = useState('');
    const [tabImagePreview, setTabImagePreview] = useState('');

    // Function to fetch initial data
    useEffect(() => {
        const fetchExplorerData = async () => {
            try {
                const response = await axios.get('/api/admin/floorExplorer');
                const data = response.data;
                setExplorerData(data);
                setEditedData(data); // Set initial edited data
                if (data.ply_image) {
                    setPlyImagePreview(data.ply_image);
                }
                if (data.tab_image) {
                    setTabImagePreview(data.tab_image);
                }
            } catch (error) {
                console.error('Error fetching explorer data:', error);
            }
        };

        fetchExplorerData();
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
            if (e.target.name === 'ply_image') {
                setEditedData((prevData) => ({ ...prevData, ply_image: file.name }));
                setPlyImagePreview(URL.createObjectURL(file));
            } else if (e.target.name === 'tab_image') {
                setEditedData((prevData) => ({ ...prevData, tab_image: file.name }));
                setTabImagePreview(URL.createObjectURL(file));
            }
        }
    };

    const handleSave = async () => {
        try {
            // console.log("edited data of floor ex,",editedData)
            const formData = new FormData();
            formData.append('heading', editedData.heading);
            formData.append('sub_heading', editedData.sub_heading);
            formData.append('description', editedData.description);
            formData.append('button', editedData.button);
            formData.append('url', editedData.url);
            formData.append('ply_image', editedData.ply_image);
            formData.append('tab_image', editedData.tab_image);


            // if (editedData.ply_image instanceof File) {
            //     formData.append('ply_image', editedData.ply_image);
            // }
            // if (editedData.tab_image instanceof File) {
            //     formData.append('tab_image', editedData.tab_image);
            // }

            const response = await axios.put('/api/admin/floorExplorer', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setExplorerData(editedData);
            setEditMode(false);
            console.log('Floor explorer data updated:', response.data);
        } catch (error) {
            console.error('Error updating floor explorer data:', error);
        }
    };

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="my-4">Floor Explorer</h3>
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
                        value={editMode ? editedData.heading : explorerData.heading}
                        onChange={handleChange}
                        readOnly={!editMode}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="sub_heading">Sub Heading</Label>
                    <Input
                        type="text"
                        name="sub_heading"
                        value={editMode ? editedData.sub_heading : explorerData.sub_heading}
                        onChange={handleChange}
                        readOnly={!editMode}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="textarea"
                        name="description"
                        value={editMode ? editedData.description : explorerData.description}
                        onChange={handleChange}
                        readOnly={!editMode}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="button">Button Text</Label>
                    <Input
                        type="text"
                        name="button"
                        value={editMode ? editedData.button : explorerData.button}
                        onChange={handleChange}
                        readOnly={!editMode}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="url">URL</Label>
                    <Input
                        type="text"
                        name="url"
                        value={editMode ? editedData.url : explorerData.url}
                        onChange={handleChange}
                        readOnly={!editMode}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="ply_image">Ply Image</Label>
                    <div>
                        {editMode ? (
                            <Input type="file" name="ply_image" onChange={handleFileChange} />
                        ) : (
                            <img
                                src={plyImagePreview}
                                alt="Ply Image Preview"
                                style={{ width: '100px', marginBottom: '10px' }}
                            />
                        )}
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="tab_image">Tab Image</Label>
                    <div>
                        {editMode ? (
                            <Input type="file" name="tab_image" onChange={handleFileChange} />
                        ) : (
                            <img
                                src={tabImagePreview}
                                alt="Tab Image Preview"
                                style={{ width: '100px', marginBottom: '10px' }}
                            />
                        )}
                    </div>
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

export default FloorExplorer;
