import React from 'react'
import './PostItemOne.css';
import Link from 'next/link';
import { postItems } from '@/data/data';

export const PostItemOne = ({large, item}:{
    large: boolean;
    item: {
        id: string;
        img: string;
        category: string;
        date: string;
        title: string;
        brief: string;
        avatar: string;
        author: string;
        preptime: number;
    }
}) => {
  return (
    <div className={`post-entry-1 ${large ? 'lg' : undefined}`}>
        <Link href={`postitems/${item.id}`}>
            <img src={`${item.img}`} alt='recipe_food' className='img-fluid'/>
        </Link>
        <div className="post-meta">
            <span className="date">{item.category}    {item.preptime} min</span>
            <span className="mx-1">
                <i className="bi bi-dot"></i>{' '}
            </span>{' '}
        </div>
        <h2>
            <Link href={`postItems/${item.id}`}>{item.title}</Link>
        </h2>
        {large ? (
            <>
            <p className="mb-4 d-block">{item.brief}</p>
            <div className='d-flex align-items-center author'>
                <div className="photo">
                    <h5 className='img-fluid'> Duration: </h5>
                </div>
                <div className="name">
                    <h3 className="m-0 p-0">{item.preptime} min</h3>
                </div>
            </div>
            </>
        ) : null
    }
    </div>

  )
}
