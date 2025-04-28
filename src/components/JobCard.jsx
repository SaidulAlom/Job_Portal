import { useState, useEffect } from 'react';

function JobCard({ title, company, location, type, logo, salary, index = 0 }) {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`bg-white rounded-xl shadow-lg transition-all duration-300 overflow-hidden border border-[#508C9B]/20 transform hover:scale-105 hover:shadow-2xl ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className="p-6">
        {/* Company Logo and Title */}
        <div className="flex items-center mb-5">
          <img
            src={logo || 'https://via.placeholder.com/40'}
            alt={`${company} logo`}
            className="h-14 w-14 rounded-full object-contain mr-4 bg-[#EEEEEE] p-1 transition-transform duration-300 transform hover:scale-110"
          />
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#201E43]">{title}</h3>
            <p className="text-sm sm:text-base text-[#134B70] font-medium">{company}</p>
          </div>
        </div>
        {/* Job Details */}
        <div className="space-y-4">
          <p className="text-sm sm:text-base text-[#134B70] flex items-center">
            <svg
              className="h-5 w-5 text-[#508C9B] mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {location}
          </p>
          <p className="text-sm sm:text-base text-[#134B70] flex items-center">
            <svg
              className="h-5 w-5 text-[#508C9B] mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {type}
          </p>
          <p className="text-sm sm:text-base text-[#134B70] flex items-center">
            <svg
              className="h-5 w-5 text-[#508C9B] mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {salary}
          </p>
        </div>
        {/* Apply Button */}
        <div className="mt-6">
          <a
            href="#"
            className="block w-full bg-[#201E43] text-[#EEEEEE] text-center py-3 rounded-md text-sm sm:text-base font-semibold hover:bg-[#508C9B] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;