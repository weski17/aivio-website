export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Terms of Service
      </h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US')}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Scope of Application
          </h2>
          <p className="text-gray-600 mb-4">
            These Terms of Service govern the use of the Aivio platform and associated 
            services. By using our services, you agree to these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Service Description
          </h2>
          <p className="text-gray-600 mb-4">
            Aivio provides analytics tools for social media platforms:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>TikTok analysis and reporting</li>
            <li>Instagram insights and metrics</li>
            <li>Facebook analytics and evaluations</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Service availability depends on the respective API policies of the platforms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. User Account and Registration
          </h2>
          <p className="text-gray-600 mb-4">
            Registration is required to use our services. You are obligated to provide 
            truthful information and keep your access credentials confidential.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Usage Rights and Obligations
          </h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            4.1 Permitted Use
          </h3>
          <p className="text-gray-600 mb-4">
            You may use our services exclusively for legal purposes and in accordance 
            with these Terms of Service.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            4.2 Prohibited Use
          </h3>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Misuse of the platform for illegal activities</li>
            <li>Violation of copyrights or other third-party rights</li>
            <li>Manipulation or circumvention of security measures</li>
            <li>Spam or unwanted communication</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. API Usage and Data Access
          </h2>
          <p className="text-gray-600 mb-4">
            Access to social media APIs is through official interfaces. 
            You are responsible for complying with the respective platform terms:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>TikTok for Business API Terms</li>
            <li>Instagram API Terms of Use</li>
            <li>Facebook Platform Policy</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Availability and Maintenance
          </h2>
          <p className="text-gray-600 mb-4">
            We strive for high availability of our services. However, maintenance work 
            and technical issues may lead to temporary limitations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. Liability
          </h2>
          <p className="text-gray-600 mb-4">
            Our liability is limited to intent and gross negligence. 
            We are not liable for indirect damages or lost profits, 
            to the extent legally permissible.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            8. Termination
          </h2>
          <p className="text-gray-600 mb-4">
            Both parties may terminate the usage relationship at any time. 
            We reserve the right to immediate termination in case of violations 
            of these Terms of Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            9. Changes to Terms of Service
          </h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these Terms of Service. 
            We will inform you of significant changes in advance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            10. Applicable Law
          </h2>
          <p className="text-gray-600 mb-4">
            These terms are governed by the laws of Germany, excluding the UN Convention 
            on Contracts for the International Sale of Goods. Jurisdiction is Germany.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            11. Contact
          </h2>
          <p className="text-gray-600 mb-4">
            For questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              Email: aivio2921@gmail.com
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
