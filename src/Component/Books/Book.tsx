import React, {useState} from 'react';
import {Row,Col,Container} from "react-bootstrap";
import {Trash2, Edit, Plus} from 'react-feather';
import AddBook from './AddBook';
const Book : React.FC = () =>{
    // visiblity of AddAuthor form
    const [isVisibleBookForm ,  setIsVisibleBookForm] = useState<Boolean>(false);
    //set AddAuthorForm for visible
    const clickAddBookEvent = ()=>{
        setIsVisibleBookForm(true);
    }
    //set AddAuthor for invisible
    const clickCloseBookEvent = () =>{
        setIsVisibleBookForm(false);
    }
    return(
        <Container fluid ={true}>
            <Row className = "Books">
                <Col xs = {12}>
                    <h3 className= "title pt-2 pb-2">Books</h3>

                </Col>
                <Col xs = {12}>
                    <label className = 'empty-lable'>No books listed here</label>
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
                <Col xs = {12}>
                    <p className= 'add-book'>
                        <Plus className= "plus" onClick = {() => clickAddBookEvent()} ></Plus>
                        <span className='add-book-text px-2 py-2' onClick={() => clickAddBookEvent()}>
                                Add Book
                        </span>
                    </p>
                </Col>
                <Col xs = {12}>
                    {isVisibleBookForm && <AddBook closeForm = {clickCloseBookEvent}/> }
                </Col>

            </Row>
        </Container>

    );
}

export default Book;