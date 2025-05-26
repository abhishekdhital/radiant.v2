
import { Award, Users, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-6">
            About Radiant Buddha Dental Clinic
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience, we provide exceptional dental care in a comfortable, 
            modern environment. Our team combines cutting-edge technology with compassionate care.
          </p>
        </div>

        {/* Services */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-16 shadow-xl border border-white/20 backdrop-blur-sm">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h3>
            <p className="text-gray-600 text-lg">
              Comprehensive dental care for all your oral health needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "General Dentistry",
              "Cosmetic Dentistry", 
              "Preventive Care",
              "Teeth Whitening",
              "Dental Implants",
              "Emergency Care"
            ].map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform group">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold text-gray-800 text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-green-50 border-0 shadow-lg hover:scale-105 transform group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">15+ Years Experience</h3>
              <p className="text-gray-600">
                Extensive experience in all aspects of dental care with proven excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg hover:scale-105 transform group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">1000+ Happy Patients</h3>
              <p className="text-gray-600">
                Join our family of satisfied patients who trust us with their dental health.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg hover:scale-105 transform group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Compassionate Care</h3>
              <p className="text-gray-600">
                We prioritize your comfort and well-being, ensuring a gentle experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
