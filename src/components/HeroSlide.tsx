import Link from 'next/link';
import React from 'react'

const formatTitleForUrl = (title: string): string => {
  return title.trim().replace(/\s+/g, '-').toLowerCase();
};

export default function HeroSlide({
    slide,
 } : {
        slide:{
            bgImg: string;
            title: string;
            brief: string;
            id: number;
    }

}){
  return (
    <Link href={`/postitems/${formatTitleForUrl(slide.title)}`}className="img-bg d-flex align-items-end"
    style={{backgroundImage: `url(${slide.bgImg})`}}
    >
        <div className="img-bg-inner">
          
            <h2>{slide.title}</h2>
            <p>{slide.brief}</p>
        </div>
    </Link>
    
  )
}
