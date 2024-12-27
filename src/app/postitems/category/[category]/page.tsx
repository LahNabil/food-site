import { PostItemOne } from '@/components/PostItemOne';
import { postItems } from '@/data/data';
import SubHeader from '@/components/SubHeader';
import { notFound } from 'next/navigation';
import "../../itemsrec.css"


type Params = Promise<{ category: string }>;
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
