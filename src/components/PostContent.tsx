"use client";

import React, { useState, useEffect } from 'react';
import { postItems } from '@/data/data';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import './style.css';

interface Post {
  id: number;
  img: string;
  category: string;
  comment: string[];
  title: string;
  brief: string;
  description: string;
  ingredients: string[];
  preptime: number;
  type: boolean;
  trending: boolean;
}

const PostContent = () => {
  const { title } = useParams();
  const [item, setItem] = useState<Post | null>(null);
  const tabsData = [
    { id: 1, name: 'popular', active: true },
    { id: 2, name: 'trending', active: false },
  ];
  const [tabs, setTabs] = useState(tabsData);

  useEffect(() => {
    if (typeof title === 'string') {
      const decodedTitle = title.replace(/-/g, ' ');
      const foundItem = postItems.find(post =>
        post.title.toLowerCase() === decodedTitle.toLowerCase()
      );
      if (foundItem) {
        setItem(foundItem);
      } else {
        notFound();
      }
    }
  }, [title]);
  

  const handleTabActive = (id:number):void=>{
    setTabs(tabsData.map(tab=>{
        tab.active= false;
        if(tab.id === id) tab.active = true;
        return tab;
    }))
  };

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
                  <span className="firstcharacter">{item.brief.charAt(0)}</span>
                  {item.brief.substring(1)}
                </p>
                <p>{item.description}</p>
                <figure className="my-4">
                  <Image
                    height={500}
                    width={820}
                    src={item.img}
                    loading="lazy" 
                    alt="photo_recipe"
                    className="img-fluid"
                  />
                  <figcaption className="fig_caption">
                    <div className="infos_comment">
                      <h2>Steps:</h2>
                      <ol>
                        {item.comment.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>
                    <div className="infos_ingredients">
                      <h2>Ingredients:</h2>
                      <ol>
                        {item.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ol>
                    </div>
                    <div className="infos_duration">
                      Duration: {item.preptime} min
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md-3">
              <div className="aside-block">
                <ul className="nav nav-pills custom-tab-nav mb-4">
                  {tabs.map(tab => (
                    <li className="nav-item" key={tab.id}>
                      <button
                        className={`nav-link ${tab.active ? 'active' : ''}`}
                        onClick={() => handleTabActive(tab.id)}
                      >
                        {tab.name}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="tab-content">
                  <div
                    className={`tab-pane fade ${tabs[0].active ? 'show active' : ''}`}
                  >
                    {postItems.slice(0, 6).map(item => (
                      <div key={item.id} className="side-post-item">
                        <Image src={item.img} alt={item.title} loading="lazy"  />
                        <h4>{item.title}</h4>
                      </div>
                    ))}
                  </div>
                  <div
                    className={`tab-pane fade ${tabs[1].active ? 'show active' : ''}`}
                  >
                    {postItems
                      .filter(item => item.trending)
                      .map(item => (
                        <div key={item.id} className="side-post-item">
                          <Image src={item.img} alt={item.title} loading="lazy"  />
                          <h4>{item.title}</h4>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="aside-block">
                <h3 className="aside-title">Video</h3>
                <div className="video-post">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=Kes2fk-Nuwo&ab_channel=GordonRamsay"
                    className="link-video"
                  >
                    <span className="bi-play-fill"></span>
                    <Image
                      height={100}
                      width={100}
                      loading="lazy" 
                      src="/assets/photo3.jpg"
                      alt="photo_video_recipe"
                      className="img-fluid"
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

export default PostContent;
