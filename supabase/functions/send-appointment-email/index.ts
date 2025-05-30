
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AppointmentRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  concernType: string;
  notes: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const appointmentData: AppointmentRequest = await req.json();
    console.log("Received appointment request:", appointmentData);

    // Format the concern type for better readability
    const formatConcernType = (type: string) => {
      const typeMap: { [key: string]: string } = {
        'checkup': 'Regular Checkup & Cleaning',
        'pain': 'Tooth Pain',
        'filling': 'Cavity/Filling',
        'cosmetic': 'Cosmetic Dentistry',
        'orthodontics': 'Orthodontics/Braces',
        'surgical-extractions': 'Surgical Extractions',
        'minor-oral-surgery': 'Minor Oral Surgical Procedures',
        'dental-implants': 'Dental Implants',
        'emergency': 'Emergency',
        'other': 'Other'
      };
      return typeMap[type] || type;
    };

    // Send email to clinic
    const clinicEmailResponse = await resend.emails.send({
      from: "Radiant Buddha Dental <onboarding@resend.dev>",
      to: ["dhitalabhi17@gmail.com"],
      subject: `New Appointment Request - ${appointmentData.firstName} ${appointmentData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Appointment Request
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Patient Information</h3>
            <p><strong>Name:</strong> ${appointmentData.firstName} ${appointmentData.lastName}</p>
            <p><strong>Email:</strong> ${appointmentData.email}</p>
            <p><strong>Phone:</strong> ${appointmentData.phone}</p>
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Appointment Details</h3>
            <p><strong>Preferred Date:</strong> ${appointmentData.preferredDate}</p>
            <p><strong>Preferred Time:</strong> ${appointmentData.preferredTime || 'Not specified'}</p>
            <p><strong>Type of Concern:</strong> ${formatConcernType(appointmentData.concernType)}</p>
          </div>

          ${appointmentData.notes ? `
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Additional Notes</h3>
            <p style="white-space: pre-wrap;">${appointmentData.notes}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 15px; background-color: #ecfdf5; border-radius: 8px;">
            <p style="margin: 0; color: #065f46;">
              <strong>Next Steps:</strong> Please contact the patient within 24 hours to confirm the appointment.
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to patient
    const patientEmailResponse = await resend.emails.send({
      from: "Radiant Buddha Dental <onboarding@resend.dev>",
      to: [appointmentData.email],
      subject: "Appointment Request Received - Radiant Buddha Dental",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Thank You for Your Appointment Request
          </h2>
          
          <p>Dear ${appointmentData.firstName},</p>
          
          <p>We have received your appointment request and our team will contact you within 24 hours to confirm your appointment.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Your Request Details</h3>
            <p><strong>Preferred Date:</strong> ${appointmentData.preferredDate}</p>
            <p><strong>Preferred Time:</strong> ${appointmentData.preferredTime || 'Not specified'}</p>
            <p><strong>Type of Concern:</strong> ${formatConcernType(appointmentData.concernType)}</p>
          </div>

          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">Contact Information</h3>
            <p><strong>Phone:</strong> 9846643260</p>
            <p><strong>Email:</strong> prabeshranabhat46@gmail.com</p>
            <p><strong>Address:</strong> Bhaktapur, Nepal</p>
          </div>

          <p>If you have any urgent concerns, please don't hesitate to call us directly.</p>
          
          <p>Best regards,<br>
          <strong>Radiant Buddha Dental Clinic</strong><br>
          Your Smile, Our Priority</p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { clinicEmailResponse, patientEmailResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Appointment request sent successfully" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-appointment-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
