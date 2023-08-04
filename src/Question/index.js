// import { Col, Row, Form, Button } from "react-bootstrap";
// import { useState, useEffect } from 'react';

// const Question = (props) => {
//   const [selectedOption, setSelectedOption] = useState(props.initialAnswer); // State to keep track of the selected radio button
//   const [comment, setComment] = useState(""); // State to keep track of the comment
//   const [warning, setWarning] = useState(""); // State to display a warning

//   useEffect(() => {
//     setSelectedOption(props.initialAnswer);
//   }, [props.initialAnswer]);

//   const handleRadioChange = (event) => {
//     const selected = event.target.value;
//     setSelectedOption(selected); // Update the state with the selected value
//   };

//   const handleCommentChange = (event) => {
//     setComment(event.target.value); // Update the state with the comment value
//   };

//   const handleAnswerSubmit = () => {
//     if (selectedOption === "no" && comment.trim() === "") {
//       setWarning("Please provide a comment for 'No' option.");
//       return;
//     } else {
//       setWarning(""); // Clear the warning if the comment is provided
//     }

//     props.onAnswerChange(props.point, props.id, selectedOption);
//   };

//   return (
//     <>
//       <Row className="mb-5">
//         <Row>
//             <Col lg={3}>
//                 <p>{props.srNo}.</p>
//             </Col>
//             <Col lg={6}>
//                 <p>{props.question}</p>
//             </Col>
//             <Col lg={3}>
//             <p>{props.auditionNote}</p>
//             </Col>
//         </Row>
//         <div key={`inline-radio`} className="my-3 d-flex justify-content-center">
//             <Form.Check
//                 inline
//                 label="Yes"
//                 name="group1"
//                 type="radio"
//                 value="yes"
//                 checked={selectedOption === 'yes'} // Set 'checked' based on the state
//                 onChange={handleRadioChange} // Handle radio button selection
//             />
//             <Form.Check
//                 inline
//                 label="No"
//                 name="group1"
//                 type="radio"
//                 value="no"
//                 checked={selectedOption === 'no'} // Set 'checked' based on the state
//                 onChange={handleRadioChange} // Handle radio button selection
//             />
//             <Form.Check
//                 inline
//                 label="Not Applicable"
//                 name="group1"
//                 type="radio"
//                 value="not applicable"
//                 checked={selectedOption === 'not applicable'} // Set 'checked' based on the state
//                 onChange={handleRadioChange} // Handle radio button selection
//             />
//         </div>
//         <Row>
//           <Row className="d-flex justify-content-center">
//             <Col lg={10}>
//               <Form.Group className="my-3" controlId={props.id}>
//                 <Form.Label>Comment</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   placeholder="Leave a comment here"
//                   style={{ height: '80px' }}
//                   value={comment}
//                   onChange={handleCommentChange}
//                 />
//               </Form.Group>
//               {warning && <p style={{ color: "red" }}>{warning}</p>}
//             </Col>
//           </Row>
//           <Row className="d-flex justify-content-center">
//             <Col lg={2}>
//               <Button variant="success" onClick={handleAnswerSubmit}>Submit</Button>
//             </Col>
//           </Row>
//         </Row>
//       </Row>
//     </>
//   );
// };

// export default Question;






// import { Col, Row, Form, Button } from "react-bootstrap";
// import { useState, useEffect } from 'react';
// import axios from "axios";
// import { AxiosInstance } from "../AxiosInstances";
// const Question = (props) => {
//   const [selectedOption, setSelectedOption] = useState(props.initialAnswer); // State to keep track of the selected radio button
//   const [comment, setComment] = useState(""); // State to keep track of the comment
//   const [warning, setWarning] = useState(""); // State to display a warning

//   useEffect(() => {
//     setSelectedOption(props.initialAnswer);
//   }, [props.initialAnswer]);

//   const handleRadioChange = (event) => {
//     const selected = event.target.value;
//     setSelectedOption(selected); // Update the state with the selected value
//   };

//   const handleCommentChange = (event) => {
//     setComment(event.target.value); // Update the state with the comment value
//   };

//   const handleAnswerSubmit = () => {
//     if (selectedOption === "no" && comment.trim() === "") {
//       setWarning("Please provide a comment for 'No' option.");
//       return;
//     } else {
//       setWarning(""); // Clear the warning if the comment is provided
//     }

//     props.onAnswerChange(props.level, props.id, selectedOption);
//     // let res= {
//     //   fr: props.fr,
//     //   levels:{
//     //     level: props.level,
//     //     questions: {
//     //       question: props.question,
//     //       response: selectedOption,
//     //       comment: comment
//     //     }
//     //   } 
//     // }
//     // AxiosInstance.post(res);
//   };

//   return (
//     <>
//       <Row className="mb-5">
//         <Row>
//             <Col lg={3}>
//                 <p>{props.srNo}.</p>
//             </Col>
//             <Col lg={6}>
//                 <p>{props.question}</p>
//             </Col>
//             <Col lg={3}>
//             <p>{props.auditionNote}</p>
//             </Col>
//         </Row>
//         <div key={`inline-radio`} className="my-3 d-flex justify-content-center">
//             <Form.Check
//                 inline
//                 label="Yes"
//                 name="group1"
//                 type="radio"
//                 value="yes"
//                 checked={selectedOption === 'yes'} // Set 'checked' based on the state
//                 onChange={handleRadioChange} // Handle radio button selection
//             />
//             <Form.Check
//                 inline
//                 label="No"
//                 name="group1"
//                 type="radio"
//                 value="no"
//                 checked={selectedOption === 'no'} // Set 'checked' based on the state
//                 onChange={handleRadioChange} // Handle radio button selection
//             />
//             <Form.Check
//                 inline
//                 label="Not Applicable"
//                 name="group1"
//                 type="radio"
//                 value="not applicable"
//                 checked={selectedOption === 'not applicable'} // Set 'checked' based on the state
//                 onChange={handleRadioChange} // Handle radio button selection
//             />
//         </div>
//         <Row>
//           <Row className="d-flex justify-content-center">
//             <Col lg={10}>
//               <Form.Group className="my-3" controlId={props.id}>
//                 <Form.Label>Comment</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   placeholder="Leave a comment here"
//                   style={{ height: '80px' }}
//                   value={comment}
//                   onChange={handleCommentChange}
//                 />
//               </Form.Group>
//               {warning && <p style={{ color: "red" }}>{warning}</p>}
//             </Col>
//           </Row>
//           <Row className="d-flex justify-content-center">
//             <Col lg={2}>
//               <Button variant="success" onClick={handleAnswerSubmit}>Submit</Button>
//             </Col>
//           </Row>
//         </Row>
//       </Row>
//     </>
//   );
// };

// export default Question;






import { Col, Row, Form, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from "axios";
import { AxiosInstance } from "../AxiosInstances";

const Question = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.initialAnswer); // State to keep track of the selected radio button
  const [comment, setComment] = useState(props.initialComment); // State to keep track of the comment
  const [warning, setWarning] = useState(""); // State to display a warning

  useEffect(() => {
    setSelectedOption(props.initialAnswer);
  }, [props.initialAnswer]);

  const handleRadioChange = (event) => {
    const selected = event.target.value;
    setSelectedOption(selected); // Update the state with the selected value
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value); // Update the state with the comment value
  };

  const handleAnswerSubmit = () => {
    if (selectedOption === "no" && comment.trim() === "") {
      setWarning("Please provide a comment for 'No' option.");
      return;
    } else {
      setWarning(""); // Clear the warning if the comment is provided
    }
    
    props.onAnswerChange(props.level, props.srNo, selectedOption);
    let res={
      levels: [{
        level: props.level,
        questions:[{
           srNo: props.srNo,
           sr: props.sr,
           desc: props.desc,
           question: props.question,
           hint: props.hint,
           response: selectedOption,
           comment: comment,
        },]
      },]
    }
    AxiosInstance.post(res);
  };

  return (
    <>
      <Row className="mb-5">
        <Row>
            <Col lg={3}>
                <p>{props.srNo}.</p>
            </Col>
            <Col lg={3}>
                <p>{props.sr}.</p>
            </Col>
            <Col lg={3}>
                <p>{props.desc}.</p>
            </Col>
            <Col lg={6}>
                <p>{props.question}</p>
            </Col>
            <Col lg={3}>
            <p>{props.hint}</p>
            </Col>
        </Row>
        <div key={`inline-radio`} className="my-3 d-flex justify-content-center">
            <Form.Check
                inline
                label="Yes"
                name="group1"
                type="radio"
                value="yes"
                checked={selectedOption === 'yes'} // Set 'checked' based on the state
                onChange={handleRadioChange} // Handle radio button selection
            />
            <Form.Check
                inline
                label="No"
                name="group1"
                type="radio"
                value="no"
                checked={selectedOption === 'no'} // Set 'checked' based on the state
                onChange={handleRadioChange} // Handle radio button selection
            />
            <Form.Check
                inline
                label="Not Applicable"
                name="group1"
                type="radio"
                value="not applicable"
                checked={selectedOption === 'not applicable'} // Set 'checked' based on the state
                onChange={handleRadioChange} // Handle radio button selection
            />
        </div>
        <Row>
          <Row className="d-flex justify-content-center">
            <Col lg={10}>
              <Form.Group className="my-3" controlId={props.id}>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '80px' }}
                  value={comment}
                  onChange={handleCommentChange}
                />
              </Form.Group>
              {warning && <p style={{ color: "red" }}>{warning}</p>}
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col lg={2}>
              <Button variant="success" onClick={handleAnswerSubmit}>Submit</Button>
            </Col>
          </Row>
        </Row>
      </Row>
    </>
  );
};

export default Question;
