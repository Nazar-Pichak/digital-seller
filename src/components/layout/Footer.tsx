
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../ui/social-media';
import AppstoreButton from '../ui/appstore-button';
import ApplePayButton from '../ui/apple-pay-button';
import GooglePlayButton from '../ui/google-play-button';
import GooglePayButton from '../ui/google-pay-button';
import PayPalButton from '../ui/paypal-button';
import VisaButton from '../ui/visa-button';
import BitcoinButton from '../ui/bitcoin-button';
import Download from '../ui/download';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        
        <div className="mt-8">
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center sm:justify-between">
            <Download/>
            <div className="btn-appstores flex items-center">
              <AppstoreButton/>
              <GooglePlayButton/>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <ApplePayButton/>
            <GooglePayButton/>
            <PayPalButton/>
            <VisaButton/>
            <BitcoinButton/>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-marketplace-text-secondary font-bold text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DigitalMarket. <span className="hidden sm:inline">All rights reserved.</span>
          </p>
          <div className="flex items-center space-x-4">
            {!isMobile && <SocialMedia />}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-marketplace-text-secondary hover:text-marketplace-blue rounded-full hover:bg-gray-100 p-2 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-marketplace-text-secondary hover:text-marketplace-blue rounded-full hover:bg-gray-100 p-2 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-marketplace-text-secondary hover:text-marketplace-blue rounded-full hover:bg-gray-100 p-2 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
