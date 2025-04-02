import { DownloadIcon } from 'lucide-react'
import React from 'react'

export default function Download() {
  return (
    <div className="sm:flex sm:items-center font-bold hidden">
        <DownloadIcon className="w-4 h-4 inline-block mr-2 text-marketplace-accent" />
        <span className="text-marketplace-blue">Download</span><span className="text-marketplace-accent">App</span>
    </div>
  )
}
