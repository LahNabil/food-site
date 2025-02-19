"use client";
import { PostItemOne } from '@/components/PostItemOne';
import { postItems } from '@/data/data';
import React from 'react';
import './itemsrec.css';
import SubHeader from '@/components/SubHeader';
import { Helmet } from 'react-helmet';

const PostItems = () => {
  const canonicalUrl = "https://www.fastcookiteasy.com/postitems";
  
  // Structured data definitions
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.fastcookiteasy.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "All Recipes",
        "item": canonicalUrl
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Fast Cookit Easy",
    "url": "https://www.fastcookiteasy.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.fastcookiteasy.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fast Cookit Easy",
    "url": "https://www.fastcookiteasy.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.fastcookiteasy.com/assets/fastcookiteasy_logo.jpg"
    },
    "sameAs": [
      "https://web.facebook.com/profile.php?id=61566508671453",
      "https://www.pinterest.com/cookiteasy_/"
    ]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Explore All Recipes – Quick, Easy, and Delicious Meals for Every Occasion",
    "description": "Your go-to destination for quick and easy recipes for every occasion. Browse our complete collection of delicious meals!",
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": postItems.length,
      "itemListElement": postItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Recipe",
          "name": item.title,
          "url": `https://www.fastcookiteasy.com/postitems/${item.lien}`,
          "image": `https://www.fastcookiteasy.com${item.img}`,
          "description": item.brief,
          "recipeCategory": item.category || "General",
          "prepTime": item.preptime ? `PT${item.preptime}M` : "PT15M",
          "recipeIngredient": item.ingredients?.length ? item.ingredients : ["Ingredients not available"],
          "author": {
            "@type": "Organization",
            "name": "Fast Cookit Easy"
          }
        }
      }))
    }
  };

  return (
    <main id="main">
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webpageSchema)}</script>
      </Helmet>
      <SubHeader />
      <h1 className='main-title'>Explore All Recipes – Quick, Easy, and Delicious Meals for Every Occasion</h1>
      <section id="posts" className="posts">
        <div className="container">
          <div className="filter"></div>
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