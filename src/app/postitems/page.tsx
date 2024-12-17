"use client";
import { PostItemOne } from '@/components/PostItemOne';
import { postItems } from '@/data/data';
import React, { useState, useEffect } from 'react';
import './itemsrec.css';


const PostItems = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // Etat pour la catégorie sélectionnée
  const [filteredItems, setFilteredItems] = useState(postItems); 
  const categories = ['all', 'Quick & Easy', 'Main course', 'Dessert', 'Drinks'];
  
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(postItems); // Afficher tous les articles si 'all' est sélectionné
    } else {
      const filtered = postItems.filter(item => item.category === selectedCategory);
      setFilteredItems(filtered); // Filtrer par catégorie
    }
  }, [selectedCategory]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value); // Mettre à jour la catégorie sélectionnée
  };

  return (
    <main id="main">
      <section id="posts" className="posts">
        <div className="container">
          <div className="filter">
            <h3>Search By Type</h3>
            <select value={selectedCategory} onChange={handleCategoryChange}>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="row">
            {filteredItems && filteredItems.length > 0 ? (
              filteredItems.map(item => (
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
