
import { Menu, X, Stethoscope } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Clinic Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Dental Care Excellence
              </span>
              <span className="text-xs text-gray-500 -mt-1">Your Smile, Our Priority</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Contact
            </button>
            <a
              href="tel:+9779840030867"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
              >
                Contact
              </button>
              <a
                href="tel:+9779840030867"
                className="block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-full text-center hover:shadow-lg transition-all duration-300 font-medium"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
