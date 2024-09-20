"use client";

import { postItems } from '@/data/data';
import React, { useState, useEffect, use } from 'react';
import './style.css';
import Image from 'next/image';
import { SidePostItem } from '@/components/SidePostItem';


interface Post {
  id: number;
  img: string;
  category: string;
  title: string;
  brief: string;
  ingredients: string[];
  preptime: number;
  type: boolean;
  trending: boolean;
}

const PostItem = ({ params }: { params: { id: number } }) => {
  const [item, setItem] = useState<Post | null>(null);
  const [items, setItems] = useState(postItems);
  const postId = Number(params.id); // Récupérer l'ID à partir des params
  const tabsData= [
    {id: 1, name: 'popular', active: true},
    {id: 2, name: 'trending', active: false}
  ]
  const[tabs, setTabs]= useState(tabsData);

  const handleTabActive = (id:number):void=>{
    setTabs(tabsData.map(tab=>{
        tab.active= false;
        if(tab.id === id) tab.active = true;
        return tab;
    }))
  };

  useEffect(() => {
    const foundItem = postItems.find(post => post.id === postId); // Chercher le post avec cet ID
    if (foundItem) {
      setItem(foundItem);
    }
  }, [postId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <main id="main" style={{ margin: '100px' }}>
      <section className="single-post-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 post-content">
              <div className="single-post">
                <div className="post-meta">
                  <span className="date">{item.category}</span>
                </div>
                <h1 className="mb-5">{item.title}</h1>
                <p>
                    <span className="firstcharacter">
                        {item.brief && item.brief.charAt(0)}
                    </span>
                    {item.brief && item.brief.substring(1)}
                </p>
                <figure className='my-4'>
                    <img src={item.img} alt='photo_recipe' className='img-fluid' />
                    
                    {/* <Image
                     src={item.img}
                     alt='photo_recipe'
                     className='img-fluid'
                     height={100}
                     width={100}
                     layout="responsive" /> */}
                </figure>
                <figcaption>
                Lorem du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
                <div className="aside-block">
                    <ul className='nav nav-pills custom-tab-nav mb-4'>
                    {tabs.map(tab=>(
                        <li className='nav-item' key={tab.id}>
                        <button
                        className={`nav-link ${
                            tab.active ? 'active' : undefined
                        }`}
                        onClick={()=> handleTabActive(tab.id)}
                        >{tab.name}</button>
                        </li>
                    ))}
                    </ul>
                    <div className="tab-content">
                        <div className={`tab-pane fade ${
                            tabs[0].active ? 'show active' : ''
                        }`}>
                            {items.slice(0,6)
                            .map(item=>(
                                <SidePostItem key={item.id} item={item}/>
                            ))
                            }
                        </div>
                        <div className={`tab-pane fade ${
                            tabs[1].active ? 'show active' : ''
                        }`}>
                            {items
                            .filter(item=> item.trending)
                            // .slice(6,12)
                            .map(item=>(
                                <SidePostItem key={item.id} item={item}/>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <div className="aside-block">
                    <h3 className="aside-title">Video</h3>
                    <div className="video-post">
                        <a
                        target='_blank'
                        href="https://www.youtube.com/watch?v=NJuxjSplSII&ab_channel=ChoumichaChafay"
                        className='link-video'>
                        <span className="bi-play-fill"></span>
                        <img
                        src='/assets/photo3.jpg'
                        alt="photo_video_recipe"
                        className='img-fluid'
                        />
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostItem;
