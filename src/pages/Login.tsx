
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login with:', { email, password });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-marketplace-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Login to your account</CardTitle>
                <CardDescription className="text-center">
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Tabs defaultValue="customer" className="mb-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="customer">Customer</TabsTrigger>
                    <TabsTrigger value="seller">Seller</TabsTrigger>
                  </TabsList>
                  <TabsContent value="customer">
                    <p className="text-sm text-marketplace-text-secondary mb-4">
                      Login as a customer to browse and purchase digital products.
                    </p>
                  </TabsContent>
                  <TabsContent value="seller">
                    <p className="text-sm text-marketplace-text-secondary mb-4">
                      Login as a seller to manage your products and view your sales.
                    </p>
                  </TabsContent>
                </Tabs>
                
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-marketplace-blue hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </form>
              </CardContent>
              
              <CardFooter className="flex justify-center">
                <p className="text-sm text-marketplace-text-secondary">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-marketplace-blue hover:underline">
                    Register
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
