import { Col, Row, Container, Form, Button } from "react-bootstrap"
import {useState} from 'react'
export default function Question({srNo, question, auditionNote, id, initialAnswer,org}) {
  const [selectedOption, setSelectedOption] = useState(initialAnswer); // State to keep track of the selected radio button

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value); // Update the state with the selected value
  };

    return (
        <>
            <Row className="mb-5">
                <Row>
                    <Col lg={3}>
                        <p>{srNo}.</p>
                    </Col>
                    <Col lg={6}>
                        <p>{question}</p>
                    </Col>
                    <Col lg={3}>
                    <p>{auditionNote}</p>
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
                            <Form.Group className="my-3" controlId={id}>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '80px' }}/>
                                <p>{org}</p>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col lg={2}>
                        <Button variant="success">Submit</Button>
                        </Col>
                    </Row>
                </Row>
            </Row>
        </>
    )
}