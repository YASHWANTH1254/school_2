import React, { useState } from 'react';
import axios from 'axios';
import './StudentPerform.css'; 

function StudentPerform() {
  const [formData, setFormData] = useState({
    studentId: '',
    subject: '',
    marks: '',
    grade: '',
  });

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
    } catch (error) {
      console.error(error);
    }

    console.log(formData);
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
    </div>
  );
}

export default StudentPerform;
