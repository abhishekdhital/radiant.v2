
import { Award, Users, Heart, Shield, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-500" />
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">About Our Practice</span>
            <Heart className="w-6 h-6 text-red-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-6">
            About Dental Care Excellence
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience, we are dedicated to providing exceptional dental care in a comfortable, 
            modern environment. Our team combines cutting-edge technology with compassionate care to ensure every patient 
            receives the best possible treatment.
          </p>
        </div>

        {/* Mission and Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide comprehensive, high-quality dental care that promotes optimal oral health and enhances 
              the overall well-being of our patients. We strive to create a welcoming environment where every 
              patient feels comfortable and confident in their dental care.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Patient-centered care and comfort</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Excellence in clinical outcomes</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Continuous learning and innovation</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Transparency and honest communication</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              We offer a comprehensive range of dental services to meet all your oral health needs
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
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-green-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">15+ Years Experience</h3>
              <p className="text-gray-600">
                Extensive experience in all aspects of dental care with a proven track record of excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">1000+ Happy Patients</h3>
              <p className="text-gray-600">
                Join our family of satisfied patients who trust us with their dental health and beautiful smiles.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Compassionate Care</h3>
              <p className="text-gray-600">
                We prioritize your comfort and well-being, ensuring a gentle and caring experience every visit.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
