"use client";
import React from 'react'
import './Footer.css'
import Link from 'next/link';


export const Footer = () => {
  return (
    <footer>
      <div className="container-foooter">
      <div className="container-footer">
        <div className="description-footer">
          <h3>Cook it Easy</h3>
          Discover delicious and easy-to-make recipes for every taste and occasion.
          Explore our articles, follow simple steps, and enjoy homemade meals. Whether you&apos;re a
          beginner or a seasoned cook, find inspiration and make cooking a delightful part of your daily
          routine. Enjoy cooking with us!
          </div>
        <div className="navigation-footer">
          <h3>Navigation</h3>
          <ul>
            <li><Link href="/" legacyBehavior>
            <a>Home</a>
            </Link></li>
            <li><Link href="/postitems" legacyBehavior>
            <a>Recipes</a>
            </Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="categories-footer">
        <h3>Categories</h3>
        <ul>
          <li><Link href='/postitems/category/quick-and-easy'>Quick & easy</Link></li>
          <li><Link href='/postitems/category/main-course'>Main corse</Link></li>
          <li><Link href='/postitems/category/dessert'>Dessert</Link></li>
          <li><Link href='/postitems/category/drinks'>Drinks</Link></li>
        </ul>    
        </div>
      </div>
      <div className="privacy">
        <p>@ 2024 Cook It Easy | <Link href='/policy'>Privacy Policy</Link> | <Link href='/terms'>Terms of use</Link> | <Link href='/disclaimer'>Disclaimer</Link></p>
      </div>
      </div>
    </footer>
  )
}
