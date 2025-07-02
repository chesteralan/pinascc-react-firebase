import React from "react";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";

const TermsAndConditionsPage: React.FC<{ darkMode: boolean }> = ({
  darkMode,
}) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-12 pt-32 bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 border-b-2 border-blue-500 pb-4">
          Terms & Conditions
        </h1>
        <div className="max-w-4xl mx-auto px-4">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use Pinas.cc if you do not agree to
              take all of the terms and conditions stated on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
              License
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Unless otherwise stated, Pinas.cc and/or its licensors own the
              intellectual property rights for all material on Pinas.cc. All
              intellectual property rights are reserved. You may access this
              from Pinas.cc for your own personal use subjected to restrictions
              set in these terms and conditions.
            </p>
            <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">
              You must not:
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Republish material from Pinas.cc</li>
              <li>Sell, rent or sub-license material from Pinas.cc</li>
              <li>Reproduce, duplicate or copy material from Pinas.cc</li>
              <li>Redistribute content from Pinas.cc</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
              User Comments
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This Agreement shall begin on the date hereof. Parts of this
              website offer an opportunity for users to post and exchange
              opinions and information in certain areas of the website. Pinas.cc
              does not filter, edit, publish or review Comments prior to their
              presence on the website. Comments do not reflect the views and
              opinions of Pinas.cc,its agents and/or affiliates. Comments
              reflect the views and opinions of the person who post their views
              and opinions.
            </p>
          </section>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default TermsAndConditionsPage;
