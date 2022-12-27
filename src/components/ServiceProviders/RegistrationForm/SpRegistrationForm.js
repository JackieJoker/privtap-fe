import React from "react";
import "./SpRegistrationForm.css";
import {Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";

function SpRegistrationForm() {
    return (
        <div className="selected-text">
            <Container className="p-5">
                <Row className="justify-content-md-center">
                    <Col lg="6">
                        <Form>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Form.Label>Platform name</Form.Label>
                                        <FormControl placeholder="Give a name to your platform" />
                                    </Col>
                                    <Col sm="auto">
                                        <Form.Label>Color</Form.Label>
                                        <Form.Control
                                            type="color"
                                            id="colorInput"
                                            defaultValue="#0C0C54"
                                            title="Add the main color of your platform"
                                        />
                                    </Col>
                                    <Form.Text className="mb-3">The color will be used in all the pages of your Platform</Form.Text>
                                </Row>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Label>OAuth endpoint</Form.Label>
                                <FormControl placeholder="Add the URL of the OAuth endpoint" />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Label>OAuth token endpoint</Form.Label>
                                <FormControl placeholder="Add the URL of the OAuth token endopint" />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Label>Client ID</Form.Label>
                                <FormControl placeholder="Add your Client ID" />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Form.Label>Client secret</Form.Label>
                                <FormControl placeholder="Add your Client secret" />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SpRegistrationForm;