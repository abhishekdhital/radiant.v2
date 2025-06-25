import { Navigation } from "@/components/Navigation";
import { DentalHero } from "@/components/DentalHero";
import { AboutUs } from "@/components/AboutUs";
import { AppointmentForm } from "@/components/AppointmentForm";
import { ContactInfo } from "@/components/ContactInfo";


const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF9E4] to-white overflow-x-hidden">
      <Navigation />
      <div id="home">
        <DentalHero />
      </div>
      <AboutUs />
      <AppointmentForm />
      <div id="contact">
        <ContactInfo />
     
      </div>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white border-2 border-gray-200 shadow-lg mb-4">
              <img 
                src="/lovable-uploads/1139b64d-1945-4afe-aa77-a8b7de0d333c.png" 
                alt="Radiant Buddha Dental Clinic Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-light mb-2 heading-font">Radiant Buddha Dental Clinic</h3>
            <p className="text-gray-300 text-sm font-light">Your Smile, Our Priority</p>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-400 font-light mb-2">
            © 2024 Radiant Buddha Dental Clinic. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            made by{' '}
            <a 
              href="https://www.linkedin.com/company/wharrabots" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline"
            >
              cutlery pvt ltd
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
