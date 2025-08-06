export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Privacy Policy
      </h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US')}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Data Controller
          </h2>
          <p className="text-gray-600 mb-4">
            The data controller responsible for data processing on this website is:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              Aivio<br />
              Email: aivio2921@gmail.com<br />
              Country: Germany
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Collection and Processing of Personal Data
          </h2>
          <p className="text-gray-600 mb-4">
            We process personal data only to the extent necessary to provide our 
            services or where you have given explicit consent.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            2.1 Social Media API Data
          </h3>
          <p className="text-gray-600 mb-4">
            To provide our analytics services, we process data from the following APIs:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>TikTok for Business API</li>
            <li>Instagram Basic Display API / Instagram Graph API</li>
            <li>Facebook Graph API</li>
          </ul>
          <p className="text-gray-600 mb-4">
            This data includes publicly available information such as posts, engagement metrics, 
            and anonymized audience data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Legal Basis for Processing
          </h2>
          <p className="text-gray-600 mb-4">
            The processing of your personal data is based on the following legal grounds:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Art. 6 para. 1 lit. a GDPR (Consent)</li>
            <li>Art. 6 para. 1 lit. b GDPR (Contract performance)</li>
            <li>Art. 6 para. 1 lit. f GDPR (Legitimate interests)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Data Sharing
          </h2>
          <p className="text-gray-600 mb-4">
            We only share your personal data with third parties:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>If you have given explicit consent</li>
            <li>If necessary for contract performance</li>
            <li>If there is a legal obligation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Data Retention
          </h2>
          <p className="text-gray-600 mb-4">
            We store your personal data only as long as necessary for the 
            fulfillment of purposes or as required by legal retention periods.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            You have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Right to access (Art. 15 GDPR)</li>
            <li>Right to rectification (Art. 16 GDPR)</li>
            <li>Right to erasure (Art. 17 GDPR)</li>
            <li>Right to restriction of processing (Art. 18 GDPR)</li>
            <li>Right to data portability (Art. 20 GDPR)</li>
            <li>Right to object (Art. 21 GDPR)</li>
            <li>Right to withdraw consent (Art. 7 para. 3 GDPR)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. Cookies and Tracking
          </h2>
          <p className="text-gray-600 mb-4">
            Our website uses cookies to improve user experience. 
            You can adjust your cookie settings in your browser at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            8. Contact
          </h2>
          <p className="text-gray-600 mb-4">
            For privacy-related questions, please contact us at:
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
