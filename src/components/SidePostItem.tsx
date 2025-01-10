import Link from 'next/link';
import React from 'react';
import './PostItemOne.css';

export const SidePostItem = ({ item }: { 
  item: { 
    id: number; 
    img: string; 
    lien: string;
    category: string; 
    title: string; 
    brief: string; 
    ingredients: string[]; 
    preptime: number; 
    type: boolean; 
    trending: boolean; 
  }; 
}) => {    
  return (
    <div className="post-entry-1 border-bottom">
      <div className="post-meta">
        <span className="date">{item.category}</span>
      </div>
      <Link href={`/postitems/${item.lien}`}>
        <h4>{item.title}</h4>
      </Link>
      
      {item.preptime && (
        <span className="author mb-3 d-block">{item.preptime} min</span>
      )}
    </div>
  );
};
