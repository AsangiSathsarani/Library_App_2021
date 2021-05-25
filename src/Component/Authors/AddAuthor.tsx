import React ,{FC} from 'react';
import {Row ,Col ,Container,Form,Button} from "react-bootstrap";
import {XCircle} from "react-feather";

type AddAuthorFormProps = {
    closeForm: () => void
};


const AddAuthor : React.FC<AddAuthorFormProps> = (props) =>{
    return(
        <Container  fluid>
            <Row className = 'add-author-section'>
                <Col xs = {12}>
                    <Row>
                        <Col xs = {11} className = 'click-add-author' >
                            <p className= 'add-author'>Create Author</p>
                        </Col>
                        <Col className = 'close-btn ' xs = {1}>
                            <XCircle className= 'close-icon' onClick={() =>props.closeForm()}/>
                        </Col>
                    </Row>
                </Col>

                <Col xs = {12}>
                    <Form className = 'add-author-form'>
                        <Form.Group>
                            <Form.Label className = 'author-name-lable pt-4 pb-2' >
                                Name of Author
                            </Form.Label>
                            <Form.Control className = 'author-name-input ' type = 'text' size = 'sm'/>
                        </Form.Group>
                        <Form.Group className = 'add-author-create-btn pt-4 pb-2'>
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

export default AddAuthor;