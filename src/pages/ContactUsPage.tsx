import React from "react";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";

const ContactUsPage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} />
      <div className="container mx-auto px-4 py-12 pt-32 bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 border-b-2 border-blue-500 pb-4">
          Contact Us
        </h1>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 mb-8 text-center">
            We'd love to hear from you! Please fill out the form below or reach
            out to us using the contact details provided.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Send us a message
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Details
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Address:</strong> 123 Pinas Street, Manila,
                  Philippines
                </p>
                <p>
                  <strong>Phone:</strong> +01 (977) 2599 12
                </p>
                <p>
                  <strong>Email:</strong> info@pinas.cc
                </p>
                <p>
                  <strong>Business Hours:</strong> Monday - Friday, 9:00 AM -
                  5:00 PM (PST)
                </p>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-2xl"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 text-2xl"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-700 text-2xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-blue-700 hover:text-blue-900 text-2xl"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default ContactUsPage;
