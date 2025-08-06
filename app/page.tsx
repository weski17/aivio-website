import { BarChart3, TrendingUp, Users, Shield } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: BarChart3,
      title: 'TikTok Analytics',
      description: 'Detailed insights into your TikTok performance with engagement metrics and trend analysis.'
    },
    {
      icon: TrendingUp,
      title: 'Instagram Insights',
      description: 'Comprehensive Instagram analytics for posts, stories and reels with reach tracking.'
    },
    {
      icon: Users,
      title: 'Facebook Metrics',
      description: 'Professional Facebook analytics for pages and posts with audience insights.'
    },
    {
      icon: Shield,
      title: 'Data Privacy',
      description: 'GDPR-compliant data processing with the highest security standards.'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Social Media Analytics
          <span className="block text-blue-600">with Aivio</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Professional analytics tools for TikTok, Instagram and Facebook. 
          Understand your audience and optimize your social media strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Try for Free
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready for Better Analytics?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Start analyzing your social media channels professionally today. 
          Free trial available.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  )
}
