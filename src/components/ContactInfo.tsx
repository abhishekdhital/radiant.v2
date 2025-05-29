
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ContactInfo = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-6">
            Contact Information
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Get in touch with us for quality dental care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg hover:scale-105 transform group">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+9779856027107" className="hover:text-blue-600 transition-colors">
                  9856027107
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg hover:scale-105 transform group">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@radiantbuddha.com" className="hover:text-purple-600 transition-colors">
                  info@radiantbuddha.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-green-50 border-0 shadow-lg hover:scale-105 transform group">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Address</h3>
              <p className="text-gray-600 text-sm">
                Bhagwan Pau Chowk<br />
                Swayambhu, Kathmandu
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-orange-50 border-0 shadow-lg hover:scale-105 transform group">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon-Fri: 8AM-6PM<br />
                Sat: 9AM-4PM<br />
                Sun: Closed
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Google Maps Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Find Us on Map</h3>
            <p className="text-gray-600">Click on the map to get directions</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0486799127444!2d85.27833451506217!3d27.71552963279334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198e4c5d3f5d%3A0x8f1f8f8f8f8f8f8f!2sBhagwan%20Pau%20Chowk%2C%20Swayambhu%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1699999999999!5m2!1sen!2snp"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
              
              {/* Overlay for click to open in maps */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center group cursor-pointer">
                <a 
                  href="https://maps.app.goo.gl/J3tgUCpW6H9QNirG9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 backdrop-blur-sm text-blue-600 font-semibold py-3 px-6 rounded-full border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform opacity-0 group-hover:opacity-100 flex items-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900 mb-2">Radiant Buddha Dental Clinic</h4>
                  <p className="text-gray-600 text-sm">Bhagwan Pau Chowk, Swayambhu, Kathmandu</p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/J3tgUCpW6H9QNirG9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 max-w-2xl mx-auto shadow-2xl border border-white/20 backdrop-blur-sm">
            <div className="mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Emergency Dental Care</h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Dental emergencies don't wait for business hours. We're here when you need us most.
              </p>
            </div>
            <a 
              href="tel:+9779856027107" 
              className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Emergency: 9856027107
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
