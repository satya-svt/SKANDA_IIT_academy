import { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { studentName, parentName, phone, course, inquiry } = body;

    // Validate required fields
    if (!studentName || !parentName || !phone || !course) {
      return Response.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Validate phone number
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      return Response.json(
        { error: "Please enter a valid 10-digit phone number" },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { error: dbError } = await supabase.from("enquiries").insert([
      {
        student_name: studentName,
        parent_name: parentName,
        phone: phone,
        course: course,
        inquiry: inquiry || null,
      },
    ]);

    if (dbError) {
      console.error("Supabase error:", dbError);
      return Response.json(
        { error: "Failed to save enquiry. Please try again." },
        { status: 500 }
      );
    }

    // Send email notification via Resend
    try {
      await resend.emails.send({
        from: "Sri Skanda Academy <onboarding@resend.dev>",
        to: [process.env.NOTIFICATION_EMAIL!],
        subject: `New Admission Enquiry: ${studentName} — ${course}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #003318; color: #FAFAF8; padding: 32px; border-radius: 12px;">
            <div style="text-align: center; margin-bottom: 24px;">
              <h1 style="color: #E8C966; margin: 0; font-size: 24px;">🎓 New Admission Enquiry</h1>
              <p style="color: #D4A843; margin: 8px 0 0;">Sri Skanda IIT & Medical Academy</p>
            </div>
            <div style="background: rgba(197, 150, 46, 0.1); border: 1px solid rgba(197, 150, 46, 0.3); border-radius: 8px; padding: 24px; margin-bottom: 16px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #D4A843; font-weight: bold; width: 40%;">Student Name</td>
                  <td style="padding: 8px 0; color: #FAFAF8;">${studentName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #D4A843; font-weight: bold;">Parent/Guardian</td>
                  <td style="padding: 8px 0; color: #FAFAF8;">${parentName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #D4A843; font-weight: bold;">Phone</td>
                  <td style="padding: 8px 0; color: #FAFAF8;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #D4A843; font-weight: bold;">Course</td>
                  <td style="padding: 8px 0; color: #FAFAF8;">${course}</td>
                </tr>
                ${
                  inquiry
                    ? `<tr>
                    <td style="padding: 8px 0; color: #D4A843; font-weight: bold; vertical-align: top;">Inquiry</td>
                    <td style="padding: 8px 0; color: #FAFAF8;">${inquiry}</td>
                  </tr>`
                    : ""
                }
              </table>
            </div>
            <p style="text-align: center; color: #888; font-size: 12px; margin-top: 24px;">
              Received on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      // Log but don't fail the request if email fails
      console.error("Email notification failed:", emailError);
    }

    return Response.json(
      { message: "Enquiry submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
