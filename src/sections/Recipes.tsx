'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { postItems } from '@/data/data'; // Suppose que tu as un fichier de données contenant des posts
import AOS from 'aos';
import { PostItemOne } from '@/components/PostItemOne';

export const Recipes = () => {
  const [items, setItems] = useState(postItems); // Assigne directement la liste des items

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    });
  }, []);

  return (
    <section id='posts' className='posts'>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            {/* Ici, il manque une sélection du premier élément pour afficher en grand */}
            {items.length > 0 && <PostItemOne large={true} item={items[0]} />}
          </div>
          <div className="col-lg-8">
            <div className="row g-5">
              {/* Itère sur les autres éléments à partir du deuxième pour les afficher */}
              {items.slice(1).map(item => (
                <div className="col-lg-4 border-start custom-border" key={item.id}>
                  <PostItemOne large={false} item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
