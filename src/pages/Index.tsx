
import { Navigation } from "@/components/Navigation";
import { DentalHero } from "@/components/DentalHero";
import { AboutUs } from "@/components/AboutUs";
import { AppointmentForm } from "@/components/AppointmentForm";
import { ContactInfo } from "@/components/ContactInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2024 Radiant Buddha Dental Clinic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
