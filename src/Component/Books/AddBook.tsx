import React from 'react';
import {Row, Col, Container, Form, Button} from "react-bootstrap";
import {XCircle} from "react-feather";

type AddBookFormProps = {
    closeForm: () => void
};

const AddBook : React.FC<AddBookFormProps> = (props) =>{
    return(
        <Container fluid>
            <Row className = 'add-book-section'>
                <Col xs = {12}>
                    <Row>
                        <Col xs = {11} className = 'click-add-book'>
                            <p className = 'add-book'>Create Book</p>
                        </Col>
                        <Col className  = 'close-btn' xs = {1} >
                            <XCircle className= 'close-icon' onClick={()=>{props.closeForm()}}/>
                        </Col>
                    </Row>
                </Col>
                <Col xs = {12}>
                    <Form className = 'add-book-form'>
                        <Form.Group className = 'add-book-title'>
                            <Form.Label className = 'add-book-lable pt-4 pb-2'>Title of the book</Form.Label>
                            <Form.Control className = 'add-book-title-text ' type = 'text'  size = 'sm'></Form.Control>
                        </Form.Group>
                        <Form.Group className = 'add-book-isbn'>
                            <Form.Label className = 'add-book-lable pt-4 pb-2'>ISBN</Form.Label>
                            <Form.Control className = 'add-book-isbn-text' type = 'text'  size = 'sm'></Form.Control>
                        </Form.Group>
                        <Form.Group className = 'add-book-author'>
                            <Form.Label className = 'add-book-lable pt-4 pb-2'>Author</Form.Label>
                            <Form.Control as="select" size="sm">
                                <option>1.Author</option>
                                <option>2.Author</option>
                                <option>3.Author</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className = 'add-book-create-btn pt-4 pb-2'>
                            <Button className = 'create-btn' variant = 'primary' type = 'submit' size = 'sm' >
                                Create
                            </Button>

                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddBook;