import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Edit, Plus, Trash2} from "react-feather";
import AddAuthor from './AddAuthor';

const Author : React.FC = () =>{
    // visiblity of AddAuthor form
    const [isVisibleAuthorForm ,  setIsVisibleAuthorForm] = useState<Boolean>(false);
    //set AddAuthorForm for visible
    const clickAddAuthorEvent = ()=>{
        setIsVisibleAuthorForm(true);
    }
    //set AddAuthor for invisible
    const clickCloseAuthorEvent = () =>{
        setIsVisibleAuthorForm(false);
    }
    return(
        <Container fluid ={true}>
            <Row className = "Authors">
                <Col xs = {12}>
                    <h3 className= "title pt-2 pb-2">Authors</h3>

                </Col>
                <Col xs = {12}>
                    <label className = 'empty-lable'>No authors listed here</label>
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
                <Col xs = {12}>
                    <p className= 'add-book'>
                        <Plus className= "plus" onClick = {() => clickAddAuthorEvent()} ></Plus>
                        <span className='add-book-text px-2 py-2' onClick={() => clickAddAuthorEvent()}>
                                Add Book
                        </span>
                    </p>
                </Col>
                <Col xs = {12}>
                    {isVisibleAuthorForm && <AddAuthor closeForm={clickCloseAuthorEvent}/>}
                </Col>

            </Row>
        </Container>
    );
}

export default Author;