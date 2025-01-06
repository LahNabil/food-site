import Image from 'next/image';
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
    <Link href={`/postitems/${formatTitleForUrl(slide.title)}`}>
      <div className="img-bg d-flex align-items-end">
        <div className="background-image-wrapper">
          <Image
            src={slide.bgImg}
            alt={slide.title}
            fill
            style={{ objectFit: 'cover' }}
            quality={75}
            priority={true}
            loading='eager'
          />
        </div>
        <div style={{ position: 'relative', zIndex: 2, color: 'white', margin: '5%',width:'500px'}}>
          <h2>{slide.title}</h2>
          <p>{slide.brief}</p>
        </div>
      </div>
    </Link>
    
  )
}
