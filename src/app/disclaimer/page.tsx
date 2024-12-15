import React from 'react'
import './disclaimer.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Disclaimer"
}

const Disclaimer = () => {
  return (
    <div className='disclaimer-container'>
      <header>
        <h1>Disclaimer</h1>
      </header>

      <main>
        <section>
          <h2>Introduction</h2>
          <p>Welcome to <strong>Fast Cook It Easy</strong>, a website dedicated to sharing delicious recipes, cooking tips, and food-related content. By accessing and using this website, you agree to the following disclaimer.</p>
        </section>

        <section>
          <h2>Affiliate Links</h2>
          <p>Some of the links on this website are affiliate links, which means I may earn a small commission if you make a purchase through these links. This comes at no additional cost to you. I only recommend products and services that I personally believe in, and all opinions expressed are my own.</p>
        </section>

        <section>
          <h2>Google Adsense and Other Advertisements</h2>
          <p>This website uses Google Adsense and other advertising platforms to display ads. These ads may be personalized based on your interests and browsing behavior. Please refer to the <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google Ads Privacy Policy</a> for more information on how your data is used for ad personalization.</p>
        </section>

        <section>
          <h2>Email Collection</h2>
          <p>From time to time, I may ask for your email address in order to send you updates, promotional materials, or marketing messages related to Fast Cook It Easy. By providing your email, you consent to receiving such communications. You can unsubscribe at any time by clicking the unsubscribe link in any email you receive from me.</p>
        </section>

        <section>
          <h2>Privacy Policy</h2>
          <p>Your privacy is important to me. For detailed information on how I handle your personal data, please refer to the <a href="/privacy-policy">Privacy Policy</a> page.</p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>If you have any questions or concerns regarding this disclaimer or any of the policies mentioned above, please feel free to contact me at:</p>
          <p>Email: <a href="mailto:nabillh.business@gmail.com">nabillh.business@gmail.com</a></p>
          <p>Location: Morocco</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Fast Cook It Easy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Disclaimer
