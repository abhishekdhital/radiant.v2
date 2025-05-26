
import { DentalHero } from "@/components/DentalHero";
import { AppointmentForm } from "@/components/AppointmentForm";
import { ContactInfo } from "@/components/ContactInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <DentalHero />
      <AppointmentForm />
      <ContactInfo />
    </div>
  );
};

export default Index;
