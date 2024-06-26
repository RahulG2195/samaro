"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Input, Button, Table } from 'reactstrap';

const NewslettersEditor = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [newNewsletter, setNewNewsletter] = useState({
    news_category: '',
    imgurl: '',
    title: '',
    author: '',
    video: null,
    status: 1
  });

  useEffect(() => {
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    try {
      const response = await axios.get('/api/admin/newsletter');
      setNewsletters(response.data);
    } catch (error) {
      console.error('Error fetching newsletters:', error);
    }
  };

  const handleToggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  const handleSave = async () => {
    try {
      // Save updated newsletters
      await Promise.all(newsletters.map(async (newsletter) => {
        await axios.put(`/api/admin/newsletter`, newsletter);
      }));

      // Save new newsletter if any
      if (newNewsletter.news_category && newNewsletter.title && newNewsletter.author && newNewsletter.video && newNewsletter.imgurl) {
        const formData = new FormData();
        formData.append('news_category', newNewsletter.news_category);
        formData.append('imgurl', newNewsletter.imgurl);
        formData.append('title', newNewsletter.title);
        formData.append('author', newNewsletter.author);
        formData.append('video', newNewsletter.video);
        formData.append('status', newNewsletter.status);

        await axios.post('/api/admin/newsletter', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        setNewNewsletter({
          news_category: '',
          imgurl: '',
          title: '',
          author: '',
          video: null,
          status: 1
        });

        fetchNewsletters(); // Refresh the list after save
      }
      
      setEditMode(false);
    } catch (error) {
      console.error('Error saving newsletters:', error);
    }
  };

  const handleInputChange = (field, value, index) => {
    if (index !== 'new') {
      // Update existing newsletter
      const updatedNewsletters = newsletters.map((newsletter, idx) => {
        if (idx === index) {
          return {
            ...newsletter,
            [field]: value,
          };
        }
        return newsletter;
      });
      setNewsletters(updatedNewsletters);
    } else {
      // Update new newsletter
      setNewNewsletter({
        ...newNewsletter,
        [field]: value,
      });
    }
  };

  const handleFileChange = (event, fileType, index) => {
    const file = event.target.files[0];

    if (index !== 'new') {
      // Update existing newsletter
      const updatedNewsletters = newsletters.map((newsletter, idx) => {
        if (idx === index) {
          return {
            ...newsletter,
            [fileType]: file,
            [`${fileType}`]: file.name, // Store file name in state
          };
        }
        return newsletter;
      });
      setNewsletters(updatedNewsletters);
    } else {
      // Update new newsletter
      setNewNewsletter({
        ...newNewsletter,
        [fileType]: file,
        [`${fileType}`]: file.name, // Store file name in state
      });
    }
  };

  const handleAddNewNewsletter = () => {
    // Add new newsletter to newsletters array
    if (newNewsletter.news_category && newNewsletter.title && newNewsletter.author && newNewsletter.video && newNewsletter.imgurl) {
      setNewsletters([...newsletters, { ...newNewsletter }]);
      setNewNewsletter({
        news_category: '',
        imgurl: '',
        title: '',
        author: '',
        video: null,
        status: 1
      });
    }
  };

  const handleRemove = async (news_id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`/api/admin/newsletter`, { data: { news_id } });
        setNewsletters(newsletters.filter(item => item.news_id !== news_id));
      } catch (error) {
        console.error('Error deleting newsletter:', error);
      }
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between mb-3">
        <h1>Newsletters Editor</h1>
        {!editMode && (
          <Button color="secondary" onClick={handleToggleEditMode}>
            Edit
          </Button>
        )}
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Video</th>
            {editMode && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {newsletters.map((newsletter, index) => (
            <tr key={newsletter.news_id}>
              <td>
                {editMode ? (
                  <Input
                    type="text"
                    value={newsletter.news_category}
                    onChange={(e) => handleInputChange('news_category', e.target.value, index)}
                  />
                ) : (
                  newsletter.news_category
                )}
              </td>
              <td>
                {editMode ? (
                  <Input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'imgurl', index)}
                  />
                ) : (
                  <img src={newsletter.imgurl} alt="Newsletter" style={{ maxWidth: '100px' }} />
                )}
              </td>
              <td>
                {editMode ? (
                  <Input
                    type="text"
                    value={newsletter.title}
                    onChange={(e) => handleInputChange('title', e.target.value, index)}
                  />
                ) : (
                  <span>{newsletter.title}</span>
                )}
              </td>
              <td>
                {editMode ? (
                  <Input
                    type="text"
                    value={newsletter.author}
                    onChange={(e) => handleInputChange('author', e.target.value, index)}
                  />
                ) : (
                  <span>{newsletter.author}</span>
                )}
              </td>
              <td>
                {editMode ? (
                  <Input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'video', index)}
                  />
                ) : (
                  <span>{newsletter.video}</span>
                )}
              </td>
              {editMode && (
                <td>
                  <Button color="danger" onClick={() => handleRemove(newsletter.news_id)}>Remove</Button>
                </td>
              )}
            </tr>
          ))}
          {editMode && (
            <tr key="new-newsletter">
              <td>
                <Input
                  type="text"
                  value={newNewsletter.news_category}
                  onChange={(e) => handleInputChange('news_category', e.target.value, 'new')}
                />
              </td>
              <td>
                <Input
                  type="file"
                  onChange={(e) => handleFileChange(e, 'imgurl', 'new')}
                />
              </td>
              <td>
                <Input
                  type="text"
                  value={newNewsletter.title}
                  onChange={(e) => handleInputChange('title', e.target.value, 'new')}
                />
              </td>
              <td>
                <Input
                  type="text"
                  value={newNewsletter.author}
                  onChange={(e) => handleInputChange('author', e.target.value, 'new')}
                />
              </td>
              <td>
                <Input
                  type="file"
                  onChange={(e) => handleFileChange(e, 'video', 'new')}
                />
              </td>
              <td>
                <Button color="primary" onClick={handleAddNewNewsletter}>Add</Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {editMode && (
        <div className="text-right mt-3">
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      )}
    </Container>
  );
};

export default NewslettersEditor;
