import React, { useState } from 'react';
import './AddStudent.css';
import axios from 'axios';

function AddStudent() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    class: '',
    gender: '',
    address: '',
  };

  const [formData, setFormData] = useState(initialFormData);
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
      const response = await axios.post('http://localhost:4000/api/addStudent', formData);
      console.log(response.data);
      setSuccessMessage('Student registration successful!');
      
      // Clear form fields after successful submission
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container" style={{ marginTop: '15px' }}>
      <h2>Add Student Registration</h2>
      
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
          <label>Class:</label>
          <input
            type="text"
            name="class"
            value={formData.class}
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
        <button type="submit">Register</button>
      </form>
      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}
    </div>
  );
}

export default AddStudent;
