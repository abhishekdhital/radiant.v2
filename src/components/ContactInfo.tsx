
import { Phone, Mail, MapPin, Clock, Shield, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ContactInfo = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-green-600" />
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Get In Touch</span>
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Contact Information
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your smile? Reach out to our friendly team and let's get started on your dental journey.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-700 mb-1">1000+</div>
            <div className="text-gray-600">Happy Patients</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border border-green-200">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-700 mb-1">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 border border-purple-200">
            <Shield className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-700 mb-1">100%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+9779840030867" className="hover:text-blue-600 transition-colors font-medium text-lg">
                  9840030867
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@dentalcare.com" className="hover:text-purple-600 transition-colors font-medium">
                  info@dentalcare.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-green-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Address</h3>
              <p className="text-gray-600 font-medium">
                Bhutkhel, Tokha<br />
                Kathmandu, Nepal
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-orange-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Hours</h3>
              <p className="text-gray-600 text-sm font-medium">
                Mon-Fri: 8AM-6PM<br />
                Sat: 9AM-4PM<br />
                Sun: Closed
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Emergency Dental Care</h3>
              <p className="text-white/90 mb-6 text-lg">
                Dental emergencies don't wait for business hours. We're here when you need us most.
              </p>
              <a 
                href="tel:+9779840030867" 
                className="inline-block bg-white text-purple-700 font-bold py-4 px-8 rounded-full text-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg transform hover:scale-105"
              >
                Emergency: 9840030867
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
