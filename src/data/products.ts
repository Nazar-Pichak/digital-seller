
import { Product } from '@/types/product';
import { categoriesData } from './categories';

export const products: Product[] = [
  {
    id: 1,
    name: "Professional Figma UI Kit",
    description: "A complete UI kit with over 1000 components for web and mobile design.",
    price: 49.99,
    category: categoriesData[0].name,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.8,
    numReviews: 245,
    featured: true,
    sale: {
      active: true,
      percentage: 20
    }
  },
  {
    id: 2,
    name: "Icon Pack - Essential",
    description: "500+ essential icons for your next project in multiple formats.",
    price: 24.99,
    category: categoriesData[1].name,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.5,
    numReviews: 128,
    featured: true
  },
  {
    id: 3,
    name: "Photography Lightroom Presets",
    description: "Professional photo editing presets for Adobe Lightroom.",
    price: 19.99,
    category: categoriesData[4].name,
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.7,
    numReviews: 87,
    featured: false
  },
  {
    id: 4,
    name: "Social Media Templates",
    description: "Instagram and Facebook post templates for engaging content.",
    price: 29.99,
    category: categoriesData[2].name,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.2,
    numReviews: 56,
    featured: true
  },
  {
    id: 5,
    name: "Font Collection - Modern Sans",
    description: "A collection of 15 modern sans-serif fonts for digital and print.",
    price: 39.99,
    category: categoriesData[3].name,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.6,
    numReviews: 92,
    featured: false
  },
  {
    id: 6,
    name: "3D Character Models",
    description: "Low-poly 3D character models ready for games and animations.",
    price: 59.99,
    category: categoriesData[5].name,
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.9,
    numReviews: 34,
    featured: true
  },
  {
    id: 7,
    name: "Resume Template",
    description: "Professional resume and cover letter templates in Word and InDesign format.",
    price: 15.99,
    category: categoriesData[2].name,
    image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.3,
    numReviews: 145,
    featured: false,
    sale: {
      active: true,
      percentage: 15
    }
  },
  {
    id: 8,
    name: "After Effects Motion Graphics",
    description: "Animated templates for video intros, titles, and transitions.",
    price: 49.99,
    category: categoriesData[6].name,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.7,
    numReviews: 62,
    featured: true
  }
];

export const categories = [
  { id: 1, name: "UI Kits", count: 24 },
  { id: 2, name: "Icons", count: 45 },
  { id: 3, name: "Templates", count: 67 },
  { id: 4, name: "Fonts", count: 32 },
  { id: 5, name: "Photography", count: 53 },
  { id: 6, name: "3D Models", count: 18 },
  { id: 7, name: "Video", count: 29 },
  { id: 8, name: "Audio", count: 12 },
];
