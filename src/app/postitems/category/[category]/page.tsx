import { PostItemOne } from '@/components/PostItemOne';
import { postItems } from '@/data/data';
import SubHeader from '@/components/SubHeader';
import { notFound } from 'next/navigation';
import "../../itemsrec.css";
import { Metadata } from 'next';
import Script from 'next/script';

// Define H1 titles for each category
const categoryTitles: Record<string, string> = {
  "quick & easy": "Quick and Easy Recipes – Simple Meals for Busy Days",
  "main course": "Main Course Recipes – Hearty and Satisfying Dishes for Every Meal",
  "dessert": "Dessert Recipes – Sweet Treats and Indulgent Delights",
  "drinks": "Drink Recipes – Refreshing Beverages for Every Occasion",
};

const getH1Title = (decodedCategory: string): string => {
  const lowerCaseCategory = decodedCategory.toLowerCase();
  return categoryTitles[lowerCaseCategory] || `${decodedCategory} Recipes`;
};
const slugify = (str: string): string => {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/&/g, 'and') // Replace "&" with "and"
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ''); // Remove special characters
};

type Params = { category: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params;
  const decodedCategory = category.replace(/-/g, ' ').replace(/and/g, '&');

  // Find the category's related items
  const filteredItems = postItems.filter((post) =>
    post.category.toLowerCase() === decodedCategory.toLowerCase()
  );
  const slugifiedCategory = slugify(category); // Convert "Main Course" to "main-course"
  const canonicalUrl = `https://www.fastcookiteasy.com/postitems/category/${slugifiedCategory}`;


  return {
    title: `${decodedCategory} Recipes`,
    description: filteredItems.length > 0
      ? `Discover easy and quick recipes for every occasion. Perfect for busy days or beginners, explore simple yet delicious meals from the ${decodedCategory} category!`
      : "Explore a variety of recipes across different categories.",
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      images: [
        {
          url: filteredItems.length > 0 ? filteredItems[0].img : "/assets/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: filteredItems.length > 0 ? filteredItems[0].brief : "Recipe category description",
        },
      ],
    },
  };
}

export const generateStaticParams = (): Params[] => {
  const categories = [...new Set(postItems.map((post) => post.category))];
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and'),
  }));
};

const CategoryPage = async ({ params }: { params: Promise<Params> }) => {
  const { category } = await params;
  const decodedCategory = category.replace(/-/g, ' ').replace(/and/g, '&');

  const filteredItems = postItems.filter((post) =>
    post.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  if (filteredItems.length === 0) {
    notFound();
    return null;
  }
  
  // Get the H1 title for the current category
  const h1Title = getH1Title(decodedCategory);
  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${decodedCategory} Recipes`,
    "description": `Explore a collection of delicious and easy ${decodedCategory.toLowerCase()} recipes. Perfect for every occasion!`,
    "url": `https://www.fastcookiteasy.com/postitems/category/${slugify(category)}`,
    "numberOfItems": filteredItems.length,
    "itemListElement": filteredItems.map((item, index) => {
      // Ensure preptime exists to avoid NaN values
      const totalTime = item.preptime || 0;
      const prepTime = Math.round(totalTime / 3);
      const cookTime = totalTime - prepTime;

      return {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Recipe",
          "name": item.title,
          "url": `https://www.fastcookiteasy.com/postitems/${item.lien}`,
          "image": `https://www.fastcookiteasy.com${item.img}`,
          "description": item.brief,
          "recipeCategory": item.category || "General",
          "recipeCuisine": "International",
          "cookTime": cookTime > 0 ? `PT${cookTime}M` : "PT10M",
          "prepTime": item.preptime ? `PT${item.preptime}M` : "PT15M",
          "recipeIngredient": item.ingredients?.length ? item.ingredients : ["Ingredients not available"],
          "recipeInstructions": item.comment?.length
            ? item.comment.map((step) => ({
                "@type": "HowToStep",
                "text": step,
                "image": `https://www.fastcookiteasy.com${item.img}`,
                "url": `https://www.fastcookiteasy.com/postitems/${item.lien}`
              }))
            : [{ "@type": "HowToStep", "text": "Instructions not available" }],
          "author": {
            "@type": "Organization",
            "name": "Fast Cookit Easy"
          },
          "keywords": "recipe, quick recipe, main course, cook recipe, fast recipe, refreshing, easy recipe"
        }
      };
    })
  };


  return (
    <main id="main">
      <Script
        id="category-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
      />
      <SubHeader />
      <h1 className="main-title">{h1Title}</h1>
      <section id="posts" className="posts">
        <div className="container">
          <div className="row">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div className="col-lg-3 col-md-6" key={item.id}>
                  <PostItemOne large={false} item={item} />
                </div>
              ))
            ) : (
              <p>No posts available for this category.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
