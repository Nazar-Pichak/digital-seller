
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { categoriesData } from '@/data/categories';

const Categories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-marketplace-background py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Browse Categories</h1>
            <p className="text-marketplace-text-secondary max-w-3xl">
              Explore our wide range of digital products organized into easy-to-browse categories.
              Find exactly what you're looking for to enhance your projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesData.map((category) => (
              <Link to={`/products?category=${category.id}`} key={category.id}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="p-0">
                    <div className="h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 pb-4">
                    <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="text-sm text-marketplace-text-secondary">
                    {category.count} products
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
