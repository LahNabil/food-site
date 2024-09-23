"use client";
import React, { useState } from 'react'
import './Header.css';
import { Nav } from './Nav';
import { Sci } from './Sci';

export const Header = () => {
    const [on, setOn]= useState(false);
    const handleToggleMenu = () => {
        setOn(!on);
        let body: HTMLElement | any = document.querySelector('body');
        body.classList.toggle('mobile-nav-active');

    };

  return (

    <header id="header" className='header d-flex align-items-center fixed-top'>
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        
            <a href='/' className='d-flex'>
            <img src='/assets/logo_cook_it.png' alt='cook t easy' className='img_logo' style={{ width: '90px', height: 'auto' }} />
                <h1 className='title_header'>Cook it Easy</h1>
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
