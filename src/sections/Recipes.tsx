'use client';
import React, { useState, useEffect } from 'react';
import { postItems } from '@/data/data'; // Suppose that you have a data file containing posts
import AOS from 'aos';
import { PostItemOne } from '@/components/PostItemOne';
import { TrendingPost } from '@/components/TrendingPost';

export const Recipes = () => {
  const [items] = useState(postItems); // Assign postItems directly

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <section id='posts' className='posts'>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            {/* Display the first post in large format */}
            {items.length > 0 && <PostItemOne large={true} item={items[0]} />}
          </div>
          <div className="col-lg-8">
            <div className="row g-5">
              <div className="col-lg-4 border-start custom-border">
                {/* Filter posts that are not trending or top, and display the first 3 */}
                {items
                  .filter(
                    (item) => !item.trending 
                  )
                  .slice(0, 3)
                  .map((item, index) => (
                    <PostItemOne key={index} large={false} item={item} />
                  ))}
              </div>
              <div className="col-lg-4 border-start custom-border">
              {items
                  .filter(
                    (item) => !item.trending
                  )
                  .slice(3, 6)
                  .map((item, index) => (
                    <PostItemOne key={index} large={false} item={item} />
                  ))} 
              </div>
              <div className="col-lg-4 border-start custom-border">
                <div className="trending">
                  <h3>Trending</h3>
                  <ul className='trending-post'>
                    {
                      items && items.length> 0
                      && items.filter((item) => item.trending).map((item, index) => (
                        <TrendingPost key={item.id} index={index} item={item}/>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
