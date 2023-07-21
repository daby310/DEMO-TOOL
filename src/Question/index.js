import { Col, Row, Container, Form, Button } from "react-bootstrap"

export default function Question({srNo, question, auditionNote, id}) {
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
                    />
                    <Form.Check
                        inline
                        label="No"
                        name="group1"
                        type="radio"
                    />
                    <Form.Check
                        inline
                        label="Not Applicable"
                        name="group1"
                        type="radio"
                    />
                </div>
                <Row>
                    <Row className="d-flex justify-content-center">
                        <Col lg={10}>
                            <Form.Group className="my-3" controlId={id}>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '80px' }}/>
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