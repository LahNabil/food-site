"use client";
import { PostItemOne } from '@/components/PostItemOne';
import { postItems } from '@/data/data';
import React, {useState, useEffect} from 'react'

const PostItems = () => {
    const [items, setItems] = useState(postItems);
  return (
    <main id="main">
        <section id="posts" className="posts">
            <div className="container">
                <div className="filtre">
                    <h3>Category</h3>
                </div>
                <div className="row">
                    {items && items.length > 0 ? (
                        items.map((item)=>(
                            <div className="col-lg-3 col-md-6" key={item.id}>
                                <PostItemOne large={false} item={item}/>
                            </div>
                        ))

                    ):
                    <p> No data available</p> 
                    }
                </div>
            </div>
        </section>
    </main>
  )
}
export default PostItems;
