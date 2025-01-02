import React from 'react'
import './PostItemOne.css';
import Link from 'next/link';
import Image from 'next/image';

export const PostItemOne = ({large, item}:{
    
    large: boolean;
    item: {
        id: number,
        img: string,
        alte: string,
        category: string,
        comment: string[],
        title: string,
        brief: string,
        description: string,
        ingredients: string[],
        preptime: number,
        type: boolean,
        trending: boolean
    }
}) => {
  return (
    
    <div className={`post-entry-1 ${large ? 'lg' : undefined}`}>
        <Link href={`/postitems/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
            <Image src={`${item.img}`} alt={`${item.alte}`} width={290} height={100} loading="lazy" title={`${item.title}`}  className='img-fluid'/>
        </Link>
        <div className="post-meta">
            <span className="date">{item.category} {item.preptime} min</span>
            <span className="mx-1">
                <i className="bi bi-dot"></i>{' '}
            </span>{' '}
        </div>
        <h2>
            <Link href={`/postitems/${item.title.replace(/\s+/g, '-')}`}>{item.title}</Link>
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
