import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import logo from './bethemestore-product-pic6.webp'
import {FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import './FProducts.css'

function Fproducts() {
    return (

      <Container className="p-3"  >
          
        <Row>
        <Col>
        <div className=" p-5 display-4 text-center ">Featured Products </div>
        </Col>
        </Row>

        <Row className="mb-4 mb-md-4">
        <Col>
       <Card className="border-0" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>


      <Col>
       <Card className="border-0" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-product-pic10.webp" />
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>

      <Col>
       <Card className="border-0" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-product-pic1.webp" alt="BigCo Inc. logo"  />
      
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>

      <Col>
       <Card className="border-0" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-product-pic15-1.webp" />
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>

      
        </Row>

        <Row className="d-flex flex-row-reverse mb-4 mb-md-4">
        <Col>
       <Card className="border-0" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>


      <Col>
       <Card className="border-0" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-product-pic10.webp" />
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>

      <Col>
       <Card className="border-0" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-product-pic1.webp" alt="BigCo Inc. logo"  />
      
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>

      <Col>
       <Card className="thumbnail border-0" style={{ width: '18rem' }}>
      <div className="picture1">
      <Card.Img variant="top" src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-product-pic15-1.webp" />
      </div>
      <div className="picture2">
      <Card.Img  variant="top" src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-product-pic1.webp" />
      </div>
      
      <Card.Body className="fs-4 text-center">
        <Card.Title>BeSmartphone3</Card.Title>
        <Card.Text>
        <FaStar/> <FaStar/> <FaStar/> <FaStar/>
         <p> $250.00 </p>
        </Card.Text>
      </Card.Body>
       </Card>
      </Col>
        </Row>

        <Row>
       <Col className="text-center"> 
        <Button variant="outline-primary">Browse More</Button>
        </Col>
        </Row>

        
    </Container>
);
}

export default Fproducts;