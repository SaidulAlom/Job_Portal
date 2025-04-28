import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Trigger entrance animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Placeholder recent posts data (inspired by JobAssam.in)
  const recentPosts = [
    {
      id: 1,
      title: 'SSC CGL 2024 Recruitment',
      category: 'Jobs',
      date: 'April 25, 2025',
      description: 'Apply for 17,727 posts under SSC Combined Graduate Level Exam 2024.',
      link: '/jobs',
    },
    {
      id: 2,
      title: 'Assam Police Constable Result 2025',
      category: 'Results',
      date: 'April 20, 2025',
      description: 'Check results for Assam Police Constable PET/PST and Written Test.',
      link: '/results',
    },
    {
      id: 3,
      title: 'UPSC CSE 2025 Admit Card',
      category: 'Admit Cards',
      date: 'April 18, 2025',
      description: 'Download admit cards for UPSC Civil Services Preliminary Exam 2025.',
      link: '/admit-cards',
    },
    {
      id: 4,
      title: 'PM Scholarship Scheme 2025',
      category: 'Scholarships',
      date: 'April 15, 2025',
      description: 'Apply for the Prime Minister’s Scholarship Scheme for 2025.',
      link: '/scholarships',
    },
    {
      id: 5,
      title: 'Assam Direct Recruitment Grade III & IV',
      category: 'Jobs',
      date: 'April 10, 2025',
      description: 'Results announced for 12,673 vacancies under Assam Direct Recruitment.',
      link: '/jobs',
    },
    {
      id: 6,
      title: 'MGNREGA Scheme Update',
      category: 'Schemes',
      date: 'April 5, 2025',
      description: 'Latest updates on MGNREGA employment scheme for rural workers.',
      link: '/schemes',
    },
  ];

  // Filter posts based on search term
  const filteredPosts = recentPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative bg-[#EEEEEE] py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#EEEEEE]/80 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div
          className={`text-center space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0s' }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#201E43]">
            Welcome to JobPortal
          </h1>
          <p className="text-lg sm:text-xl text-[#134B70] max-w-3xl mx-auto leading-relaxed">
            Your trusted source for the latest Assam government job alerts, admit cards, exam results, scholarships, and government schemes. Stay updated with timely career and education news![](https://jobassam.in/)
          </p>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search jobs, results, admit cards..."
              className="w-full px-4 py-3 rounded-md text-[#201E43] bg-[#EEEEEE] border border-[#134B70]/20 focus:outline-none focus:ring-2 focus:ring-[#508C9B] text-base"
              aria-label="Search job and education updates"
            />
          </div>
          <NavLink
            to="/jobs"
            className="inline-block bg-[#201E43] text-[#EEEEEE] px-6 py-3 rounded-md text-base font-semibold hover:bg-[#508C9B] transition-all duration-300 transform hover:scale-105"
            aria-label="Explore latest job opportunities"
          >
            Explore Jobs
          </NavLink>
        </div>

        {/* Recent Posts Section */}
        <div className="mt-12">
          <h2
            className={`text-3xl font-semibold text-[#201E43] mb-8 text-center ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Latest Updates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <NavLink
                  key={post.id}
                  to={post.link}
                  className={`bg-[#EEEEEE] rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    isVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  aria-label={`View details for ${post.title}`}
                >
                  <h3 className="text-xl font-semibold text-[#201E43] mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#508C9B] mb-2">
                    {post.category} • {post.date}
                  </p>
                  <p className="text-base text-[#134B70] mb-4">
                    {post.description}
                  </p>
                  <span className="inline-block text-[#508C9B] font-semibold hover:underline">
                    Read More
                  </span>
                </NavLink>
              ))
            ) : (
              <p className="text-lg text-[#134B70] text-center col-span-full">
                No updates found for "{searchTerm}".
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;