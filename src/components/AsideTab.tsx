"use client";
import React, { useState, useEffect} from 'react';
import { SidePostItem } from '@/components/SidePostItem';
import { notFound, useParams } from 'next/navigation';
import { postItems } from '@/data/data';


interface Post {
    id: number;
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



const AsideTab = () => {

    const { title } = useParams(); 
    const [item, setItem] = useState<Post | null>(null);
    const [items] = useState(postItems);
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
          if(typeof title === 'string'){
            const decodedTitle = title.replace(/-/g, ' ');
            const foundItem = postItems.find(post =>
               post.title.toLowerCase() === decodedTitle.toLowerCase());
          if (foundItem) {
            setItem(foundItem);
          } else {
            notFound();
          }
          }
        }, [title]);
    
        if (!item) {
          return <div>Loading...</div>;
    }






  return (
    <div>
        <div className="aside-block">
            <ul className='nav nav-pills custom-tab-nav mb-4'>
                {tabs.map(tab=>(
                    <li className='nav-item' key={tab.id}>
                        <button
                            className={`nav-link ${
                                tab.active ? 'active' : undefined
                            }`}
                            onClick={()=> handleTabActive(tab.id)}
                            >{tab.name}
                        </button>
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
                        .map(item=>(
                            <SidePostItem key={item.id} item={item}/>
                                      ))
                }
                </div>
            </div>
          </div>
    </div>
  )
}

export default AsideTab