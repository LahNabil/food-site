
import { Metadata } from 'next';
import './about.css'
import Image from 'next/image'

import React from 'react';

export const metadata: Metadata = {
  title: "About"
}

const AboutPage = () => {
  return (
    <main id='main'>
      <h1 className='sous-titre' style={{textAlign: 'center'}} >About Us</h1>
      <div className="container">
        <div className="cont" style={{display: 'flex', margin: '3%'}}>
          <div className='left'>
            <Image src="/assets/about_us_photo2.jpg" alt="Company_food_history" width={500} height={400} loading="lazy"  />
          </div>
          <div className="right">
          <h2>Company History</h2>
          &quot;Cook it Easy&quot; was born from a passion for simplifying the art of cooking. Since our launch, we’ve grown into a vibrant community of food lovers who appreciate the beauty of a well-cooked meal without the stress. What started as a small blog sharing family recipes and culinary tips has evolved into a trusted resource for home cooks of all levels. Over the years, we’ve stayed committed to our mission: to provide simple, delicious, and accessible recipes that inspire people to cook more confidently in their kitchens.

With each post, we aim to bring a sense of joy and accomplishment to cooking, showing that great meals don’t have to be complicated. From busy weeknight dinners to indulgent weekend treats, &quot;Cook it Easy&quot; is your companion in the kitchen, making cooking fun and approachable for everyone. </div>
        </div>
        <div className="cont" style={{display: 'flex', margin: '3%'}}>
          <div className='left' style={{ paddingTop:'7%'}}>
          <h2>Mission & Vision</h2>
          At &quot;Cook it Easy&quot;, our mission is simple: to make cooking accessible, enjoyable, and rewarding for all. We believe that everyone, regardless of their experience level, can create delicious dishes with the right guidance. Our vision is to become the go-to platform for anyone seeking easy-to-follow recipes, creative meal ideas, and expert cooking tips. We strive to cultivate a community where food lovers can connect, share, and inspire one another, transforming everyday meals into extraordinary experiences.

We are passionate about bringing out the chef in everyone, and our content reflects that. Whether you&apos;re a beginner or an experienced cook, we offer something for everyone—from one-pot meals and quick fixes to gourmet creations. With &quot;Cook it Easy&quot;, your kitchen becomes a place of endless possibilities.</div>
          <div className="right">
          <Image src="/assets/image_about_logo.png" alt="Mission_vision_food_recipe" width={500} height={300} loading="lazy"  className='img-right' />
          </div>
        </div>
      

      </div>
      
    </main>
  );
};

// Export par défaut du composant
export default AboutPage;
