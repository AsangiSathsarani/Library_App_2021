import React  from 'react';
import './App.scss';
import Library from './view/Library';
import {Col, Container, Row} from 'react-bootstrap';
const App :React.FC = () =>{
  return(
      <Container className = 'px-0' fluid>
        <Row>
          <Col>
            <Library/>
          </Col>
        </Row>
      </Container>

  );
}

export default App;
