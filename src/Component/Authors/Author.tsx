import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";

const Author : React.FC = () =>{
    return(
        <Container fluid>
            <Row className = "Authors">
                <Col xs = {12}>
                    <h3 className= "title pt-2 pb-2">Authors</h3>

                </Col>
                <Col xs = {12}>
                    <ul className= 'author-list px-0'>
                        <li>
                            <Row className= 'pb-2 pt-2'>
                                <Col xs = {10} >1.Author Name</Col>
                                <Col xs = {1}><Edit className = 'edit-btn'/></Col>
                                <Col xs = {1}><Trash2 className = 'delete-btn'/></Col>
                            </Row>
                        </li>
                        <li>
                            <Row className= 'pb-2 pt-2'>
                                <Col xs = {10} >2.Author Name</Col>
                                <Col xs = {1}><Edit className = 'edit-btn'/></Col>
                                <Col xs = {1}><Trash2 className = 'delete-btn'/></Col>
                            </Row>
                        </li>
                        <li>
                            <Row className= 'pb-2 pt-2'>
                                <Col xs = {10} >3.Author Name</Col>
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

export default Author;