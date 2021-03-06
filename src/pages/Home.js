import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Particles from 'react-particles-js';
import './home.css';
import WeatherWidget from '../components/WeatherWidget/WeatherWidget';

function Home() {
    return (
        <>
        <Row className='home'>
          
          <Col xs={3} m={2} lg={2} className='home__sidebar'>
            <WeatherWidget />
          </Col>

          <Col xs={9} m={10} lg={10}>
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
            <div className='home__header'>    
              <Header />
            </div>
          </Col>
        </Row>
        </>
    )
}

export default Home
