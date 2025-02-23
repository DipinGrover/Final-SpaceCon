"use client"; // ✅ Required for interactivity

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md py-4 px-6 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MSME Credit Access</h1>
        <ul className="flex space-x-6">
          <li>
            <button onClick={() => scrollToSection("features")} className="hover:text-blue-400">
              Features
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")} className="hover:text-blue-400">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("testimonials")} className="hover:text-blue-400">
              Testimonials
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")} className="hover:text-blue-400">
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
