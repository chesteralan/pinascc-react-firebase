import React from "react";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";

const PrivacyPolicyPage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-12 pt-32 bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 border-b-2 border-blue-500 pb-4">
          Privacy Policy
        </h1>
        <div className="max-w-4xl mx-auto px-4">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We collect personal information that you voluntarily provide to us
              when you register on the website, express an interest in obtaining
              information about us or our products and services, when you
              participate in activities on the website, or otherwise when you
              contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use personal information collected via our website for a
              variety of business purposes described below. We use the
              information we collect or receive:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>To facilitate account creation and logon process.</li>
              <li>To send you marketing and promotional communications.</li>
              <li>To respond to your inquiries and offer support.</li>
              <li>To improve our website and your experience.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
              Disclosure of Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may share your information with third parties that perform
              services for us or on our behalf, including payment processing,
              data analysis, email delivery, hosting services, customer service,
              and marketing assistance.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
              Security of Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </p>
          </section>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default PrivacyPolicyPage;
