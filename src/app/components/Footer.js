const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <h2 className="text-xl font-semibold text-white">MSME Credit Access</h2>
            <p className="mt-3 text-gray-400">
              Empowering small businesses with seamless credit solutions.
            </p>
          </div>
  
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#features" className="hover:text-blue-400">Features</a></li>
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
  
          {/* Column 3 - Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="mt-3 flex space-x-4">
              <a href="#" className="hover:text-blue-400">🔵 Facebook</a>
              <a href="#" className="hover:text-blue-400">🐦 Twitter</a>
              <a href="#" className="hover:text-blue-400">📸 Instagram</a>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MSME Credit Access. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  