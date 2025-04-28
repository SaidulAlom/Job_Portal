import { useState, useEffect } from 'react';

const Categories = () => {
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

  // Smooth scroll to jobs section
  const scrollToJobs = () => {
    const jobsSection = document.getElementById('jobs');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sample category data with job counts (replace with API data)
  const categories = [
    {
      id: 'technology',
      name: 'Technology',
      description: 'Software engineering, IT, and data science roles.',
      jobCount: 342,
    },
    {
      id: 'design',
      name: 'Design',
      description: 'UI/UX, graphic design, and creative roles.',
      jobCount: 156,
    },
    {
      id: 'marketing',
      name: 'Marketing',
      description: 'Digital marketing, SEO, and content strategy.',
      jobCount: 289,
    },
    {
      id: 'finance',
      name: 'Finance',
      description: 'Accounting, banking, and financial analysis.',
      jobCount: 198,
    },
    {
      id: 'sales',
      name: 'Sales',
      description: 'Business development and customer success roles.',
      jobCount: 234,
    },
    {
      id: 'human-resources',
      name: 'Human Resources',
      description: 'Recruitment, training, and employee relations.',
      jobCount: 112,
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
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#201E43] mb-6 ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            Explore{' '}
            <span className="bg-gradient-to-r from-[#134B70] to-[#508C9B] bg-clip-text text-transparent">
              Job Categories
            </span>
          </h2>
          <p
            className={`mt-6 text-lg sm:text-xl lg:text-2xl text-[#508C9B] max-w-3xl mx-auto ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Discover opportunities across diverse industries and roles.
          </p>
          {/* View All Categories Button */}
          <div
            className={`mt-12 max-w-4xl mx-auto ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <button
              onClick={scrollToJobs}
              className="bg-[#201E43] hover:bg-[#508C9B] text-[#EEEEEE] px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              View All Categories
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div
          id="category-grid"
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={scrollToJobs}
              className="bg-white rounded-xl shadow-lg transition-all duration-300 border border-[#508C9B]/20 transform hover:scale-105 hover:shadow-2xl text-left"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="p-6 flex items-start">
                <svg
                  className="h-10 w-10 text-[#508C9B] mr-4 transition-transform duration-300 transform hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {category.id === 'technology' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  )}
                  {category.id === 'design' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  )}
                  {category.id === 'marketing' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                  )}
                  {category.id === 'finance' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  )}
                  {category.id === 'sales' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  )}
                  {category.id === 'human-resources' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  )}
                </svg>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#201E43]">
                    {category.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#134B70] mt-1">
                    {category.description}
                  </p>
                  <p className="text-sm text-[#508C9B] mt-2 font-medium">
                    {category.jobCount} jobs
                  </p>
                </div>
              </div>
            </button>
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

export default Categories;