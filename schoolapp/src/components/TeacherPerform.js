import React, { useState } from 'react';
import './TeacherPerform.css'; 
import axios from 'axios';

function TeacherPerform() {
  const initialFormData = {
    teacherId: '',
    subject: '',
    performance: '',
    feedback: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/teacher-performance', formData);
      console.log(response.data);
      setSubmitSuccess(true);
      setFormData(initialFormData); // Reset form fields
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container" style={{ marginTop: '45px' }}>
      <h2>Teacher Performance Details</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Teacher ID:</label>
          <input
            type="text"
            name="teacherId"
            value={formData.teacherId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Performance:</label>
          <input
            type="text"
            name="performance"
            value={formData.performance}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        {submitSuccess ? (
        <p className="success-message">Form submitted successfully!</p>
      ) : null}
      </form>
    </div>
  );
}

export default TeacherPerform;
