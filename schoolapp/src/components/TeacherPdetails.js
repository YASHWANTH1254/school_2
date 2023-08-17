// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function TeacherPdetails() {
//   const [performanceData, setPerformanceData] = useState([]);

//   useEffect(() => {
//     // Fetch teacher details from the server when the component mounts
//     fetchTeacherPdetails();
//   }, []);

//   const fetchTeacherPdetails = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/teacher-performance');
//       setPerformanceData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Teacher Performance Details</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Teacher Name</th>
//             <th>Subject</th>
//             <th>Performance</th>
//             <th>Feedback</th>
//           </tr>
//         </thead>
//         <tbody>
//           {performanceData.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.teacherName}</td>
//               <td>{item.subject}</td>
//               <td>{item.performance}</td>
//               <td>{item.feedback}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TeacherPdetails;
