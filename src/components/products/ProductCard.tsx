
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/hooks/use-cart';
import { Star } from 'lucide-react';
import { FaCartArrowDown } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { id, name, price, image, rating, numReviews, sale } = product;
  
  const discountedPrice = sale?.active 
    ? price - (price * (sale.percentage / 100)) 
    : price;

  return (
    <Card className="product-card h-full flex flex-col">
      <div className="relative">
        {sale?.active && (
          <Badge className="absolute top-2 right-2 bg-marketplace-accent z-10">
            {sale.percentage}% OFF
          </Badge>
        )}
        <Link to={`/products/${id}`}>
          <div className="relative h-48 overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>
      </div>
      
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <Link to={`/products/${id}`} className="hover:underline">
            <h3 className="font-medium text-lg mb-1 line-clamp-1">{name}</h3>
          </Link>
          
          <div className="flex items-center mb-2 text-sm text-marketplace-text-secondary">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span>{rating}</span>
            <span className="mx-1">·</span>
            <span>{numReviews} reviews</span>
          </div>
          
          <div className="flex items-center mb-4">
            {sale?.active ? (
              <>
                <span className="font-bold text-lg">${discountedPrice.toFixed(2)}</span>
                <span className="text-marketplace-text-secondary line-through ml-2 text-sm">
                  ${price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="font-bold text-lg">${price.toFixed(2)}</span>
            )}
          </div>
        </div>
        
        <Button 
          variant="default" 
          className="w-full"
          onClick={() => addItem(product)}
        >
          <FaCartArrowDown className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
