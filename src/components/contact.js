import React from 'react';
import { Button } from 'react-bootstrap';


function Contact(props) {
  
  return(
    <div className="contact">
      <form id="contact-form"  method="POST">
      <h1 className="contact-title">Get in touch</h1>
      <div className="form-container">
        <div className="form-group">
          <input type="text" placeholder="First name" className="form-control" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Last name" className="form-control" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" className="form-control" />
        </div>
        <div className="form-group">
          <textarea className="form-control" placeholder="Message" rows="5"></textarea>
        </div>
        <Button>Send Message</Button>
        </div>
      </form>
    </div>
  )
}
export default Contact