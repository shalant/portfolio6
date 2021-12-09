import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';

function Footer() {

    return(
        <footer className='foot mt-6'>
            <Container fluid={true} className='footer'>
                {/* i removed the classname 'border-top' from row */}
                <Row className='justify-content-between p-3'>
                    <Col className='p=0' md={3} sm={12}>
                        Doug Rosenberg
                    </Col>
                    <Col>
                        <a href='https://www.github.com/shalant'><i className="fab fa-github-square fa-3x"></i></a>
                    </Col>
                    <Col>
                        <a href='https://www.linkedin.com/in/douglasrosenberg/'><i className="fab fa-linkedin fa-3x"></i></a>
                    </Col>
                    <Col className='p=0 d-flex fustify-content-end' md={3}>
                        This site was made by Doug Rosenberg
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;