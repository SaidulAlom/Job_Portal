import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Companies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Trigger entrance animations and scroll listener on mount
  useEffect(() => {
    setIsVisible(true);

    // Show/hide Back to Top button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to company grid
  const scrollToCompanies = () => {
    const companyGrid = document.getElementById('company-grid');
    if (companyGrid) {
      companyGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sample company data
  const companies = [
    {
      id: 'google',
      name: 'Google',
      logo: 'https://logo.clearbit.com/google.com?size=80',
      description: 'Leading technology company specializing in search, cloud, and AI.',
      jobsLink: '/jobs?company=google',
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      logo: 'https://logo.clearbit.com/microsoft.com?size=80',
      description: 'Global leader in software, cloud services, and productivity tools.',
      jobsLink: '/jobs?company=microsoft',
    },
    {
      id: 'amazon',
      name: 'Amazon',
      logo: 'https://logo.clearbit.com/amazon.com?size=80',
      description: 'E-commerce and cloud computing giant with diverse opportunities.',
      jobsLink: '/jobs?company=amazon',
    },
    {
      id: 'apple',
      name: 'Apple',
      logo: 'https://logo.clearbit.com/apple.com?size=80',
      description: 'Innovator in consumer electronics, software, and services.',
      jobsLink: '/jobs?company=apple',
    },
    {
      id: 'netflix',
      name: 'Netflix',
      logo: 'https://logo.clearbit.com/netflix.com?size=80',
      description: 'Streaming service leader with a focus on entertainment and tech.',
      jobsLink: '/jobs?company=netflix',
    },
  ];

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
        {/* Headline */}
        <div className="text-center mb-12">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#201E43] mb-6 ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <span className="bg-gradient-to-r from-[#134B70] to-[#508C9B] bg-clip-text text-transparent">
              Explore Top Companies
            </span>
          </h1>
          <p
            className={`mt-6 text-lg sm:text-xl lg:text-2xl text-[#508C9B] max-w-3xl mx-auto ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Connect with leading employers and discover exciting career opportunities.
          </p>
          {/* View Companies Button */}
          <div
            className={`mt-12 max-w-4xl mx-auto ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <button
              onClick={scrollToCompanies}
              className="bg-[#201E43] hover:bg-[#508C9B] text-[#EEEEEE] px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              View Companies
            </button>
          </div>
        </div>

        {/* Company Grid */}
        <div
          id="company-grid"
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          {companies.map((company, index) => (
            <div
              key={company.id}
              id={company.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-12 w-12 object-contain mr-4 transition-transform duration-300 transform hover:scale-110"
                  />
                  <h2 className="text-xl font-semibold text-[#201E43]">
                    {company.name}
                  </h2>
                </div>
                <p className="text-[#134B70] mb-6">{company.description}</p>
                <Link
                  to={company.jobsLink}
                  className="inline-block bg-[#201E43] text-[#EEEEEE] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#508C9B] transition-all duration-300 transform hover:scale-105"
                >
                  View Jobs
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 bg-[#201E43] text-[#EEEEEE] p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-[#508C9B] ${
            showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <span className="sr-only">Back to Top</span>
        </button>
      </div>
    </section>
  );
};

export default Companies;