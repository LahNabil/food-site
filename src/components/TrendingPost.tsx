import React from 'react';
import './trendingPost.css';
import Link from 'next/link';

export const TrendingPost = ({ item, index }: { 
  item: { 
    id: number; 
    title: string; 
    lien:string;
    category: string; 
  }; 
  index: number; 
}) => {
  return (
    <li>
      <Link href={`/postitems/${item.lien}`}>
        <span className="number">{index + 1}</span>
        <h3>{item.title}</h3>
        <span className="author">{item.category}</span>
      </Link>
    </li>
  );
};
