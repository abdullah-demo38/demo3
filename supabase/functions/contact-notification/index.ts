import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactPayload {
  name: string;
  business?: string;
  email: string;
  phone?: string;
  businessType?: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const RECEIVER_EMAIL = "ar7868039@gmail.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json() as Partial<ContactPayload>;
    const name = (body.name ?? "").toString().trim();
    const email = (body.email ?? "").toString().trim();
    const message = (body.message ?? "").toString().trim();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const business = (body.business ?? "Not provided").toString().trim();
    const phone = (body.phone ?? "Not provided").toString().trim();
    const businessType = (body.businessType ?? "Not provided").toString().trim();
    const submitted = new Date().toISOString();

    // Persist to database first so the submission is never lost.
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    const { error: insertError } = await supabase.from("contact_submissions").insert({
      name,
      business,
      email,
      phone,
      business_type: businessType,
      message,
    });

    if (insertError) {
      return new Response(
        JSON.stringify({ error: "Could not save your request.", detail: insertError.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Attempt email notification. Optional — submission is already stored.
    const fromAddress = Deno.env.get("EMAIL_FROM");
    const apiKey = Deno.env.get("EMAIL_API_KEY");

    let emailSent = false;
    if (fromAddress && apiKey) {
      const subject = `New Contact Form Submission — ${name}`;
      const html = `<!DOCTYPE html><html><body style="font-family:Inter,Arial,sans-serif;color:#0f172a;line-height:1.6">
<p>New contact received from the website.</p>
<table style="border-collapse:collapse;font-size:14px">
<tr><td style="padding:4px 12px 4px 0;font-weight:600">Name:</td><td>${escapeHtml(name)}</td></tr>
<tr><td style="padding:4px 12px 4px 0;font-weight:600">Business Name:</td><td>${escapeHtml(business)}</td></tr>
<tr><td style="padding:4px 12px 4px 0;font-weight:600">Email:</td><td>${escapeHtml(email)}</td></tr>
<tr><td style="padding:4px 12px 4px 0;font-weight:600">Phone:</td><td>${escapeHtml(phone)}</td></tr>
<tr><td style="padding:4px 12px 4px 0;font-weight:600">Business Type:</td><td>${escapeHtml(businessType)}</td></tr>
<tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top">Message:</td><td>${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>
<tr><td style="padding:4px 12px 4px 0;font-weight:600">Submitted At:</td><td>${escapeHtml(submitted)}</td></tr>
</table>
</body></html>`;

      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromAddress,
            to: RECEIVER_EMAIL,
            subject,
            html,
            reply_to: email,
          }),
        });
        emailSent = resendResponse.ok;
      } catch {
        emailSent = false;
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Thank you. Your message has been received. We'll get back to you shortly.", emailSent }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal server error", detail: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
