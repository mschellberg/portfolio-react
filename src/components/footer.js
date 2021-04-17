import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <footer >
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-4">
                    <Col className="p-0">
                        Melanie Schellberg
                    </Col>
                    <Col className="p=0 d-flex justify-content-end">
                        This is made by Melanie Schellberg
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
 
export default Footer;