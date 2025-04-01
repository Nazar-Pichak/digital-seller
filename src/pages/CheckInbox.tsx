import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Card } from '../components/ui/card'

export default function CheckInbox() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow bg-marketplace-background py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card className="p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Check Your Inbox</h1>
                <p className="text-center mb-4">We have sent you an email with instructions to reset your password.</p>
                <p className="text-center mb-4">Please check your inbox and follow the instructions.</p>
              </Card>
            </div>
          </div>
        </main>
        <Footer/>
    </div>
  )
}
