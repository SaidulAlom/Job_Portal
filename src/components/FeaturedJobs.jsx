import { useState, useEffect } from 'react';
import JobCard from './JobCard';

function FeaturedJobs() {
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

  // Smooth scroll to top of jobs section
  const scrollToJobs = () => {
    const jobsSection = document.getElementById('jobs');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Smooth scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sample job data (replace with API data)
  const jobs = [
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'Remote',
      type: 'Full-time',
      logo: 'https://logo.clearbit.com/techcorp.com?size=40',
      salary: '$80,000 - $120,000',
    },
    {
      id: 'ux-designer',
      title: 'UX Designer',
      company: 'Design Studio',
      location: 'New York, NY',
      type: 'Contract',
      logo: 'https://logo.clearbit.com/designstudio.com?size=40',
      salary: '$50/hr - $70/hr',
    },
    {
      id: 'backend-engineer',
      title: 'Backend Engineer',
      company: 'Data Systems',
      location: 'San Francisco, CA',
      type: 'Full-time',
      logo: 'https://logo.clearbit.com/datasystems.com?size=40',
      salary: '$100,000 - $150,000',
    },
  ];

  // Placeholder total job count (replace with API data)
  const totalJobs = 1250;

  return (
    <section className="relative bg-[#EEEEEE] py-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      ></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#201E43]/50"></div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#201E43] mb-6 ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            Discover{' '}
            <span className="bg-gradient-to-r from-[#134B70] to-[#508C9B] bg-clip-text text-transparent">
              Featured Jobs
            </span>
          </h2>
          <p
            className={`mt-6 text-lg sm:text-xl lg:text-2xl text-[#508C9B] max-w-3xl mx-auto ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Explore {totalJobs} opportunities from top employers worldwide.
          </p>
        </div>
        {/* Job Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          {jobs.map((job, index) => (
            <JobCard key={job.id} {...job} index={index} />
          ))}
        </div>
        {/* Explore All Jobs Button */}
        <div
          className={`mt-12 text-center ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          <button
            onClick={scrollToJobs}
            className="inline-block bg-[#201E43] text-[#EEEEEE] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#508C9B] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            Explore All Jobs
          </button>
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
}

export default FeaturedJobs;