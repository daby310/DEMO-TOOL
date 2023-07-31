// import React from "react";
// import { Route } from 'react-router-dom';

// import Form1 from "./Forms/Form1"; // Import the form components for each FR
// import Form2 from "./Forms/Form2";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { Container, Tab, Row, Col, Nav } from "react-bootstrap"

// // const SecondPage = () => {
//     // const [showSecondPage, setShowSecondPage] = useState(false);
  
//     const SecondPage = () => {
//         return (
//             <>
//               <Container className="app">
//                 <h1 className="mb-2">Demo Tool</h1>
//                 <Tab.Container id="left-tabs-example" defaultActiveKey="fr1">
//                   <Row>
//                     <Col sm={2}>
//                       <Nav variant="pills" className="flex-column">
//                         <Nav.Item>
//                           <Nav.Link eventKey="fr1">FR1</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                           <Nav.Link eventKey="fr2">FR2</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                           <Nav.Link eventKey="f3">FR3</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                           <Nav.Link eventKey="fr4">FR4</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                           <Nav.Link eventKey="fr5">FR5</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                           <Nav.Link eventKey="fr6">FR6</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                           <Nav.Link eventKey="fr7">FR7</Nav.Link>
//                         </Nav.Item>
//                       </Nav>
//                     </Col>
//                     <Col sm={9}>
//                       <Tab.Content>
//                         <Tab.Pane eventKey="fr1"><Form1/></Tab.Pane>
//                         <Tab.Pane eventKey="fr2"><Form2/></Tab.Pane>
//                         <Tab.Pane eventKey="fr3">Second tab content</Tab.Pane>
//                         <Tab.Pane eventKey="fr4">Second tab content</Tab.Pane>
//                         <Tab.Pane eventKey="fr5">Second tab content</Tab.Pane>
//                         <Tab.Pane eventKey="fr6">Second tab content</Tab.Pane>
//                         <Tab.Pane eventKey="fr7">Second tab content</Tab.Pane>
//                       </Tab.Content>
//                     </Col>
//                   </Row>
//                 </Tab.Container>
//                 {/* Point 1 */}
//                 {/* Point 2 */}
//                 {/* <Point title="Point2"/> */}
//               </Container>
//             </>
//           );
//             // <div >
//             //   
//             //   <div className="points-container">
        
//             //     {/* Add more points here */}
//             //     {/* ... */}
//             //   </div>
        
            
//         };
//     // };

//     export default SecondPage;