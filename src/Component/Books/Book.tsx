import React from 'react';
import {Row,Col,Container} from "react-bootstrap";
import { Trash2, Edit } from 'react-feather';
const Book : React.FC = () =>{
    return(
        <Container fluid>
            <Row className = "Books">
                <Col xs = {12}>
                    <h3 className= "title pt-2 pb-2">Books</h3>

                </Col>
                <Col xs = {12}>
                    <ul className= 'book-list px-0'>
                        <li>
                            <Row className= 'pb-2 pt-2'>
                                <Col xs = {10} >1.Books Name</Col>
                                <Col xs = {1}><Edit className = 'edit-btn'/></Col>
                                <Col xs = {1}><Trash2 className = 'delete-btn'/></Col>
                            </Row>
                        </li>
                        <li>
                            <Row className= 'pb-2 pt-2'>
                                <Col xs = {10} >2.Books Name</Col>
                                <Col xs = {1}><Edit className = 'edit-btn'/></Col>
                                <Col xs = {1}><Trash2 className = 'delete-btn'/></Col>
                            </Row>
                        </li>
                        <li>
                            <Row className= 'pb-2 pt-2'>
                                <Col xs = {10} >3.Books Name</Col>
                                <Col xs = {1}><Edit className = 'edit-btn'/></Col>
                                <Col xs = {1}><Trash2 className = 'delete-btn'/></Col>
                            </Row>
                        </li>

                    </ul>
                </Col>
            </Row>
        </Container>

    );
}

export default Book;