
import { Calendar, Clock, Phone } from "lucide-react";

export const DentalHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white text-gray-900 pt-16">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900">
            Your Smile, Our Priority
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-3xl mx-auto">
            Experience quality dental care with a team dedicated to your comfort and health.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base mb-8">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Expert Care</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="#appointment" 
              className="bg-blue-600 text-white font-medium py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Book Appointment
            </a>
            
            <a 
              href="tel:+9779856027107" 
              className="flex items-center gap-2 bg-white text-blue-600 font-medium py-3 px-8 rounded-full border border-blue-200 hover:bg-blue-50 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              Call: 9856027107
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
