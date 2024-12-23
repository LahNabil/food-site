"use client";
import { PostItemOne } from '@/components/PostItemOne';
import { postItems } from '@/data/data';
import React from 'react';
import './itemsrec.css';
import SubHeader from '@/components/SubHeader';

const PostItems = () => {
  return (
    <main id="main">
      <SubHeader />
      <section id="posts" className="posts">
        <div className="container">
          <div className="filter">
          </div>
          <div className="row">
            {postItems && postItems.length > 0 ? (
              postItems.map((item) => (
                <div className="col-lg-3 col-md-6" key={item.id}>
                  <PostItemOne large={false} item={item} />
                </div>
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostItems;
