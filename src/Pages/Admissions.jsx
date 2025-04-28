import { useEffect, useState } from 'react';

function Admissions() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Trigger entrance animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Placeholder admission data
  const admissions = [
    {
      id: 1,
      institution: 'Indian Institute of Technology (IIT)',
      program: 'B.Tech in Computer Science',
      deadline: 'May 15, 2025',
      location: 'Delhi, India',
      applyLink: '#', // Replace with real application URL
    },
    {
      id: 2,
      institution: 'National Institute of Technology (NIT)',
      program: 'M.Tech in Mechanical Engineering',
      deadline: 'June 10, 2025',
      location: 'Raipur, India',
      applyLink: '#',
    },
    {
      id: 3,
      institution: 'Indian Institute of Science (IISc)',
      program: 'Ph.D. in Physics',
      deadline: 'April 30, 2025',
      location: 'Bangalore, India',
      applyLink: '#',
    },
    {
      id: 4,
      institution: 'University of Delhi',
      program: 'BA in Economics',
      deadline: 'July 5, 2025',
      location: 'Delhi, India',
      applyLink: '#',
    },
  ];

  // Filter admissions based on search term
  const filteredAdmissions = admissions.filter(
    (admission) =>
      admission.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admission.program.toLowerCase().includes(searchTerm.toLowerCase())
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
        {/* Header and Search */}
        <div
          className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0s' }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#201E43] text-center">
            Admissions
          </h1>
          <p className="text-lg text-[#134B70] text-center max-w-3xl mx-auto leading-relaxed">
            Explore educational admissions for top institutions and programs. Find
            application forms, eligibility criteria, and important deadlines.
          </p>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search admissions (e.g., IIT, B.Tech)"
              className="w-full px-4 py-3 rounded-md text-[#201E43] bg-[#EEEEEE] border border-[#134B70]/20 focus:outline-none focus:ring-2 focus:ring-[#508C9B] text-base"
              aria-label="Search admissions"
            />
          </div>
        </div>

        {/* Admission Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAdmissions.length > 0 ? (
            filteredAdmissions.map((admission, index) => (
              <div
                key={admission.id}
                className={`bg-[#EEEEEE] rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-[#201E43] mb-2">
                  {admission.program}
                </h3>
                <p className="text-base text-[#134B70] mb-2">
                  <span className="font-medium">Institution:</span>{' '}
                  {admission.institution}
                </p>
                <p className="text-base text-[#134B70] mb-2">
                  <span className="font-medium">Location:</span>{' '}
                  {admission.location}
                </p>
                <p className="text-base text-[#134B70] mb-4">
                  <span className="font-medium">Deadline:</span>{' '}
                  {admission.deadline}
                </p>
                <a
                  href={admission.applyLink}
                  className="inline-block bg-[#201E43] text-[#EEEEEE] px-4 py-2 rounded-md text-base font-semibold hover:bg-[#508C9B] transition-all duration-300 transform hover:scale-105"
                  aria-label={`Apply for ${admission.program} at ${admission.institution}`}
                >
                  Apply Now
                </a>
              </div>
            ))
          ) : (
            <p className="text-lg text-[#134B70] text-center col-span-full">
              No admissions found for "{searchTerm}".
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Admissions;