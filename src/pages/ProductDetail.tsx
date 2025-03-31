
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { products } from '@/data/products';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/hooks/use-cart';
import { Star, ShoppingCart, Heart, Share2, ArrowLeft } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const productId = parseInt(id || '0');
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-marketplace-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-marketplace-text-secondary mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const { name, description, price, category, image, rating, numReviews, sale } = product;
  
  const discountedPrice = sale?.active 
    ? price - (price * (sale.percentage / 100)) 
    : price;
    
  const relatedProducts = products
    .filter(p => p.category === category && p.id !== productId)
    .slice(0, 4);
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-marketplace-background">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <nav className="flex text-sm">
              <Link to="/" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                Home
              </Link>
              <span className="mx-2 text-marketplace-text-secondary">/</span>
              <Link to="/products" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                Products
              </Link>
              <span className="mx-2 text-marketplace-text-secondary">/</span>
              <Link to={`/categories/${category}`} className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                {category}
              </Link>
              <span className="mx-2 text-marketplace-text-secondary">/</span>
              <span className="text-marketplace-text-primary font-medium">{name}</span>
            </nav>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="relative">
                {sale?.active && (
                  <Badge className="absolute top-4 left-4 bg-marketplace-accent z-10">
                    {sale.percentage}% OFF
                  </Badge>
                )}
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Product Info */}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{name}</h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium ml-1">{rating}</span>
                  </div>
                  <span className="mx-2 text-marketplace-text-secondary">·</span>
                  <span className="text-marketplace-text-secondary">{numReviews} reviews</span>
                  <span className="mx-2 text-marketplace-text-secondary">·</span>
                  <Link to={`/categories/${category}`} className="text-marketplace-blue hover:underline">
                    {category}
                  </Link>
                </div>
                
                <div className="mb-6">
                  {sale?.active ? (
                    <div className="flex items-center">
                      <span className="text-3xl font-bold">${discountedPrice.toFixed(2)}</span>
                      <span className="text-marketplace-text-secondary line-through ml-2">
                        ${price.toFixed(2)}
                      </span>
                      <Badge className="ml-3 bg-marketplace-accent">
                        Save {sale.percentage}%
                      </Badge>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold">${price.toFixed(2)}</span>
                  )}
                </div>
                
                <p className="text-marketplace-text-secondary mb-6">{description}</p>
                
                <div className="flex items-center mb-6">
                  <div className="flex items-center border rounded-md">
                    <button
                      className="px-3 py-1 text-lg border-r"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      −
                    </button>
                    <span className="px-3 py-1 text-lg">{quantity}</span>
                    <button
                      className="px-3 py-1 text-lg border-l"
                      onClick={() => handleQuantityChange(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1"
                    onClick={() => {
                      for (let i = 0; i < quantity; i++) {
                        addItem(product);
                      }
                    }}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  
                  <Button size="lg" variant="outline" className="w-12 px-0">
                    <Heart className="h-5 w-5" />
                  </Button>
                  
                  <Button size="lg" variant="outline" className="w-12 px-0">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <Tabs defaultValue="description">
              <TabsList className="mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="text-marketplace-text-secondary">
                <p className="mb-4">{description}</p>
                <p className="mb-4">
                  This premium digital product is perfect for designers, marketers, and creative
                  professionals looking to enhance their projects with high-quality resources.
                </p>
                <p>
                  Our products are created by industry experts and come with full documentation
                  and support to help you make the most of your purchase.
                </p>
              </TabsContent>
              
              <TabsContent value="details">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">Product Specifications</h3>
                    <ul className="space-y-2 text-marketplace-text-secondary">
                      <li className="flex">
                        <span className="w-32 font-medium text-marketplace-text-primary">Format:</span>
                        <span>Multiple formats included</span>
                      </li>
                      <li className="flex">
                        <span className="w-32 font-medium text-marketplace-text-primary">Files:</span>
                        <span>15 files</span>
                      </li>
                      <li className="flex">
                        <span className="w-32 font-medium text-marketplace-text-primary">Size:</span>
                        <span>250 MB</span>
                      </li>
                      <li className="flex">
                        <span className="w-32 font-medium text-marketplace-text-primary">Version:</span>
                        <span>1.2</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Compatibility</h3>
                    <ul className="space-y-2 text-marketplace-text-secondary">
                      <li className="flex">
                        <span className="w-32 font-medium text-marketplace-text-primary">Software:</span>
                        <span>Adobe Photoshop, Figma</span>
                      </li>
                      <li className="flex">
                        <span className="w-32 font-medium text-marketplace-text-primary">OS:</span>
                        <span>Windows, macOS</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold mr-3">{rating}</span>
                    <div>
                      <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-marketplace-text-secondary">
                        Based on {numReviews} reviews
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="outline">Write a Review</Button>
                </div>
                
                <div className="space-y-6">
                  {/* Sample reviews */}
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <h4 className="font-medium">Great product!</h4>
                    </div>
                    <p className="text-marketplace-text-secondary mb-2">
                      This product exceeded my expectations. The quality is excellent and it saved me a lot of time.
                    </p>
                    <div className="flex items-center text-sm text-marketplace-text-secondary">
                      <span className="font-medium">John D.</span>
                      <span className="mx-2">·</span>
                      <span>2 days ago</span>
                    </div>
                  </div>
                  
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <h4 className="font-medium">Very useful</h4>
                    </div>
                    <p className="text-marketplace-text-secondary mb-2">
                      I've been using this for my client projects and it's been a great resource. Would recommend!
                    </p>
                    <div className="flex items-center text-sm text-marketplace-text-secondary">
                      <span className="font-medium">Sarah M.</span>
                      <span className="mx-2">·</span>
                      <span>1 week ago</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
