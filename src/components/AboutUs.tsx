
import { Award, Users, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF9E4] to-gray-50 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-700 to-gray-600 mb-6 drop-shadow-sm">
            About Radiant Buddha Dental Clinic
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            We provide exceptional dental care in a comfortable, 
            modern environment. Our team combines cutting-edge technology with compassionate care.
          </p>
        </div>

        {/* Enhanced Services */}
        <div className="bg-gradient-to-br from-blue-50 via-[#FAF9E4] to-indigo-50 rounded-3xl p-8 mb-16 shadow-2xl border border-white/30 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-2xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-blue-700 mb-4">Our Services</h3>
            <p className="text-gray-600 text-lg font-light">
              Comprehensive dental care for all your oral health needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              "General Dentistry",
              "Cosmetic Dentistry", 
              "Preventive Care",
              "Teeth Whitening",
              "Dental Implants",
              "Orthodontist"
            ].map((service, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="font-light text-gray-800 text-lg relative z-10">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-green-50 to-green-100 border-0 shadow-xl hover:scale-105 transform group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            <CardContent className="p-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-light text-gray-900 mb-3 text-xl">Professional Excellence</h3>
              <p className="text-gray-600 font-light">
                Extensive experience in all aspects of dental care with proven excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-blue-50 to-blue-100 border-0 shadow-xl hover:scale-105 transform group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            <CardContent className="p-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-light text-gray-900 mb-3 text-xl">1000+ Happy Patients</h3>
              <p className="text-gray-600 font-light">
                Join our family of satisfied patients who trust us with their dental health.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-purple-50 to-purple-100 border-0 shadow-xl hover:scale-105 transform group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            <CardContent className="p-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-light text-gray-900 mb-3 text-xl">Compassionate Care</h3>
              <p className="text-gray-600 font-light">
                We prioritize your comfort and well-being, ensuring a gentle experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
