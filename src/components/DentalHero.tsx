
import { Calendar, Clock, MapPin, Phone, Sparkles } from "lucide-react";

export const DentalHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-400/15 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
            <span className="text-yellow-300 font-medium tracking-wide uppercase text-sm">Premium Dental Care</span>
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent animate-fade-in">
            Your Smile, Our Priority
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Experience world-class dental care with cutting-edge technology and a team dedicated to your comfort and health.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base mb-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Calendar className="w-5 h-5 text-yellow-300" />
              <span className="font-medium">Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Clock className="w-5 h-5 text-yellow-300" />
              <span className="font-medium">Quick Response</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Phone className="w-5 h-5 text-yellow-300" />
              <span className="font-medium">Expert Care</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-1 hover:scale-105 transition-transform duration-300">
              <a 
                href="#appointment" 
                className="block bg-white text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-colors duration-300"
              >
                Book Your Appointment Now
              </a>
            </div>
            
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1 hover:scale-105 transition-transform duration-300">
              <a 
                href="tel:+9779840030867" 
                className="flex items-center gap-2 bg-white text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now: 9840030867
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      
      {/* Floating dental icons */}
      <div className="absolute top-1/4 left-10 opacity-20 animate-bounce">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <span className="text-2xl">🦷</span>
        </div>
      </div>
      <div className="absolute top-1/3 right-16 opacity-20 animate-pulse">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <span className="text-xl">✨</span>
        </div>
      </div>
    </section>
  );
};
