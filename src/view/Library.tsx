import React from 'react';
import welcomeImag from '../assets/images/Welcome_UI.jpg';
import {Col, Image, Row} from 'react-bootstrap';
const Library : React.FC = () =>{
    return(
        <Row className = 'welcome-section'>
            <Col xs = {12} className = 'text-center py-2'>
                <h1>My Library</h1>
            </Col>
            <Col xs = {12}>
                <Image src = {welcomeImag}/>
            </Col>
            <Col xs = {12} className = 'text-right pr-2 pt-4'>
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
    );
}

export default Library;