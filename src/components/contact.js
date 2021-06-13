import React from 'react';
import { Button } from 'react-bootstrap';


function Contact(props) {
  
  return(
    <div className="contact">
      <form id="contact-form"  method="POST">
      <h1 className="contact-title">Get in touch</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <lable htmlFor="message">Message</lable>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  )
}
export default Contact