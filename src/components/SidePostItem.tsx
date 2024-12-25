import Link from 'next/link';
import React from 'react';


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
      <h2 className="mb-2">
        <Link href={`/postitems/${formatTitleForUrl(item.title)}`}>
          {item.title}
        </Link>
      </h2>
      {item.preptime && (
        <span className="author mb-3 d-block">{item.preptime} min</span>
      )}
    </div>
  );
};
