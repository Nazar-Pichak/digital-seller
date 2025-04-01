
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Menu, X, Search, User } from 'lucide-react';
import { FaCartArrowDown } from "react-icons/fa";
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/use-cart';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="sticky top-0 z-50 bg-marketplace-background shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-marketplace-blue mr-4">DigitalMarket</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-marketplace-text-primary hover:text-marketplace-blue transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-marketplace-text-primary hover:text-marketplace-blue transition-colors">
              Products
            </Link>
            <Link to="/categories" className="text-marketplace-text-primary hover:text-marketplace-blue transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-marketplace-text-primary hover:text-marketplace-blue transition-colors">
              About
            </Link>
          </nav>
          
          {/* Search Bar - Desktop Only */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-xs mx-4">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8"
              />
            </div>
          </div>
          
          {/* Cart and Login Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FaCartArrowDown className="h-6 w-6 text-marketplace-text-primary hover:text-marketplace-blue transition-colors" />
              {items.length > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-marketplace-accent text-white" variant="destructive">
                  {items.length}
                </Badge>
              )}
            </Link>
            
            {/* User Menu - Desktop */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">
                    <User className="h-5 w-5 mr-1" />
                    Account
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4">
                      <div className="space-y-2">
                        <Link to="/login" className="block w-24">
                          <Button variant="default" className="w-full justify-center">Login</Button>
                        </Link>
                        <Link to="/register" className="block w-24">
                          <Button variant="outline" className="w-full justify-center">Register</Button>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-marketplace-text-primary hover:text-marketplace-blue transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="relative w-full mb-4">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8"
              />
            </div>
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-marketplace-text-primary hover:text-marketplace-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-marketplace-text-primary hover:text-marketplace-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/categories"
                className="text-marketplace-text-primary hover:text-marketplace-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/about"
                className="text-marketplace-text-primary hover:text-marketplace-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-2 border-t border-gray-200">
                <Link to="/login" className="block mb-2">
                  <Button className="w-full justify-start" variant="default">
                    Login
                  </Button>
                </Link>
                <Link to="/register" className="block">
                  <Button className="w-full justify-start" variant="outline">
                    Register
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
