import React from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();
    

    emailjs.sendForm('service_7lv83k2', 'mel', e.target, 'user_JjiWs120W4KqeGzu0JcW7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <h1>Contact Me</h1><br></br>
      <input type="hidden" name="contact_number" />
      <label>Name: </label>
      <input type="text" name="user_name" /><br></br>
      <label>Email:</label>
      <input type="email" name="user_email" /><br></br>
      <label>Message:</label>
      <textarea name="message" /><br></br>
      <input type="submit" value="Send" />
    </form>
  );
}