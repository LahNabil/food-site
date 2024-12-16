import React from 'react';
import './trendingPost.css';
import Link from 'next/link';

const formatTitleForUrl = (title: string): string => {
  return title.trim().replace(/\s+/g, '-').toLowerCase(); // Replaces spaces with '-', and makes it lowercase
};

export const TrendingPost = ({ item, index }: { 
  item: { 
    id: number; 
    title: string; 
    category: string; 
  }; 
  index: number; 
}) => {
  return (
    <li>
      <Link href={`/postitems/${formatTitleForUrl(item.title)}`}>
        <span className="number">{index + 1}</span>
        <h3>{item.title}</h3>
        <span className="author">{item.category}</span>
      </Link>
    </li>
  );
};
