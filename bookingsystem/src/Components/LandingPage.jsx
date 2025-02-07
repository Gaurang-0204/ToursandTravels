import React from "react";
import airplaneImage from "../assets/Images/airplane.png";
import { FaPlane, FaClock, FaMap, FaTags } from "react-icons/fa";

const LandingPage = () => {
  
  const benefits = [
    { icon: <FaPlane />, title: "Airport pickup", description: "We will pick you from the airport to the hotel" },
    { icon: <FaClock />, title: "Easy booking", description: "Quick and easy booking of tours for upcoming dates" },
    { icon: <FaMap />, title: "Best tour guide", description: "Our best tour guide is ready to guide your trip" },
    { icon: <FaTags />, title: "Lots of promos", description: "Various promotions and discounts on tours" }
  ];
  
  const tours = [
    { image: "nature.jpg", title: "Alone with nature", price: "$100 / person", rating: "5.0" },
    { image: "jeep.jpg", title: "Jeep ride", price: "$200 / person", rating: "5.0" },
    { image: "hiking.jpg", title: "Hiking tour", price: "$150 / person", rating: "5.0" },
    { image: "island.jpg", title: "Corners of the island", price: "$220 / person", rating: "5.0" }
  ];


  const features = [
    {
      title: "Easy Online Booking",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "📱",
      bgColor: "bg-green-200"
    },
    {
      title: "Professional Services",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "🚖",
      bgColor: "bg-gray-900 text-white"
    },
    {
      title: "Variety of options",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "🚗",
      bgColor: "bg-green-200"
    },
    {
      title: "Online Payment",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "💳",
      bgColor: "bg-gray-900 text-white"
    }
  ];
  
  return (



<div className="min-h-screen bg-white text-gray-800">
<div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
  {/* Left Section - Text */}
  <div className="flex flex-col justify-center items-center md:items-start p-10 text-center md:text-left">
    <section>
      <h1 className="text-6xl font-bold mb-1">Plan Your Perfect Trip</h1>
      <h2 className="text-6xl text-indigo-600 font-bold mb-3">
        Find the Best Deals & Book with Ease
      </h2>
      <p className="mt-0 mb-6 text-gray-600 leading-relaxed">
        Discover top destinations, exclusive offers, and seamless booking experiences. Whether it's a weekend getaway or a dream vacation, we've got you covered.
      </p>
      <div className="flex space-x-4">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition">
          Explore Now
        </button>
        <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition">
          Start Booking
        </button>
      </div>
    </section>
  </div>

  {/* Right Section - Image */}
  <div className="relative">
    <img 
      src={airplaneImage} 
      alt="hero" 
      className="w-full h-full object-cover"
      style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}
    />
  </div>
</div>

<div className="text-center p-10">
  <h2 className="text-3xl font-bold mb-4">Plan Your Own Trip </h2>
  <p className="text-gray-600 mb-8">Try a variety of benefits when using our services</p>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
    {benefits.map((benefit, index) => (
      <div key={index} className="flex flex-col items-center space-y-2">
        <div className="text-4xl">{benefit.icon}</div>
        <h3 className="font-semibold text-lg">{benefit.title}</h3>
        <p className="text-gray-500 text-sm max-w-xs">{benefit.description}</p>
      </div>
    ))}
  </div>
</div>

<div className="text-center p-10">
  <h2 className="text-3xl font-bold mb-4">Choose your tour Package </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {tours.map((tour, index) => (
      <div key={index} className="overflow-hidden rounded-lg shadow-lg bg-white w-full max-w-xs mx-auto">
        <img src={tour.image} alt={tour.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{tour.title}</h3>
          <p className="text-gray-600">{tour.price}</p>
          <span className="text-yellow-500">⭐ {tour.rating}</span>
        </div>
      </div>
    ))}
  </div>
  <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg">See all</button>
</div>

<section className="text-center py-16 px-6 bg-white text-gray-800">
      <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        At LMOS we pride ourselves in delivering extensive services to fulfill all of your needs with first-rate customer care.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-6 rounded-lg shadow-lg">
            <div className={`w-20 h-20 flex items-center justify-center text-3xl rounded-lg ${feature.bgColor}`}>
              {feature.icon}
            </div>
            <h3 className="font-semibold text-lg mt-4">{feature.title}</h3>
            <p className="text-gray-600 text-sm mt-2 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
</div>
  );
};

export default LandingPage;
