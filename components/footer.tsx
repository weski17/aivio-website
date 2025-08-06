import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-bold text-gray-900">
            Aivio
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a 
              href="mailto:aivio2921@gmail.com" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              aivio2921@gmail.com
            </a>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              Germany
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Aivio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
