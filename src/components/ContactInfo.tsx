
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ContactInfo = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with us for quality dental care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+9779856027107" className="hover:text-blue-600 transition-colors">
                  9856027107
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@radiantbuddha.com" className="hover:text-purple-600 transition-colors">
                  info@radiantbuddha.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                Bhagwan Pau Chowk<br />
                Swayambhu, Kathmandu
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon-Fri: 8AM-6PM<br />
                Sat: 9AM-4PM<br />
                Sun: Closed
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-blue-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Emergency Dental Care</h3>
            <p className="text-blue-100 mb-6">
              Dental emergencies don't wait for business hours. We're here when you need us most.
            </p>
            <a 
              href="tel:+9779856027107" 
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Emergency: 9856027107
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
