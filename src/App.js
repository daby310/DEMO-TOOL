import React, { useState, useEffect } from "react";
import "./App.css";
import Graph from "./Graph"; // Make sure to adjust the path if needed
import Form1 from "./Forms/Form 1/index.js"
import Form2 from "./Forms/Form 2/index.js"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Tab, Row, Col, Nav } from "react-bootstrap"
const DemoTool = () => {
  // const [answers, setAnswers] = useState({
  //   point1: {
  //     question1: null,
  //     question2: null,
  //     question3: null,
  //     question4: null,
  //     question5: null,
  //   },
  //   point2: {
  //     question1: null,
  //     question2: null,
  //     question3: null,
  //     question4: null,
  //     question5: null,
  //   },
    // Add other points and questions here
  // });

  // const handleAnswerChange = (point, question, answer) => {
  //   setAnswers((prevAnswers) => ({
  //     ...prevAnswers,
  //     [point]: {
  //       ...prevAnswers[point],
  //       [question]: answer,
  //     },
  //   }));
  // };

  // const graphData = {
  //   point1: {
  //     Yes: 0,
  //     No: 0,
  //     "Not Applicable": 0,
  //   },
  //   point2: {
  //     Yes: 0,
  //     No: 0,
  //     "Not Applicable": 0,
  //   },
  //   // Initialize graph data for other points
  // };

  // useEffect(() => {
  //   const calculateGraphData = () => {
  //     Object.keys(graphData).forEach((point) => {
  //       // Reset counts for each answer option
  //       Object.keys(graphData[point]).forEach((option) => {
  //         graphData[point][option] = 0;
  //       });

  //       // Loop through each question and update the counts
  //       Object.keys(answers[point]).forEach((question) => {
  //         if (answers[point][question] !== null) {
  //           graphData[point][answers[point][question]] += 1;
  //         }
  //       });
  //     });
  //   };

  //   calculateGraphData();
  // }, [answers]);

  return (
    <>
      <Container className="app">
        <h1 className="mb-2">Demo Tool</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="fr1">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="fr1">FR1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fr2">FR2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="f3">FR3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fr4">FR4</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fr5">FR5</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fr6">FR6</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fr7">FR7</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="fr1"><Form1/></Tab.Pane>
                <Tab.Pane eventKey="fr2"><Form2/></Tab.Pane>
                <Tab.Pane eventKey="fr3">Second tab content</Tab.Pane>
                <Tab.Pane eventKey="fr4">Second tab content</Tab.Pane>
                <Tab.Pane eventKey="fr5">Second tab content</Tab.Pane>
                <Tab.Pane eventKey="fr6">Second tab content</Tab.Pane>
                <Tab.Pane eventKey="fr7">Second tab content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {/* Point 1 */}
        {/* Point 2 */}
        {/* <Point title="Point2"/> */}
      </Container>
    </>
  )
    // <div >
    //   
    //   <div className="points-container">

    //     {/* Add more points here */}
    //     {/* ... */}
    //   </div>

      {/* Display the graph only if any one of the answers in Point 1 is "Yes" */}
      {/* {Object.values(answers.point1).includes("Yes") && (
        <div className="graph-container">
          <h3>Percentage Graph for Point 1</h3>
          <Graph data={graphData.point1} />
        </div>
      )} */}

      {/* Display the graph only if any one of the answers in Point 2 is "Yes" */}
      {/* {Object.values(answers.point2).includes("Yes") && (
        <div className="graph-container">
          <h3>Percentage Graph for Point 2</h3>
          <Graph data={graphData.point2} />
        </div>
      )} */}

      {/* Display more graphs for other points here */}
      {/* ... */}
    // </div>
    // <form onSubmit={submitHandler}>
    //   <h1></h1>
    //   <button>Submit</button>
    // </form>
};

export default DemoTool;