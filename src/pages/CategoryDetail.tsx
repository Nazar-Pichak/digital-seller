
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { categoriesData } from '@/data/categories';

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState(categoriesData.find(cat => cat.id === parseInt(id || '0')));
  const [categoryProducts, setCategoryProducts] = useState(products.filter(product => product.category === category?.name));
  
  useEffect(() => {
    // Update category when id changes
    const foundCategory = categoriesData.find(cat => cat.id === parseInt(id || '0'));
    setCategory(foundCategory);
    
    // Update filtered products when category changes
    if (foundCategory) {
      setCategoryProducts(products.filter(product => product.category === foundCategory.name));
    }
  }, [id]);

  if (!category) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-marketplace-background py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <p className="mb-6">The category you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/categories">Back to Categories</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-marketplace-background py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-marketplace-text-secondary mb-4">
              <Link to="/" className="hover:text-marketplace-blue">Home</Link>
              <span>/</span>
              <Link to="/categories" className="hover:text-marketplace-blue">Categories</Link>
              <span>/</span>
              <span className="font-medium text-marketplace-text">{category.name}</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
                <p className="text-marketplace-text-secondary max-w-3xl">
                  {category.description}
                </p>
              </div>
              
              <div className="shrink-0">
                <Button variant="outline" asChild>
                  <Link to="/categories">View All Categories</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h2 className="text-lg font-medium mb-2">No products found in this category</h2>
              <p className="text-marketplace-text-secondary mb-4">
                Check back soon as we're always adding new products!
              </p>
              <Button asChild>
                <Link to="/products">Browse All Products</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryDetail;
