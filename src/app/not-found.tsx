import React from 'react';
import Link from 'next/link';
import './notfound.css';

const NotFound = () => {
  return (
    <div className="container-not">
      <div className="content">
        <h1 className="title">Oops! Page Not Found</h1>
        <p className="description">
          It seems you&apos;ve taken a wrong turn. Don&apos;t worry, why not explore one of our delicious recipes instead?
        </p> 
        <Link href="/">
          <span className="back-button">
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
