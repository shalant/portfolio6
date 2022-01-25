import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import DW from '../assets/images/DW.jpg';
import Headshot from '../assets/images/headshot.jpg';

const imageArray = [DW]

export const CardsRB = () => {
  return <div>
    <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
            <Card>
                <Card.Img variant="top" src={imageArray} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
    </Row>
    {/* <Container>
        <Row>
            <Col xs={6} md={4}>
                <Image src={DW} rounded />
            </Col>
            <Col xs={6} md={4}>
                <Image className='fluid roundedCircle' src="/thumbnail.png" circle />
            </Col>
            <Col xs={6} md={4}>
                <Image src="/thumbnail.png" thumbnail />
            </Col>
        </Row>
    </Container>; */}


  </div>;
};
