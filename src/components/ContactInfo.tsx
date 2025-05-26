
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ContactInfo = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600">
            Have questions? Get in touch with us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+1234567890" className="hover:text-blue-600 transition-colors">
                  (123) 456-7890
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@dentalcare.com" className="hover:text-blue-600 transition-colors">
                  info@dentalcare.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">
                123 Dental Street<br />
                Health City, HC 12345
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
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

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Dental Care</h3>
            <p className="text-gray-600 mb-4">
              For dental emergencies outside of regular hours, please call our emergency line:
            </p>
            <a 
              href="tel:+1234567899" 
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              (123) 456-7899
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
