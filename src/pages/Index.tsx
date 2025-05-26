
import { DentalHero } from "@/components/DentalHero";
import { AppointmentForm } from "@/components/AppointmentForm";
import { ContactInfo } from "@/components/ContactInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-x-hidden">
      <DentalHero />
      <AppointmentForm />
      <ContactInfo />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2024 Dental Care Excellence. All rights reserved. | Designed with ❤️ for your smile
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
