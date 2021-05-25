import React from 'react';
import welcomeImag from '../assets/images/Welcome_UI.jpg';
import {Col, Container, Row} from 'react-bootstrap';
import Author from '../Component/Authors/Author';
import Book from '../Component/Books/Book';
const Library : React.FC = () =>{
    return(
        <Container fluid ={true} className = 'px-0' >
            <Row className = "welcome-section px-0">
                <Row>
                    <Col xs = {12} className = 'px-0'>
                        <h1 className= 'text-center py-2'>My Library</h1>
                    </Col>
                    <Col xs = {12} className = 'px-0' >
                        <img src = {welcomeImag}/>
                    </Col>

                </Row>
                <Row className= "Credit">
                    <Col xs = {9}/>
                    <Col xs = {3} className = 'text-end pt-2 pr-5'>
                        Photo by
                        <a href="https://unsplash.com/@annahunko?
                       utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                            Anna Hunko
                        </a>
                        on
                        <a href="https://unsplash.com/?
                       utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                            Unsplash
                        </a>

                    </Col>
                </Row>
                <Row>
                    <Col xs = {6}>
                        <Book/>
                    </Col>
                    <Col xs = {6}>
                        <Author/>
                    </Col>
                </Row>
            </Row>

        </Container>

    );
}

export default Library;