
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DigitalMarket</h3>
            <p className="text-marketplace-text-secondary mb-4">
              The marketplace for premium digital products and resources.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-marketplace-text-secondary text-sm">
            © {new Date().getFullYear()} DigitalMarket. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
              Twitter
            </a>
            <a href="#" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
              Facebook
            </a>
            <a href="#" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
