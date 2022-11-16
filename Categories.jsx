import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {FaLaptop } from 'react-icons/fa';
import {FaMobileAlt } from 'react-icons/fa';
import {CgAppleWatch } from 'react-icons/cg';
import {FiMonitor } from 'react-icons/fi';
import {IoGameControllerOutline } from 'react-icons/io5';
import {BiDotsHorizontal} from 'react-icons/bi';
import './Categories.css';



function Categories() {
  return (
    <Container className="p-3"  >
        
      <Row>
      <Col>
      <div className=" p-5 display-4 text-center ">Browse <span class="text-primary"> 60000+ </span> Products
      </div>
      </Col>
      </Row>


<Row>
    
      <Col className=" mb-4 mb-md-0">
      <Card className="text-center" style={{backgroundColor: "#F8F9F9 "}}>
        <Card.Body >
       < FaLaptop size={60}/>
          <Card.Text className="mt-5 fw-bold">
            NoteBooks
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>


      <Col className=" mb-4 mb-md-0">
      <Card className="text-center " style={{backgroundColor: "#F8F9F9 "}}>
      <Card.Body >
       < FaMobileAlt size={60}/>
          <Card.Text className="mt-5 fw-bold">
          SmartPhones
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      
      <Col className=" mb-4 mb-md-0">
      <Card className="text-center" style={{backgroundColor: "#F8F9F9 "}}>
      <Card.Body >
       < CgAppleWatch size={60}/>
          <Card.Text className="mt-5 fw-bold">
            SmartWatches
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col className=" mb-4 mb-md-0">
      <Card className="text-center" style={{backgroundColor: "#F8F9F9 "}}>
      <Card.Body >
       < FiMonitor size={60}/>
          <Card.Text className="mt-5 fw-bold">
           TV/Audio
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    
    
      <Col className=" mb-4 mb-md-0">
      <Card className="text-center" style={{backgroundColor: "#F8F9F9 "}}>
      <Card.Body >
       < IoGameControllerOutline size={60}/>
          <Card.Text className="mt-5 fw-bold">
           Gaming
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col className=" mb-4 mb-md-0">
      <Card className="text-center" style={{backgroundColor: "#F8F9F9 "}}>
      <Card.Body >
       < BiDotsHorizontal size={60}/>
          <Card.Text className="mt-5 fw-bold">
            View All
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

    </Row>
    </Container>
  );
}

export default Categories;