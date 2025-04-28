import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-[#EEEEEE] py-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#201E43]/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#201E43] mb-6 ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <span className="bg-gradient-to-r from-[#134B70] to-[#508C9B] bg-clip-text text-transparent">
              About JobPortal
            </span>
          </h1>
          {/* Subheading */}
          <p
            className={`mt-6 text-lg sm:text-xl lg:text-2xl text-[#508C9B] max-w-3xl mx-auto ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Your trusted platform for connecting job seekers with top employers worldwide.
          </p>
          {/* Description */}
          <div
            className={`mt-8 max-w-4xl mx-auto text-[#134B70] text-base sm:text-lg leading-relaxed ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <p>
              JobPortal is dedicated to bridging the gap between talented professionals and leading companies. Our mission is to provide a seamless, user-friendly experience for finding your dream job or hiring top talent. With thousands of opportunities across various industries, we empower career growth and organizational success.
            </p>
          </div>
          {/* Learn More Button */}
          <div
            className={`mt-12 max-w-4xl mx-auto ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.6s' }}
          >
            <button
              onClick={() => window.scrollTo({ top: document.getElementById('home').offsetTop, behavior: 'smooth' })}
              className="bg-[#201E43] hover:bg-[#508C9B] text-[#EEEEEE] px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;