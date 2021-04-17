import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Portfolio () {
    return (
        <div className=" justify-content-center">
            <Row className="row-1">
                <Col md-4>
                    <div className="card-body">
                    <img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"></img>
                        <h4 className="card-title">Card Title</h4>
                        <p className="card-text-summary">Description of my project</p>
                        <a href="#" className="btn-btn-online-success">Go anywhere</a>
                    </div>
                </Col>
                <Col md-4>
                    <div className="card-body">
                        <img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"></img>
                        <h4 className="card-title">Card Title</h4>
                        <p className="card-text-summary">Description of my project</p>
                        <a href="#" className="btn-btn-online-success">Go anywhere</a>
                    </div>
                </Col>
                </Row>
                <Row className="row-2">
                <Col md-4>
                    <div className="card-body">
                    <img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"></img>
                        <h4 className="card-title">Card Title</h4>
                        <p className="card-text-summary">Description of my project</p>
                        <a href="#" className="btn-btn-online-success">Go anywhere</a>
                    </div>
                </Col>
                <Col md-4>
                    <div className="card-body">
                        <img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"></img>
                        <h4 className="card-title">Card Title</h4>
                        <p className="card-text-summary">Description of my project</p>
                        <a href="#" className="btn-btn-online-success">Go anywhere</a>
                    </div>
                </Col>
                </Row>
                
        
     

        
        </div>
      
    );
}

export default Portfolio;