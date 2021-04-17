import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About () {
    return (
        
            <div className="image">
                <div className='about-me-container'>
            <Row className="d-flex align-items-center justify-content-center">
            <Col xs={4} md={2}>
            <img className="homePagePhoto" width="100%" src="https://images.squarespace-cdn.com/content/v1/5547ba95e4b06698c531adc2/1432423569990-JQZ800UK0BX75YRKHBBY/ke17ZwdGBToddI8pDm48kLxnK526YWAH1qleWz-y7AFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVH33scGBZjC30S7EYewNF5iKKwhonf2ThqWWOBkLKnojuqYeU1KwPvsAK7Tx5ND4WE/circular+placeholder.jpg"></img>
            </Col>
            <Col xs={4} md={3}>
                <h2>About Me</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Col>
            </Row>
        </div>
        </div>
    );
}
export default About;