
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-marketplace-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About DigitalMarket</h1>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-10">
              <div className="h-64 bg-gradient-to-r from-marketplace-blue to-marketplace-blue-dark flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white">Your{" "}<i className="text-marketplace-accent">Digital</i>{" "}Marketplace</h2>
              </div>
              
              <div className="p-8">
                <p className="text-lg mb-6">
                  DigitalMarket is a premier online marketplace for digital products, connecting creators with customers worldwide.
                  Our platform makes it easy to buy and sell digital goods in a secure, user-friendly environment.
                </p>
                
                <p className="mb-6">
                  Founded in 2023, we've quickly grown to become a trusted platform for digital creators and consumers alike.
                  Our mission is to empower creators by providing them with the tools they need to share their digital products
                  with the world, while offering buyers a seamless shopping experience.
                </p>
                
                <Separator className="my-8" />
                
                <h3 className="text-xl font-bold mb-4">What We Offer</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-2">For Buyers</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Secure transactions</li>
                        <li>Instant digital downloads</li>
                        <li>Quality verified products</li>
                        <li>24/7 customer support</li>
                        <li>Satisfaction guarantee</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold mb-2">For Sellers</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Easy product uploads</li>
                        <li>Global customer reach</li>
                        <li>Competitive commission rates</li>
                        <li>Detailed analytics</li>
                        <li>Fast payouts</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <Separator className="my-8" />
                
                <h3 className="text-xl font-bold mb-4">Our Team</h3>
                <p className="mb-6">
                  Our diverse team of professionals is dedicated to creating the best possible platform for our users.
                  With backgrounds in e-commerce, design, development, and customer service, we bring a wide range of
                  expertise to make DigitalMarket the leading marketplace for digital products.
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

export default About;
