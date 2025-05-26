
import { Calendar, Clock, Phone } from "lucide-react";

export const DentalHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 pt-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
            Your Smile, Our Priority
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience quality dental care with a team dedicated to your comfort and health.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base mb-12">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-700">Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-700">Quick Response</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-700">Expert Care</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="#appointment" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Book Appointment
            </a>
            
            <a 
              href="tel:+9779856027107" 
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-blue-600 font-semibold py-4 px-8 rounded-full border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <Phone className="w-5 h-5" />
              Call: 9856027107
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
