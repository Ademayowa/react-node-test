import React, { useState } from 'react';
import { FaPhone, FaHome, FaEnvelope, FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialInstagram } from 'react-icons/ti';
import Img from '../images/img1.png';
import './Contact.css';

const Contact = () => {
  const [contacts] = useState([
    {
      icon: <FaHome size={18} />,
      info: '151 New Park Ave, Hartford, CT 06106 United States',
    },
    {
      icon: <FaPhone size={18} />,
      info: '+1(203) 302-9545',
    },
    {
      icon: <FaEnvelope size={18} />,
      info: 'contactus@nveritasoft.com',
    },
  ]);

  return (
    <div className='container mt-4 z-depth-3 p-5 contact'>
      <div className='row'>
        <div className='col-lg-7'>
          <h2 className='mb-2'>Let's talk</h2>
          <p className='mb-4 col-md-9 pl-0'>
            To request a quote or want to meet up for coffe, contact us directly
            or fill out the form and we will get back to you promptly.
          </p>

          <form className='col-md-9 pl-0 contact__forms'>
            <div className='form-group'>
              <label for='name'>Your Name</label>
              <input type='email' className='form-control form-control-lg' />
            </div>
            <div className='form-group'>
              <label for='name'>Your Email</label>
              <input type='email' className='form-control form-control-lg' />
            </div>
            <div className='form-group'>
              <label for='textarea'>Your Message</label>
              <textarea
                className='form-control form-control-lg pl-4 pt-4'
                rows='4'
                placeholder='Type something if you want...'
              ></textarea>
              <button className='btn btn-primary btn-lg text-capitalize z-depth-2 mt-4'>
                Send message
              </button>
            </div>
          </form>
        </div>

        <div className='col-lg-5 mt-4'>
          <img src={Img} alt='contact-img' />
          <div className='mt-4 contact__address'>
            {contacts.map((contact, index) => (
              <ul key={index} className='d-flex'>
                <li>{contact.icon}</li>
                <li className='ml-4'>{contact.info}</li>
              </ul>
            ))}
          </div>

          <div className='social__icons'>
            <a href='!#'>
              <FaFacebook className='facebook' />
            </a>
            <a href='!#'>
              <AiFillTwitterCircle className='twitter' />
            </a>
            <a href='!#'>
              <TiSocialInstagram className='instagram' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
