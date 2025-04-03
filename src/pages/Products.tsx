
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/products/ProductCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { products, categories } from '@/data/products';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sorting, setSorting] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter products based on search, categories, and price
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || 
                            selectedCategories.includes(product.category);
    
    const matchesPrice = product.price >= priceRange[0] && 
                         product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
  
  // Sort products based on selection
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sorting) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default: // 'featured'
        return b.featured ? 1 : -1;
    }
  });
  
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setPriceRange([0, 100]);
    setSorting('featured');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-marketplace-background pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">All Products</h1>
            
            <Button 
              variant="outline" 
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? (
                <>
                  <X className="h-4 w-4 mr-2" />
                  Hide Filters
                </>
              ) : (
                <>
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Show Filters
                </>
              )}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filters Section - Desktop & Mobile */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold">Filters</h2>
                  <Button variant="ghost" onClick={clearFilters} className="h-8 px-2 text-sm">
                    Clear All
                  </Button>
                </div>
                
                {/* Search Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <Checkbox
                          id={`category-${category.id}`}
                          checked={selectedCategories.includes(category.name)}
                          onCheckedChange={() => toggleCategory(category.name)}
                        />
                        <label
                          htmlFor={`category-${category.id}`}
                          className="ml-2 text-sm text-marketplace-text-secondary cursor-pointer"
                        >
                          {category.name} ({category.count})
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Range Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">Price Range</h3>
                  <Slider
                    value={priceRange}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(value) => setPriceRange(value as number[])}
                    className="my-6"
                  />
                  <div className="flex justify-between text-sm text-marketplace-text-secondary">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                <div className="md:hidden mt-4">
                  <Button 
                    className="w-full"
                    onClick={() => setShowFilters(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <p className="text-marketplace-text-secondary mb-2 sm:mb-0">
                    Showing {sortedProducts.length} products
                  </p>
                  
                  <div className="w-full sm:w-48">
                    <Select value={sorting} onValueChange={setSorting}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                        <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <h2 className="text-lg font-medium mb-2">No products found</h2>
                  <p className="text-marketplace-text-secondary mb-4">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
