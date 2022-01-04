import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Particles from 'react-particles-js';
import './home.css';

function Home() {
    return (
        <div>
        <Row className='home'>
          <Particles 
                className='particles-canvas'
                params={{
                  particles: {
                    number: {
                      value: 30,
                      density: {
                        enable: true,
                        value_area: 900
                      }
                    },
                    shape: {
                      type: 'polygon',
                      stroke: {
                        width: 6,
                        color: 'rgba(200,65,10,10)'
                      }
                    }
                  }
                }}
              />
          <Col xs={2}>1 of 2</Col>
          <Col xs={10}>
            <div className='home'>
              
              <Header />
            </div>
          </Col>
        </Row>
        </div>
    )
}

export default Home
