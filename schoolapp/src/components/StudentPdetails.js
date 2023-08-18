import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentPdetails() {
const [performanceData, setPerformanceData] = useState([]);

useEffect(() => {
fetchStudentPdetails();
 }, []);

const fetchStudentPdetails = async () => {
try {
const response = await axios.get('http://localhost:4000/student-performance');
setPerformanceData(response.data);
} catch (error) {
 console.error(error);
 }
};

return (
<div>
<h2>Student Performance Details</h2>
<table className="table table-striped">
<thead>
<tr>
<th>ID</th>
<th>Student Name</th>
<th>Subject</th>
<th>Marks</th>
<th>Grade</th>
</tr>
</thead>
<tbody>
{performanceData.map((item) => (
<tr key={item.id}>
<td>{item.id}</td>
<td>{item.studentName}</td>
<td>{item.subject}</td>
<td>{item.marks}</td>
<td>{item.grade}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}

export default StudentPdetails;