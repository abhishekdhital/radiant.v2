
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Clinic Name */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-white border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="/lovable-uploads/1139b64d-1945-4afe-aa77-a8b7de0d333c.png" 
                alt="Radiant Buddha Dental Clinic Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                Radiant Buddha Dental Clinic
              </span>
              <span className="text-sm text-gray-500 -mt-1">Your Smile, Our Priority</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('find-us')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold relative group"
            >
              Find Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a
              href="tel:+9779856027107"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 font-semibold py-3 px-2 rounded-lg hover:bg-blue-50"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 font-semibold py-3 px-2 rounded-lg hover:bg-blue-50"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('find-us')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 font-semibold py-3 px-2 rounded-lg hover:bg-blue-50"
              >
                Find Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 font-semibold py-3 px-2 rounded-lg hover:bg-blue-50"
              >
                Contact
              </button>
              <a
                href="tel:+9779856027107"
                className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg mx-2"
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
