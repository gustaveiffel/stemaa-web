/// <reference types="@cloudflare/workers-types" />

interface Env {
  DB: D1Database;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;

    // Parse request body
    const body = await request.json() as ContactFormData;

    // Validate input
    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Get client info
    const ipAddress = request.headers.get("CF-Connecting-IP") || "unknown";
    const userAgent = request.headers.get("User-Agent") || "unknown";

    // Insert into D1 database
    await env.DB.prepare(
      `INSERT INTO contacts (name, email, message, ip_address, user_agent)
       VALUES (?, ?, ?, ?, ?)`
    )
      .bind(body.name, body.email, body.message, ipAddress, userAgent)
      .run();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form submitted successfully"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
