
import { Calendar, Clock, Phone, MapPin } from "lucide-react";

export const DentalHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-[#FAF9E4] to-indigo-50 text-gray-900 pt-16">
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extralight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 drop-shadow-sm">
            Your Smile, Our Priority
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Experience quality dental care with a team dedicated to your comfort and health.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base mb-12">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <Calendar className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-light text-gray-700">Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <Clock className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-light text-gray-700">Quick Response</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <Phone className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-light text-gray-700">Expert Care</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => scrollToSection('appointment')}
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-light py-4 px-8 rounded-full hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <span className="relative z-10">Book Appointment</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 text-white font-light py-4 px-8 rounded-full hover:from-green-700 hover:via-green-800 hover:to-emerald-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Find Us</span>
            </button>
            
            <a 
              href="tel:+9779846643260" 
              className="flex items-center gap-2 bg-white/95 backdrop-blur-sm text-blue-600 font-light py-4 px-8 rounded-full border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Call: 9846643260
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
