
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  numReviews: number;
  featured: boolean;
  sale?: {
    active: boolean;
    percentage: number;
  };
}
