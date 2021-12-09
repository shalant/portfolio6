import React from 'react';
import Header from '../components/Header';
import Particles from 'react-particles-js';


function Home() {
    return (
        <div>
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
                  color: '#f9ab00'
                }
              }
            }
          }}
        />
        <Header />
        </div>
    )
}

export default Home
