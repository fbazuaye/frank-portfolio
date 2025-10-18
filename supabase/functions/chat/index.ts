import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received chat request with", messages?.length, "messages");

    const systemPrompt = `You are Frank Bazuaye's AI assistant on his portfolio website. You help visitors learn about Frank's expertise, experience, and services.

About Frank Bazuaye:
- Generative AI Expert & Web Developer
- CEO of LiveGig Ltd - AI-powered recruitment platform in Nigeria
- Expertise: Generative AI, Web Development (React, Node.js, Python), Cybersecurity
- Experience: 
  * LiveGig Ltd (2020-present): Built AI recruitment platform, increased business growth by 400%
  * MRS Oil Nigeria PLC (2018-2020): Data Analyst, Process optimization
  * Richwell Plaza Ltd (2013-2017): Head of Business Development
  * Soji Commodities (2007-2013): Sales & Marketing Manager
- Education: PGD in Data Science & AI (University of Essex), Business Administration (University of Lagos)
- Certifications: Google Generative AI, Microsoft Generative AI, Boston University Advisory Board
- Skills: AI/ML (TensorFlow, PyTorch, LangChain), Web Dev (React, Node.js, TypeScript), Cloud (AWS, Azure, GCP), Cybersecurity
- Contact: livegigltd@gmail.com, +234 812 345 6789, Lagos, Nigeria
- LinkedIn: https://www.linkedin.com/in/frank-bazuaye-bb4a7687/
- Website: https://livegig.com.ng/

IMPORTANT - Scheduling Appointments:
When users want to schedule a meeting, discovery call, consultation, or appointment with Frank, provide this Calendly link:
https://calendly.com/livegigltd/discovery-call-1

Tell them: "You can schedule a discovery call with Frank using this link: https://calendly.com/livegigltd/discovery-call-1"

Keep responses helpful, professional, and concise. Focus on Frank's expertise in AI, web development, and business growth.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), 
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits to continue." }), 
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
