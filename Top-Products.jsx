import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './Wraper1.webp'
import Button from 'react-bootstrap/Button';

function Tproducts() {
    return (
      <Container   >
          
        <Row>
        <Col>
        <div className=" p-5 display-4 text-center fw-bold">Our Top Products</div>
        </Col>
        </Row>


        <Row className=" mb-4 mb-md-4">
        <Col className=" mb-4 mb-md-0">
          <img src={logo} alt="BigCo Inc. logo" width={620} height={460} />
        </Col>

        <Col>
        <img src={require('./Wraper2.webp')} alt="BigCo Inc. logo" width={620} height={460} />
        </Col>

        </Row>

     <Container> 
        <Row>
        <Col sm={8} >
      <img src={require('./Wraper3.webp')} alt="BigCo Inc. logo"  />
        </Col>

        <Col sm={4}>

          <div className=" text-center h-100" Style="background-color:#08080e; padding:50px 5% 0px 55px; border-radius: 10px;">
            <h3 className="text-light" > Ending Soon</h3>
            <p class="text-light"> Remaining time for special products. Hurry Up!</p>

            <Button variant="light">Browse products</Button>
          </div>
        
        </Col>
        </Row>
        </Container>

    </Container>
  );
}

export default Tproducts;