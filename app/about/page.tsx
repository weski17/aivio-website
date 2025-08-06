import { Target, Users, Award } from 'lucide-react'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About Aivio
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are your partner for professional social media analytics and help you 
          unlock the full potential of your digital presence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To support businesses and content creators in making data-driven decisions 
            for their social media strategy.
          </p>
        </div>

        <div className="text-center">
          <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Our Team
          </h3>
          <p className="text-gray-600">
            Experienced experts from data analytics, social media marketing 
            and software development.
          </p>
        </div>

        <div className="text-center">
          <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Our Values
          </h3>
          <p className="text-gray-600">
            Transparency, data privacy and innovation are at the center of our 
            work and product development.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Why Aivio?
        </h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <p className="text-gray-600">
              <strong>GDPR Compliant:</strong> All data processing follows European and international data protection standards.
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <p className="text-gray-600">
              <strong>User-Friendly:</strong> Intuitive interface for fast and efficient analytics.
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <p className="text-gray-600">
              <strong>Comprehensive:</strong> All major social media platforms unified in one tool.
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <p className="text-gray-600">
              <strong>Support:</strong> Professional customer support and personal consultation.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Have Questions?
        </h2>
        <p className="text-gray-600 mb-6">
          Feel free to contact us for more information or personal consultation.
        </p>
        <a 
          href="mailto:aivio2921@gmail.com"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          Get in Touch
        </a>
      </div>
    </div>
  )
}
