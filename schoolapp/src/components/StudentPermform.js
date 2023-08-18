import React, { useState } from 'react';
import axios from 'axios';
import './StudentPerform.css'; 

function StudentPerform() {
  const initialFormData = {
    studentId: '',
    subject: '',
    marks: '',
    grade: '',
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
      const response = await axios.post('http://localhost:4000/student-performance', formData);
      console.log(response.data);
      setSubmitSuccess(true);
      setFormData(initialFormData); // Reset form fields
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container" style={{marginTop: '45px'}}>
      <h2>Student Performance Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student ID:</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
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
          <label>Marks:</label>
          <input
            type="number"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Grade:</label>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitSuccess ? (
        <p className="success-message">Form submitted successfully!</p>
      ) : null}
    </div>
  );
}

export default StudentPerform;
