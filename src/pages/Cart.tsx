
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/hooks/use-cart';
import { ShoppingCart, ArrowLeft, Trash2, Check } from 'lucide-react';

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, getSubtotal } = useCart();
  const subtotal = getSubtotal();
  const shipping = 0; // Digital products typically have no shipping
  const tax = subtotal * 0.1; // Example tax calculation (10%)
  const total = subtotal + shipping + tax;
  
  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow bg-marketplace-background py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-10 w-10 text-marketplace-text-secondary" />
                </div>
                <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
                <p className="text-marketplace-text-secondary mb-6">
                  Looks like you haven't added any products to your cart yet.
                </p>
              </div>
              
              <Button asChild>
                <Link to="/products">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
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
          <h1 className="text-2xl md:text-3xl font-bold mb-8">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {items.map((item) => {
                      const { product, quantity } = item;
                      
                      return (
                        <div key={product.id}>
                          <div className="flex flex-col sm:flex-row">
                            {/* Product Image */}
                            <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0">
                              <Link to={`/products/${product.id}`}>
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-cover rounded-md"
                                />
                              </Link>
                            </div>
                            
                            {/* Product Details */}
                            <div className="flex-grow sm:ml-4">
                              <div className="flex flex-col sm:flex-row justify-between">
                                <div>
                                  <Link to={`/products/${product.id}`} className="font-medium hover:text-marketplace-blue hover:underline">
                                    {product.name}
                                  </Link>
                                  <p className="text-sm text-marketplace-text-secondary mt-1">
                                    Category: {product.category}
                                  </p>
                                </div>
                                
                                <div className="mt-2 sm:mt-0 text-right">
                                  <span className="font-bold">${(product.price * quantity).toFixed(2)}</span>
                                </div>
                              </div>
                              
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
                                <div className="flex items-center border rounded-md">
                                  <button
                                    className="px-2 py-1 border-r"
                                    onClick={() => updateQuantity(product.id, quantity - 1)}
                                    disabled={quantity <= 1}
                                  >
                                    −
                                  </button>
                                  <span className="px-4 py-1">{quantity}</span>
                                  <button
                                    className="px-2 py-1 border-l"
                                    onClick={() => updateQuantity(product.id, quantity + 1)}
                                  >
                                    +
                                  </button>
                                </div>
                                
                                <button
                                  className="flex items-center text-red-500 hover:text-red-700 transition-colors mt-2 sm:mt-0"
                                  onClick={() => removeItem(product.id)}
                                >
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          <Separator className="mt-6" />
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="flex justify-between mt-6">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/products">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Continue Shopping
                      </Link>
                    </Button>
                    
                    <Button variant="outline" size="sm" onClick={clearCart} className="text-red-500 hover:text-red-700 border-red-200 hover:border-red-300">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Order Summary */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-marketplace-text-secondary">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-marketplace-text-secondary">Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-marketplace-text-secondary">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-marketplace-accent hover:bg-marketplace-accent/90">
                    <Check className="h-4 w-4 mr-2" />
                    Checkout
                  </Button>
                  
                  <div className="mt-4 text-sm text-marketplace-text-secondary text-center">
                    <p>Secure checkout powered by Stripe</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                <h3 className="font-medium mb-2">Accepted Payment Methods</h3>
                <p className="text-sm text-marketplace-text-secondary">
                  We accept credit cards, PayPal, and Apple Pay for secure, instant digital delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
