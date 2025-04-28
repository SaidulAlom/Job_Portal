import { useState, useEffect } from 'react';

function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('All Locations');
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-[#EEEEEE] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#201E43]/50"></div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#201E43] mb-6 ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <span className="bg-gradient-to-r from-[#134B70] to-[#508C9B] bg-clip-text text-transparent">
              Discover Your Dream Job
            </span>
            <br className="hidden md:block" />
            <span className="text-[#134B70]">with JobPortal</span>
          </h1>

          {/* Subheading */}
          <p
            className={`mt-6 text-lg sm:text-xl lg:text-2xl text-[#508C9B] max-w-3xl mx-auto ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Connect with top employers and explore thousands of opportunities worldwide.
          </p>

          {/* Search Bar */}
          <div
            className={`mt-12 max-w-4xl mx-auto ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-[#EEEEEE] rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="flex flex-col sm:flex-row">
                  <div className="flex-1 relative">
                    <svg
                      className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#508C9B]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Job title, keywords, or company"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 text-lg border-none focus:ring-2 focus:ring-[#508C9B] focus:outline-none bg-[#EEEEEE] text-[#201E43] transition-all duration-300 hover:bg-[#508C9B]/10"
                    />
                  </div>
                  <div className="border-t sm:border-t-0 sm:border-l border-[#508C9B]/50">
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full sm:w-auto h-full px-4 py-4 text-[#201E43] bg-[#EEEEEE] border-none focus:ring-2 focus:ring-[#508C9B] focus:outline-none text-lg transition-all duration-300 hover:bg-[#508C9B]/10"
                    >
                      <option>All Locations</option>
                      <option>Remote</option>
                      <option>United States</option>
                      <option>Europe</option>
                      <option>Asia</option>
                    </select>
                  </div>
                </div>
              </div>
              <button
                className="bg-[#201E43] hover:bg-[#508C9B] text-[#EEEEEE] px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                Search Jobs
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-16 flex flex-col items-center ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.6s' }}
          >
            <p className="text-[#508C9B] text-sm uppercase tracking-wider mb-6">
              Trusted by Leading Companies
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
              {[
                { src: 'https://logo.clearbit.com/google.com?size=80', alt: 'Google' },
                { src: 'https://logo.clearbit.com/microsoft.com?size=80', alt: 'Microsoft' },
                { src: 'https://logo.clearbit.com/amazon.com?size=80', alt: 'Amazon' },
                { src: 'https://logo.clearbit.com/apple.com?size=80', alt: 'Apple' },
                { src: 'https://logo.clearbit.com/netflix.com?size=80', alt: 'Netflix' },
              ].map((logo, index) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-8 object-contain transition-transform duration-300 transform hover:scale-110 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;