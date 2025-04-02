

import { FaInstagram, FaFacebook, FaTwitter, FaDownload, FaFileInvoiceDollar } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../ui/social-media';
import AppstoreButton from '../ui/appstore-button';
import ApplePayButton from '../ui/apple-pay-button';
import GooglePlayButton from '../ui/google-play-button';
import GooglePayButton from '../ui/google-pay-button';

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
                <Link to="/products" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors link-underline">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors link-underline">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors link-underline">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors link-underline">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors link-underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors link-underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors link-underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors link-underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors link-underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors link-underline">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors link-underline">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-marketplace-text-secondary hover:text-marketplace-blue transition-colors link-underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row gap-2 justify-between items-center">
          <h3 className="text-lg font-semibold text-marketplace-accent flex items-center gap-1"><FaDownload/>Download <span className="text-marketplace-blue">App</span></h3>
          <div className="flex flex-col gap-2 sm:gap-0 items-center sm:flex-row">
            <AppstoreButton/>
            <GooglePlayButton/>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-2 justify-between items-center">
            <h3 className="text-lg font-semibold text-marketplace-blue flex items-center gap-1"><FaFileInvoiceDollar/>Payments <span className="text-marketplace-accent">Methods</span></h3>
            <div className="flex flex-col gap-2 items-center sm:gap-7 sm:flex-row md:mr-4">
              <ApplePayButton/>
              <GooglePayButton/>
          </div>
        </div>
        
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <strong className="text-marketplace-text-secondary text-sm">
            © {new Date().getFullYear()} DigitalMarket. <span className="hidden sm:inline">All rights reserved.</span>
          </strong>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <SocialMedia/>
            <a href="#" className="text-marketplace-text-secondary hover:text-marketplace-blue rounded-full hover:bg-gray-100 p-2 transition-colors">
              <FaTwitter className="w-8 h-8" />
            </a>
            <a href="#" className="text-marketplace-text-secondary hover:text-marketplace-blue rounded-full hover:bg-gray-100 p-2 transition-colors">
              <FaFacebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-marketplace-text-secondary hover:text-marketplace-blue rounded-full hover:bg-gray-100 p-2 transition-colors">
              <FaInstagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
