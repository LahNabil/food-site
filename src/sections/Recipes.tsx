'use client';
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
//import './posts.css'
import { postItems } from '@/data/data';
import AOS from 'aos';
import { PostItemOne } from '@/components/PostItemOne';

export const Recipes = () => {
  // const [items, setItems] = useState(postItems);

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    })
  }, []);
  return (
    <section id='posts' className='posts'>
      <div className="container">
        {

          postItems.map(item=>(
            <PostItemOne key={item.id} large={false} item={item} />
            // <p key={item.id}>
            //   {item.title}
            // </p>
          ))
        }
      </div>
    </section>
  );
  
}
