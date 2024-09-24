import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const HackathonForm = ({ hackathons, setHackathons }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    level: 'Easy',
    image: null, 
  });

 
  useEffect(() => {
    if (isEdit) {
      const hackathonToEdit = hackathons.find((h) => h.id === parseInt(id));
      if (hackathonToEdit) {
        setFormData({
          name: hackathonToEdit.name,
          startDate: hackathonToEdit.startDate,
          endDate: hackathonToEdit.endDate,
          description: hackathonToEdit.description,
          level: hackathonToEdit.level,
          image: hackathonToEdit.image,
        });
      }
    }
  }, [isEdit, id, hackathons]);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      setHackathons((prevHackathons) =>
        prevHackathons.map((h) =>
          h.id === parseInt(id) ? { ...h, ...formData } : h
        )
      );
    } else {
      const newHackathon = {
        id: hackathons.length + 1,
        ...formData,
      };
      setHackathons([...hackathons, newHackathon]);
    }

   
    navigate(`/hackathon-overview/${isEdit ? id : hackathons.length + 1}`);
  };

  return (
    <Container className="mt-4">
      <h1>{isEdit ? 'Edit Hackathon' : 'Create Hackathon'}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Hackathon Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Hackathon Name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Hackathon Description"
            required
          />
        </Form.Group>
        
     
        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required={!isEdit && !formData.image}  
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Level</Form.Label>
          <Form.Select
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </Form.Select>
        </Form.Group>
        <Button
          type="submit"
          className="mt-3"
          disabled={
            !formData.name || !formData.startDate || !formData.endDate || !formData.description || !formData.image // Disable if any field is empty
          }
          variant={formData.name && formData.startDate && formData.endDate && formData.description && formData.image ? "success" : "secondary"}
        >
          {isEdit ? 'Save Changes' : 'Create Hackathon'}
        </Button>
      </Form>
    </Container>
  );
};

export default HackathonForm;
