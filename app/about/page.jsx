import React from "react";
import { Map, Compass, Calendar, Smartphone, Users, Star } from "lucide-react";
import Button from "../../components/Button";
import { GetApp } from "@/components/GetApp";

const HowSafarWorks = () => {
  // Process steps data
  const steps = [
    {
      icon: <Map size={24} />,
      title: "Discover Amazing Campsites",
      description:
        "Browse through our curated collection of beautiful camping destinations around the world.",
      color: "bg-green-500",
    },
    {
      icon: <Calendar size={24} />,
      title: "Book Your Adventure",
      description:
        "Select your dates, number of campers, and reserve your spot in just a few clicks.",
      color: "bg-orange-500",
    },
    {
      icon: <Compass size={24} />,
      title: "Get Guided Navigation",
      description:
        "Our app provides precise directions and trail maps to reach your destination safely.",
      color: "bg-blue-500",
    },
    {
      icon: <Users size={24} />,
      title: "Connect with Fellow Campers",
      description:
        "Join the community, share experiences, and make new friends on your journey.",
      color: "bg-purple-500",
    },
  ];

  const features = [
    {
      title: "Offline Maps",
      description: "Access trail maps even without cell service",
      icon: <Map className="text-green-600" size={20} />,
    },
    {
      title: "Real-time Weather",
      description: "Stay prepared with accurate forecasts",
      icon: <Calendar className="text-green-600" size={20} />,
    },
    {
      title: "Expert Guides",
      description: "Connect with local outdoor experts",
      icon: <Users className="text-green-600" size={20} />,
    },
    {
      title: "Emergency SOS",
      description: "Safety features for peace of mind",
      icon: <Smartphone className="text-green-600" size={20} />,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      text: "Safar transformed our family camping trips! The navigation is so precise and the campsite recommendations are always perfect.",
      name: "Sarah M.",
      location: "Lonavala Trip",
      rating: 5,
    },
    {
      text: "As solo hikers, we feel safer with Safar's emergency features. Plus, the offline maps have saved us more than once!",
      name: "Raj K.",
      location: "Mountain View Camp",
      rating: 5,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative py-20 px-6 md:px-10 lg:px-20">
        <div className="hero-map md:block hidden" />
        <div className="max-container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                How Safar Works
              </h1>
              <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] mb-6">
                Discover the easiest way to connect with nature. Our platform
                simplifies camping adventures with powerful features designed
                for outdoor enthusiasts.
              </p>
              <div className="flex w-full gap-3 sm:flex-row">
                <Button
                  type="button"
                  title="Download App"
                  variant="btn_green"
                />
                <Button
                  type="button"
                  title="Learn More"
                  icon="/play.svg"
                  variant="btn_white_text"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div>
                  <img
                    src="/img-2.png"
                    alt="Safar App Interface"
                    className="md:rounded-tl-full md:rounded-br-full rounded-tl-xl rounded-br-xl rounded-xl  w-full h-auto"
                  />
                </div>
                {/* Floating stats card */}
                <div className="absolute -bottom-10 -left-10 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Map size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Distance</p>
                      <p className="font-bold">25 mins</p>
                    </div>
                  </div>
                </div>
                {/* Floating location card */}
                <div className="absolute -top-10 -right-10 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Compass size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Elevation</p>
                      <p className="font-bold">624 m</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Steps */}
      <div className="py-20 px-6 md:px-10 lg:px-20 mt-0 md:mt-24">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Four Simple Steps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From discovering the perfect campsite to arriving safely at your
              destination, Safar makes the entire process seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <div
                  className={`${step.color} text-white p-4 rounded-full inline-flex items-center justify-center mb-4`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-20 px-6 md:px-10 lg:px-20">
        <div className="max-container">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className="relative">
                <div className="rounded-2xl p-4 md:p-6 overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src="/phone.png"
                      alt="Safar App Features"
                      className="rounded-xl md:w-2/3 w-full md:translate-x-28 md:rotate-[28deg] md:p-2 p-0 translate-x-0 h-auto object-cover"
                    />
                  </div>
                </div>
                {/* Green card element */}
                <div className="absolute top-[45%] right-0 bg-green-600 text-white rounded-xl p-4 hidden md:block">
                  <div className="flex items-center">
                    <Star size={20} className="mr-2" />
                    <span className="font-bold">198K</span>
                    <span className="ml-2 text-sm">Happy Campers</span>
                  </div>
                </div>
                {/* White card element */}
                <div className="absolute top-[55%] right-0 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                  <div className="flex items-center">
                    <Compass size={20} className="text-green-600 mr-2" />
                    <span className="font-bold">100+</span>
                    <span className="ml-2 text-sm">Camping Locations</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful Features for Outdoor Enthusiasts
              </h2>
              <p className="text-gray-600 mb-8">
                Our app is designed to enhance your camping experience with
                tools that help you navigate, stay safe, and connect with
                nature.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="bg-green-100 p-3 rounded-full h-min mr-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition duration-300">
                Explore All Features
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 px-6 md:px-10 lg:px-20">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Campers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of happy campers who've transformed their outdoor
              adventures with Safar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Users size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <GetApp />
    </div>
  );
};

export default HowSafarWorks;
