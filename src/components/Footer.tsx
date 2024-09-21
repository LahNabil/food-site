"use client";
import React from 'react'
import './Footer.css'
import Link from 'next/link';


export const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className="description-footer">
          <h3>Coot it Easy</h3>
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
        avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années
        1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre
        spécimen de polices de texte du faux texte employé dans la composition et la mise en page avant
        impression.
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
          <li>Quick & easy</li>
          <li>Main corse</li>
          <li>Dessert</li>
          <li>Drinks</li>
        </ul>    
        </div>
      </div>
    </footer>
  )
}
