import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Heart, Star } from "lucide-react";
import { toast } from "sonner";

export const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    concernType: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.preferredDate) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // This is where you'll integrate with your backend/email service
      console.log("Appointment request:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Appointment request submitted! We'll contact you within 24 hours to confirm your appointment.");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        concernType: "",
        notes: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-500 animate-pulse" />
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Book With Confidence</span>
            <Heart className="w-6 h-6 text-red-500 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Book Your Appointment
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards your perfect smile. Our team is ready to provide you with exceptional care.
          </p>
          
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-600 font-medium">Trusted by 1000+ patients</span>
          </div>
        </div>

        <Card className="shadow-2xl border-0 bg-white/70 backdrop-blur-lg relative overflow-hidden">
          {/* Card gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/80 pointer-events-none"></div>
          
          <CardHeader className="text-center pb-8 relative z-10">
            <CardTitle className="text-3xl text-gray-900 mb-2">Appointment Request Form</CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Please provide your information and we'll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          
          <CardContent className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-gray-700 font-medium flex items-center gap-2">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/80 backdrop-blur-sm h-12"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/80 backdrop-blur-sm h-12"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-600" />
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 bg-white/80 backdrop-blur-sm h-12"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 bg-white/80 backdrop-blur-sm h-12"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Preferences Section */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Appointment Preferences
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="preferredDate" className="text-gray-700 font-medium">
                      Preferred Date *
                    </Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500 bg-white/80 backdrop-blur-sm h-12"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label className="text-gray-700 font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Preferred Time
                    </Label>
                    <Select onValueChange={(value) => handleSelectChange(value, 'preferredTime')}>
                      <SelectTrigger className="border-gray-300 focus:border-green-500 focus:ring-green-500 bg-white/80 backdrop-blur-sm h-12">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12:00 PM - 5:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (5:00 PM - 8:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Type of Concern */}
              <div className="space-y-3">
                <Label className="text-gray-700 font-medium text-lg">Type of Dental Concern</Label>
                <Select onValueChange={(value) => handleSelectChange(value, 'concernType')}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/80 backdrop-blur-sm h-12">
                    <SelectValue placeholder="Select the type of appointment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checkup">Regular Checkup & Cleaning</SelectItem>
                    <SelectItem value="pain">Tooth Pain</SelectItem>
                    <SelectItem value="filling">Cavity/Filling</SelectItem>
                    <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                    <SelectItem value="orthodontics">Orthodontics/Braces</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Notes */}
              <div className="space-y-3">
                <Label htmlFor="notes" className="text-gray-700 font-medium text-lg flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Additional Notes
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/80 backdrop-blur-sm"
                  placeholder="Please describe your concerns or any additional information..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 transform hover:scale-105 shadow-lg h-14 text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </div>
                  ) : (
                    "Request Appointment ✨"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
