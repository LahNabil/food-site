// app/about/page.js

"use client"; // Si c'est un composant côté client
import './about.css'

import React from 'react';

const AboutPage = () => {
  return (
    <main id='main'>
      <h1 className='sous-titre' style={{textAlign: 'center'}} >About Us</h1>
      <div className="container">
        <div className="cont" style={{display: 'flex', margin: '3%'}}>
          <div className='left'>
            <img src="./assets/about_us_photo2.jpg" alt="" style={{width: '500px', height:'400px', objectFit:'cover'}} />
          </div>
          <div className="right">
          <h2>Company History</h2>
          Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte       
          </div>
        </div>
        <div className="cont" style={{display: 'flex', margin: '3%'}}>
          <div className='left'>
          <h2>Mission & Vision</h2>
          Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte       
          </div>
          <div className="right">
          <img src="./assets/about_us_photo.jpg" alt="" style={{width: '500px', height:'400px', objectFit:'cover'}} />
          </div>
        </div>
      

      </div>
      
    </main>
  );
};

// Export par défaut du composant
export default AboutPage;
