import { postItems } from '@/data/data';
import React from 'react';
import './style.css';
import Image from 'next/image';
import SideVideo from '@/components/SideVideo';
import AsideTab from '@/components/AsideTab';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import Script from 'next/script';
import { Recipe, WithContext } from 'schema-dts';


type Params = Promise<{ title: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { title } = await params; 
  const decodedTitle = title.replace(/-/g, ' '); 
  const foundItem = postItems.find((post) =>
    post.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  return {
    title: foundItem?.title || "Recipes Title",
    description: foundItem?.brief || "Food description",
    alternates: {
      canonical: `https://www.fastcookiteasy.com/postitems/${decodedTitle.toLowerCase().replace(/\s+/g, '-')}`
    },
    openGraph: {
      url: `https://www.fastcookiteasy.com/postitems/${decodedTitle.toLowerCase().replace(/\s+/g, '-')}`,
      images: [
        {
          url: `https://www.fastcookiteasy.com${foundItem?.img}`, 
          width: 1200,
          height: 630,
          alt: foundItem?.alte || "Food & Recipe description",
        }
      ],
      type: "article",
      siteName: "Cook it Easy",
    }
  };
}

export const generateStaticParams = () => {
  const paths = postItems.map((post) => ({
    title: post.title.toLowerCase().replace(/\s+/g, '-'), 
  }));

  return paths;
};

const PostItem = async ({ params }: { params: Params }) => {
  const { title } = await params; // Await the params to resolve
  const decodedTitle = title.replace(/-/g, ' '); 
  const foundItem = postItems.find((post) =>
    post.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  if (!foundItem) {
    notFound(); 
    return null; 
  }
  const schemaData: WithContext<Recipe> = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": foundItem.title,
    "image": `https://www.fastcookiteasy.com${foundItem.img}`,
    "description": foundItem.brief,
    "prepTime": `PT${foundItem.preptime}M`,
    "recipeIngredient": foundItem.ingredients,
    "recipeInstructions": foundItem.comment.map((step) => ({
      "@type": "HowToStep",
      "text": step,
    })),
  };

  return (
    <main id="main">
    <Script
        id="recipe-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="single-post-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 post-content">
              <div className="single-post">
                <div className="post-meta">
                  <span className="date">{foundItem.category}</span>
                </div>
                <h1 className="mb-5">{foundItem.title}</h1>
                <p>
                  <span className="firstcharacter">
                    {foundItem.brief && foundItem.brief.charAt(0)}
                  </span>
                  {foundItem.brief && foundItem.brief.substring(1)}
                </p>
                <figure className="my-4">
                  <Image
                    height={500}
                    width={820}
                    src={foundItem.img}
                    alt={foundItem?.alte || "food_photo"}
                    title={foundItem.title}
                    className="img-fluid"
                    priority
                  />
                  <figcaption className="fig_caption">
                    <div className="infos_comment">
                      {foundItem.description && <ReactMarkdown>{foundItem.description}</ReactMarkdown>}
                      <h3>Steps:</h3>
                      <ol>
                        {foundItem.comment.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>
                    <div className="infos_ingrédients">
                      <h3>Ingredients:</h3>
                      <ol>
                        {foundItem.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ol>
                    </div>
                    <div className="infos_duration">
                      Duration: {foundItem.preptime} min
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md-3">
              <AsideTab />
              <SideVideo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostItem;
