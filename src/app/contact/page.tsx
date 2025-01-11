import React from 'react'
import "./contact.css"
import { contact_sci } from '@/data/data';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us",
    description: "Get in touch with FastCookItEasy. We'd love to hear from you!",
    alternates: {
      canonical: "https://www.fastcookiteasy.com/contact",
    },
    openGraph: {
      title: "Contact Us",
      description: "Get in touch with FastCookItEasy. We'd love to hear from you!",
    },
  };
}

const Contact = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Cook it Easy",
    "description": "Get in touch with Cook it Easy for questions, feedback, or collaborations.",
    "url": "https://www.fastcookiteasy.com/contact",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "nabillh.business@gmail.com",
      "contactType": "customer service",
      "availableLanguage": ["English", "French"]
    },
    "sameAs": [
      "https://www.facebook.com/people/Cook-It-Easy/61566508671453/",
    ]
  };
  return (
    <main id='main_contact'>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
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
                <Link href={sci.link ?? "#"} target='_blank'><Image src={sci.img} className='social-element' height={100} width={100} loading="lazy"  alt='image_social_facebook_instagram'/></Link>
              </div>
            ))
          }
        </div>
        <div className="container_email">
            <Image src='/assets/email-logo.png' height={100} width={100} alt='logo_mail' loading="lazy"  className='email'/>
            <span className="text-email">
              <p>nabillh.business@gmail.com</p>
            </span>
        </div>
      </div>

    </main>
  )
}

export default Contact