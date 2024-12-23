import React from 'react';
import './SubHeader.css';

const SubHeader = () => {
  return (
    <div className="subheader">
      <ul className="categories-list">
        <li>
          <a href="/postitems/category/quick-and-easy">Quick & Easy</a>
        </li>
        <li>
          <a href="/postitems/category/main-course">Main Course</a>
        </li>
        <li>
          <a href="/postitems/category/dessert">Dessert</a>
        </li>
        <li>
          <a href="/postitems/category/drinks">Drinks</a>
        </li>
      </ul>
    </div>
  );
};

export default SubHeader;
