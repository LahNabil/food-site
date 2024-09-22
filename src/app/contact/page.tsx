"use client";

import React from 'react'
import "./contact.css"
import { contact_sci } from '@/data/data';

const Contact = () => {
//   const [on, setOn]= useState(false);
//   const handleToggleMenu = () => {
//     setOn(!on);
//     let body: HTMLElement | any = document.querySelector('body');
//     body.classList.toggle('mobile-nav-active');

// };
  return (
    <main id='main_contact'>
      <div className="container_contact">
        <h1 className='sous-titre' style={{textAlign: "center"}}>Contact us</h1>
        <div className="text_contact">
          <h3>Let’s Cook Up a Conversation!</h3>
          <p>Whether you’ve got a question about one of our recipes, a tip to share, or a delicious idea for collaboration, we’d love to hear from you! Our kitchen is always open to feedback, suggestions, and any inquiries you might have.

          Don’t hesitate to get in touch — let’s keep the recipe inspiration flowing together!</p>
          <h5>Bon Appétit and happy cooking!</h5>
        </div>
        <div className="social-media">
          {
            contact_sci
            .slice(0,-1)
            .map((sci)=>(
              <div className="elements" key={sci.id}>
                <a href={sci.link} target='_blank'><img src={sci.img} className='social-element' alt='image_social_facebook_instagram'/></a>
              </div>
            ))
          }
          

        {/* <div className="position_relative">
                <Sci/>
                {
                    on ? (
                        <i className='bi bi-x mobile-nav-toggle' onClick={handleToggleMenu}></i>
                    ) : ( <i className='bi bi-list mobile-nav-toggle' onClick={handleToggleMenu}></i>)
                }
          </div> */}
        </div>
        <div className="container_email">
            <img src='./assets/email-logo.png' alt='logo_mail' className='email'/>
            <span className="text-email">
              <p>nabillh.business@gmail.com</p>
            </span>
        </div>
      </div>

    </main>
  )
}

export default Contact