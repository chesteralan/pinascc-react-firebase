import React from "react";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";

const FAQPage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-12 pt-32 bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 border-b-2 border-blue-500 pb-4">
          Frequently Asked Questions (FAQ)
        </h1>
        <div className="max-w-4xl mx-auto px-4">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
              General Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  What is Pinas.cc?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pinas.cc is your comprehensive online gateway to everything
                  about the Philippines. We provide information, resources, and
                  community features for locals, Overseas Filipino Workers
                  (OFWs), and foreigners interested in the Philippines.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Who is Pinas.cc for?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our platform is designed for a diverse audience including
                  Filipinos residing in the Philippines, OFWs living abroad, and
                  foreign nationals who are interested in visiting, working, or
                  learning about the Philippines.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
              Content and Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Where do you get your information?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We gather information from official government sources,
                  reputable news organizations, cultural institutions, and
                  verified community contributions. Our goal is to provide
                  accurate and up-to-date information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Can I contribute content to Pinas.cc?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We welcome contributions from our community! If you have a
                  story, article, or information you'd like to share, please
                  visit our "Contact Us" page for submission guidelines.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
              Technical Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Is the website mobile-friendly?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, Pinas.cc is designed to be fully responsive and
                  accessible on various devices, including desktops, tablets,
                  and smartphones.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  How can I report an issue or provide feedback?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We appreciate your feedback! Please use the "Contact Us" form
                  on our website to report any issues, suggest improvements, or
                  share your experience.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default FAQPage;
