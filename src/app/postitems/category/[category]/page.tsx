import { PostItemOne } from '@/components/PostItemOne';
import { postItems } from '@/data/data';
import SubHeader from '@/components/SubHeader';
import { notFound } from 'next/navigation';
import "../../itemsrec.css";
import { Metadata } from 'next';

// Define H1 titles for each category
const categoryTitles: Record<string, string> = {
  "quick & easy": "Quick and Easy Recipes – Simple Meals for Busy Days",
  "main course": "Main Course Recipes – Hearty and Satisfying Dishes for Every Meal",
  "dessert": "Dessert Recipes – Sweet Treats and Indulgent Delights",
  "drinks": "Drink Recipes – Refreshing Beverages for Every Occasion",
};

// Helper function to get the H1 title for a category
const getH1Title = (decodedCategory: string): string => {
  // Convert decodedCategory to lowercase to match the keys in categoryTitles
  const lowerCaseCategory = decodedCategory.toLowerCase();

  // Return the corresponding title or a fallback title
  return categoryTitles[lowerCaseCategory] || `${decodedCategory} Recipes`;
};

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const { category } = params;
  const decodedCategory = category.replace(/-/g, ' ').replace(/and/g, '&');
  
  // Find the category's related items
  const filteredItems = postItems.filter((post) =>
    post.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  return {
    title: `${decodedCategory} Recipes`,
    description: filteredItems.length > 0 
      ? `Discover easy and quick recipes for every occasion. Perfect for busy days or beginners, explore simple yet delicious meals from the ${decodedCategory} category!` 
      : "Explore a variety of recipes across different categories.",
    openGraph: {
      images: [
        {
          url: filteredItems.length > 0 ? filteredItems[0].img : "/assets/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: filteredItems.length > 0 ? filteredItems[0].brief : "Recipe category description",
        }
      ]
    }
  };
}

export const generateStaticParams = (): { category: string }[] => {
  const categories = [...new Set(postItems.map((post) => post.category))];

  const paths = categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and'),
  }));

  return paths;
};

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params;
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

  return (
    <main id="main">
      <SubHeader />
      <h1 className='main-title'>{h1Title}</h1>
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