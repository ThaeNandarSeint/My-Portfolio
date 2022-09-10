import React, { useRef, useState } from 'react'
// css
import './Contact.css'

// emailjs
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2eoe6z8', 'template_pct42gs', form.current, 'GP81B3qP3mUYTUgwx')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  return (
    <form id='contact' ref={form} onSubmit={sendEmail}>
        <fieldset>
            <legend>Contact Me:</legend>
            <input type='text' name='user_name' placeholder='Name' />
            <input type='email' name='user_email' placeholder='Email' />
            <input type='text' name='subject' placeholder='Subject' />
            <textarea name='message' placeholder='Message' />
            <input type='submit' value='Send' className='send-btn' />
            <span>{done && "Thanks for contacting me!"}</span>     
        </fieldset>              
    </form>
  )
}