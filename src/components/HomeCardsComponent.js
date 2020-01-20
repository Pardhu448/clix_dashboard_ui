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
	  <a href="https://pardhu448.github.io/clix_vis_demo/pages/documentation.html" target="_blank">
	  Documentation
	  </a>
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
         <Link to='/schoolviz' target='_blank'>
         School Level Dashboard
         </Link>
         </CardTitle>
          <CardText>
           Login to explore live school visuals.
          </CardText>
        </CardBody>
      </Card>
      </Col>

     <Col sm="4">
     <Card bg="light" border="light" style={{ width: '23rem', height: '90%'}}>
       <CardHeader>Explore Sate Level Data</CardHeader>
       <CardBody>
        <CardTitle>
	  <a href="https://pardhu448.github.io/clix_vis_demo/pages/visualisations.html" target="_blank">
	  State Level Visuals
	  </a>
         </CardTitle>
         <CardText>
          State level data visualisations and school level visuals through search. Updated every month.
         </CardText>
       </CardBody>
     </Card>
    </Col>

    </Row>
  );
};

export default HomeCards;
