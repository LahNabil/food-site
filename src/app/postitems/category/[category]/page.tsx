import { PostItemOne } from '@/components/PostItemOne';
import { postItems } from '@/data/data';
import SubHeader from '@/components/SubHeader';
import { notFound } from 'next/navigation';
import "../../itemsrec.css";
import { Metadata } from 'next';


type Params = Promise<{ category: string }>;
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category } = await params; // Await the params to resolve
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
export const generateStaticParams = () => {
  const categories = [...new Set(postItems.map((post) => post.category))];

  const paths = categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and'),
  }));

  return paths;
};

const CategoryPage = async ({ params }: { params: Params }) => {
  const { category } = await params; // Await the params to resolve
  const decodedCategory = category.replace(/-/g, ' ').replace(/and/g, '&');
  
  const filteredItems = postItems.filter((post) =>
    post.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  if (filteredItems.length === 0) {
    notFound();
    return null;
  }

  return (
    <main id="main">
      <SubHeader />
      
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
