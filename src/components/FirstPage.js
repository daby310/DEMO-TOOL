// import React, { useState } from "react";
// import { Route } from 'react-router-dom';

// import { Container, Form, Button, Table } from "react-bootstrap";

// const FirstPage = () => {
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");
//   const [unit, setUnit] = useState("");
//   const [tableData, setTableData] = useState(createInitialTableData());

//   // Function to create initial blank table data
//   function createInitialTableData() {
//     const data = [];
//     for (let i = 0; i < 11; i++) {
//       data.push({ A: "", B: "", C: "", D: "", E: "" });
//     }
//     return data;
//   }

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform any action with the form data here
//     console.log("Name:", name);
//     console.log("Date:", date);
//     console.log("Unit:", unit);
//     console.log("Table Data:", tableData);
//     // Redirect to another page (e.g., App.js) after form submission
//     // Replace '/destination' with the actual route you want to redirect to
//     window.location.href = "/destination";
//   };

//   return (
//     <Container>
//       <h1>First Page</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="name">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="date">
//           <Form.Label>Date</Form.Label>
//           <Form.Control
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="unit">
//           <Form.Label>Unit</Form.Label>
//           <Form.Control
//             type="text"
//             value={unit}
//             onChange={(e) => setUnit(e.target.value)}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//       <Table responsive striped bordered>
//         <thead>
//           <tr>
//             <th>A</th>
//             <th>B</th>
//             <th>C</th>
//             <th>D</th>
//             <th>E</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {Object.values(row).map((cellValue, colIndex) => (
//                 <td key={colIndex}>
//                   <Form.Control
//                     type="text"
//                     value={cellValue}
//                     onChange={(e) => {
//                       const newData = [...tableData];
//                       newData[rowIndex][Object.keys(row)[colIndex]] =
//                         e.target.value;
//                       setTableData(newData);
//                     }}
//                   />
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default FirstPage;
