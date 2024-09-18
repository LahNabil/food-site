import React from 'react'
import { navs } from '@/data/data'
import "./Nav.css";
import Link from 'next/link';

export const Nav = () => {
  return (
    <nav id='navbar' className='navbar'>
        <ul>
            {
                navs.map(nav=>(
                    <li key={nav.id}>
                        <Link href={nav.link}>{nav.name}</Link>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}
