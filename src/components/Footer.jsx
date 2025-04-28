import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-12 mt-auto">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/subtle-grey.png')] bg-[length:100px_100px] opacity-10"
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">JobPortal</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting talent with opportunity. Explore thousands of jobs and
              build your career with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-300 hover:text-blue-300 text-sm transition-colors duration-200"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jobs"
                  className="text-gray-300 hover:text-blue-300 text-sm transition-colors duration-200"
                >
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/companies"
                  className="text-gray-300 hover:text-blue-300 text-sm transition-colors duration-200"
                >
                  Companies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-300 hover:text-blue-300 text-sm transition-colors duration-200"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 text-sm transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 text-sm transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 text-sm transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.028-3.06-1.866-3.06-1.866 0-2.152 1.458-2.152 2.963v5.701h-3v-11h2.882c.401 0 .779.159 1.059.444.601.664 1.859 2.167 1.859 4.458v6.098z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-2.596 0-4.407 1.626-4.407 4.333v2.667z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} JobPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;