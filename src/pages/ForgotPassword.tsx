import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Card } from '../components/ui/card'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ForgotPassword() {
  const [email, setEmail] = React.useState('')

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement forgot password logic here
    console.log('Forgot password for email:', email)
    if (email) {
      // Simulate sending a password reset email
      window.location.href = '/check-inbox'
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-marketplace-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="p-6 bg-white shadow-md rounded-lg">
              <h1 className="text-2xl font-bold text-center mb-4">Forgot Password</h1>
              <p className="text-center mb-4">Enter your email address to reset your password.</p>
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="border border-gray-300 rounded-md p-2 w-full" required />
                </div>
                <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Send Reset Link</Button>
              </form>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
