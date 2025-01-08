import Link from 'next/link';
import React from 'react';
import './PostItemOne.css';


const formatTitleForUrl = (title: string): string => {
  return title.trim().replace(/\s+/g, '-').toLowerCase(); 
};

export const SidePostItem = ({ item }: { 
  item: { 
    id: number; 
    img: string; 
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
      <Link href={`/postitems/${formatTitleForUrl(item.title)}`}>
        <h4>{item.title}</h4>
      </Link>
      
      {item.preptime && (
        <span className="author mb-3 d-block">{item.preptime} min</span>
      )}
    </div>
  );
};
