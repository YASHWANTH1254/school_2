import React, { useState } from 'react';
import './AddTeacher.css';
import axios from 'axios';

function AddTeacher() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    gender: '',
    address: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

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
      const response = await axios.post('http://localhost:4000/api/addTeacher', formData);
      console.log(response.data);
      setSuccessMessage('Teacher details added successfully!');
      
      setFormData({
        firstName: '',
        lastName: '',
        subject: '',
        gender: '',
        address: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container" style={{ marginTop: '30px' }}>
      <h2>Add Teacher Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
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
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Add Teacher</button>
      </form>
      {successMessage && (
        <p className="success-message">Teacher details added successfully!</p>
      )}
    </div>
  );
}

export default AddTeacher;
