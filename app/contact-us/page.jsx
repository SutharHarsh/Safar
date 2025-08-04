import React from "react";
import { MapPin, Phone, Mail, Send, MessageSquare, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative py-10 px-6 md:px-10 lg:px-20 ">
        <div className="max-container mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Camp Icon */}
            <div className="mb-4">
              <img src="./camp.svg" alt="Tent Icon" className="w-12 h-12" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>

            {/* Description */}
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">
              We want to be on each of your journeys seeking the satisfaction of
              seeing the incorruptible beauty of nature. We can help you on an
              adventure around the world in just one app
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="py-10 px-6 md:px-10 lg:px-20">
        <div className="max-container">
          <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden bg-white shadow-2xl">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your email"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Tell us how we can help"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full flex items-center transition duration-300"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="w-full lg:w-1/2 bg-green-100">
              <div className="h-full">
                <img
                  src="./boat.png"
                  alt="Office Location Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-6 md:px-10 lg:px-20">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="border border-green-100 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                How do I book a campsite?
              </h3>
              <p className="text-gray-600">
                You can book a campsite directly through our mobile app. Simply
                download the app, create an account, browse available campsites,
                and follow the booking instructions.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-green-100 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, debit cards, and digital
                payment methods including PayPal, Google Pay, and Apple Pay for
                secure and convenient transactions.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-green-100 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Can I cancel my reservation?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your reservation through the app. Our
                standard cancellation policy allows for full refunds if
                cancelled 48 hours before your scheduled arrival.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="text-green-600 font-medium flex items-center justify-center hover:underline"
            >
              <MessageSquare size={18} className="mr-2" />
              View all FAQs
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-16 px-6 md:px-10 lg:px-20 mb-10">
        <div className="max-container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to receive updates on new campsites,
            seasonal promotions, and outdoor adventure tips.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-3 rounded-full sm:rounded-r-none border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 sm:w-80"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full sm:rounded-l-none transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
