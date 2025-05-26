
import { Award, Users, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Radiant Buddha Dental Clinic
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience, we provide exceptional dental care in a comfortable, 
            modern environment. Our team combines cutting-edge technology with compassionate care.
          </p>
        </div>

        {/* Services */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-gray-600">
              Comprehensive dental care for all your oral health needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "General Dentistry",
              "Cosmetic Dentistry", 
              "Preventive Care",
              "Teeth Whitening",
              "Dental Implants",
              "Emergency Care"
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center border">
                <CheckCircle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="font-medium text-gray-800">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">15+ Years Experience</h3>
              <p className="text-gray-600 text-sm">
                Extensive experience in all aspects of dental care with proven excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1000+ Happy Patients</h3>
              <p className="text-gray-600 text-sm">
                Join our family of satisfied patients who trust us with their dental health.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Compassionate Care</h3>
              <p className="text-gray-600 text-sm">
                We prioritize your comfort and well-being, ensuring a gentle experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
