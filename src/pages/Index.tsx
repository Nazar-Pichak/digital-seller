
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ProductCard from '@/components/products/ProductCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { products, categories } from '@/data/products';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredProducts = products.filter(product => product.featured);
  const onSaleProducts = products.filter(product => product.sale?.active);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-marketplace-blue to-marketplace-blue-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Discover Premium Digital Products for Creators
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Templates, graphics, fonts and tools to accelerate your next project
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" variant="outline" className="bg-white border-white text-marketplace-blue hover:bg-white/10">
                  <Link to="/products">Browse Products</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-marketplace-accent hover:bg-white/10">
                  <Link to="/categories">Explore Categories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 bg-marketplace-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Popular Categories</h2>
              <p className="text-marketplace-text-secondary max-w-2xl mx-auto">
                Discover our most popular categories and find exactly what you need for your next project
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.slice(0, 4).map((category) => (
                <Link 
                  key={category.id} 
                  to={`/categories/${category.id}`}
                  className="relative bg-white rounded-lg shadow-sm overflow-hidden group h-32 flex items-center justify-center"
                >
                  <div className="text-center p-4 z-10">
                    <h3 className="font-medium text-lg mb-1 group-hover:text-marketplace-blue transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-marketplace-text-secondary text-sm">{category.count} items</p>
                  </div>
                  <div className="absolute inset-0 bg-marketplace-blue opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/categories">View All Categories</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured Products</h2>
              <p className="text-marketplace-text-secondary max-w-2xl mx-auto">
                Handpicked digital products that stand out for their quality and usefulness
              </p>
            </div>
            
            <Tabs defaultValue="featured" className="mb-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="sale">On Sale</TabsTrigger>
                  <TabsTrigger value="new">New Arrivals</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="featured" className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {featuredProducts.slice(0, 8).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="sale" className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {onSaleProducts.slice(0, 8).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="new" className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.slice(0, 8).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-8">
              <Button variant="default" asChild>
                <Link to="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-marketplace-blue-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Newsletter</h2>
              <p className="text-marketplace-text-secondary mb-8 max-w-xl mx-auto">
                Subscribe to get notified about product launches, exclusive offers and digital marketplace tips
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-white"
                />
                <Button variant="default">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
