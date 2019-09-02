import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const HomeCards = (props) => {
  return (
    <Row>

     <Col sm="4">
      <Card bg="light" border="light" style={{ width: '23rem', height: '90%'}}>
        <CardHeader>For Detailed Understanding</CardHeader>
        <CardBody>
         <CardTitle>
         <Link to={`/${'documentation'}`}>
         Documentation
         </Link>
         </CardTitle>
          <CardText>
           Comprehensive documentation of methodology and sources to arrive at these visuals
          </CardText>
        </CardBody>
      </Card>
      </Col>

      <Col sm="4">
      <Card bg="light" border="light" style={{ width: '23rem', height: '90%'}}>
        <CardHeader>Live School Implementation</CardHeader>
        <CardBody>
         <CardTitle>
         <Link to='/schoolviz'>
         School Level Dashboard
         </Link>
         </CardTitle>
          <CardText>
           Search and explore implementation at individual school level
          </CardText>
        </CardBody>
      </Card>
      </Col>

     <Col sm="4">
     <Card bg="light" border="light" style={{ width: '23rem', height: '90%'}}>
       <CardHeader>Explore Sate Level Data</CardHeader>
       <CardBody>
        <CardTitle>
         <Link to='/schoolsearch'>
         State Level Visuals
         </Link>
         </CardTitle>
         <CardText>
          State level data visualisations to get a sense of implementation at state level
         </CardText>
       </CardBody>
     </Card>
    </Col>

    </Row>
  );
};

export default HomeCards;
