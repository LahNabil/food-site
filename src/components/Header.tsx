"use client";
import React, { useState } from 'react'
import './Header.css';
import { Nav } from './Nav';
import { Sci } from './Sci';
import Image from 'next/image';

export const Header = () => {
    const [on, setOn]= useState(false);
    const handleToggleMenu = () => {
        setOn(!on);
        const body: HTMLElement | null = document.querySelector('body'); // Précision du type
        if (body) {
            body.classList.toggle('mobile-nav-active');
        }
    };

  return (

    <header id="header" className='header d-flex align-items-center fixed-top'>
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        
            <a href='/' className='d-flex'>
            <Image src='/assets/logo_fast_cook_it.png' alt='cook it easy' className='img_logo' loading='eager'  width={140} height={150} />
                <p className='title_header'>Cook it Easy</p>
            </a>
            
            <Nav/>
            <div className="position-relative">
                <Sci/>
                {
                    on ? (
                        <i className='bi bi-x mobile-nav-toggle' onClick={handleToggleMenu}></i>
                    ) : ( <i className='bi bi-list mobile-nav-toggle' onClick={handleToggleMenu}></i>)
                }
            </div>
        </div>
    </header>
    
  )
}
