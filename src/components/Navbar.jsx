import { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Smooth scroll function
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-[#EEEEEE] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo (Left) */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, 'home')}
              className="text-2xl font-extrabold text-[#201E43] tracking-tight transition-transform duration-300 transform hover:scale-105 hover:text-[#134B70]"
            >
              JobPortal
            </a>
          </div>

          {/* Navigation Links (Center) */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <ul className="flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'jobs', label: 'Jobs' },
                { id: 'categories', label: 'Categories' },
                { id: 'companies', label: 'Companies' },
                { id: 'about', label: 'About' },
              ].map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScroll(e, item.id)}
                    className="nav-link text-[#134B70] hover:text-[#508C9B] px-3 py-2 rounded-md text-sm font-medium transition-transform duration-300 transform hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Button (Right) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#post-job"
              onClick={(e) => handleScroll(e, 'post-job')}
              className="bg-[#201E43] text-[#EEEEEE] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#508C9B] transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              Post a Job
            </a>
            <a
              href="#signin"
              onClick={(e) => handleScroll(e, 'signin')}
              className="text-[#134B70] hover:text-[#508C9B] text-sm font-medium transition-transform duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              Sign In
            </a>
            <a
              href="#register"
              onClick={(e) => handleScroll(e, 'register')}
              className="text-[#201E43] hover:text-[#508C9B] text-sm font-medium transition-transform duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: '0.7s' }}
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-[#134B70] hover:text-[#508C9B] hover:bg-[#508C9B]/20 transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mobile-menu ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#EEEEEE]">
          <ul className="space-y-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'jobs', label: 'Jobs' },
              { id: 'categories', label: 'Categories' },
              { id: 'companies', label: 'Companies' },
              { id: 'about', label: 'About' },
            ].map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-[#134B70] hover:text-[#508C9B] hover:bg-[#508C9B]/20 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#post-job"
            onClick={(e) => handleScroll(e, 'post-job')}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#201E43] hover:text-[#508C9B] hover:bg-[#508C9B]/20 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            Post a Job
          </a>
          <a
            href="#signin"
            onClick={(e) => handleScroll(e, 'signin')}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#134B70] hover:text-[#508C9B] hover:bg-[#508C9B]/20 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            Sign In
          </a>
          <a
            href="#register"
            onClick={(e) => handleScroll(e, 'register')}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#201E43] hover:text-[#508C9B] hover:bg-[#508C9B]/20 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '0.7s' }}
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;