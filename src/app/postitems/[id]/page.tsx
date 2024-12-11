"use client";

import { postItems } from '@/data/data';
import React, { useState, useEffect } from 'react';
import './style.css';
import Image from 'next/image';
import { SidePostItem } from '@/components/SidePostItem';
import { useParams } from 'next/navigation'; // Import useParams

interface Post {
  id: string;
  img: string;
  category: string;
  comment: string[];
  title: string;
  brief: string;
  ingredients: string[];
  preptime: number;
  type: boolean;
  trending: boolean;
}

const PostItem = () => {
  const { id } = useParams(); // Get the dynamic parameter using useParams
  const [item, setItem] = useState<Post | null>(null);
  const [items] = useState(postItems);

  const tabsData = [
    { id: 1, name: 'popular', active: true },
    { id: 2, name: 'trending', active: false },
  ];
  const [tabs, setTabs] = useState(tabsData);

  const handleTabActive = (id: number): void => {
    setTabs(
      tabsData.map(tab => {
        tab.active = false;
        if (tab.id === id) tab.active = true;
        return tab;
      })
    );
  };

  useEffect(() => {
    if (id) {
      const foundItem = postItems.find(post => post.id === id); // Find the post by ID
      if (foundItem) {
        setItem(foundItem);
      }
    }
  }, [id]);

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
                <figure className="my-4">
                  <Image
                    height={500}
                    width={820}
                    src={item.img}
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
                    <div className="infos_ingrédients">
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
                        className={`nav-link ${tab.active ? 'active' : undefined}`}
                        onClick={() => handleTabActive(tab.id)}
                      >
                        {tab.name}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="tab-content">
                  <div className={`tab-pane fade ${tabs[0].active ? 'show active' : ''}`}>
                    {items.slice(0, 6).map(item => (
                      <SidePostItem key={item.id} item={item} />
                    ))}
                  </div>
                  <div className={`tab-pane fade ${tabs[1].active ? 'show active' : ''}`}>
                    {items.filter(item => item.trending).map(item => (
                      <SidePostItem key={item.id} item={item} />
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

export default PostItem;
