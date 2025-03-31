
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Product } from '@/types/product';

type CartItem = {
  product: Product;
  quantity: number;
};

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Initialize cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage', error);
      }
    }
  }, []);

  // Update localStorage when cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product) => {
    setItems((currentItems) => {
      // Check if item already exists in cart
      const existingItemIndex = currentItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += 1;
        
        toast({
          title: "Item quantity updated",
          description: `${product.name} quantity increased in your cart`,
        });
        
        return updatedItems;
      }

      // Item doesn't exist, add new item
      toast({
        title: "Item added to cart",
        description: `${product.name} has been added to your cart`,
      });
      
      return [...currentItems, { product, quantity: 1 }];
    });
  };

  const removeItem = (productId: number) => {
    setItems((currentItems) => {
      const itemToRemove = currentItems.find(
        (item) => item.product.id === productId
      );
      
      if (itemToRemove) {
        toast({
          title: "Item removed",
          description: `${itemToRemove.product.name} removed from your cart`,
        });
      }
      
      return currentItems.filter((item) => item.product.id !== productId);
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  const getSubtotal = () => {
    return items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
