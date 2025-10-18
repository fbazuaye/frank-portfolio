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
- Born: August 16, 1969
- Founder | Generative AI Expert | Livestreaming | Web Developer | Cybersecurity Advocate
- Location: Plot 2045 Odusanya Oduguwa Crescent, Amuwo Odofin Festac, Lagos, Nigeria
- Contact: livegigltd@gmail.com, Phone: 08103252986
- LinkedIn: https://www.linkedin.com/in/fbazuaye
- Website: www.livegig.com.ng

Professional Summary:
Frank brings extensive expertise in driving business growth and innovation across diverse industries. His journey began in Nigeria, where he spearheaded the development of export markets for solid mineral and agro commodities, optimizing strategies and logistics for seamless operations. He later transitioned to marketing management, honing skills in online marketing and web development. As a relentless learner, Frank holds certifications in Generative AI from Google and Microsoft. He serves as an advisory board member at Boston University's Centre for Cybercrime Investigation & Cyber Security, actively contributing to shaping future initiatives in safeguarding digital landscapes.

Career Objective:
Empowerment through innovation - pioneering generative AI solutions and fortifying cyber defense mechanisms, dedicated to pushing boundaries and fostering a secure, interconnected world.

Work Experience:
- LiveGig Ltd: Web development, AI agent development and deployment
- MRS Oil Nigeria PLC: Terminal supervisor, Stock officer, Inventory analyst, Loading master
- Marketing Manager at Richwell Plaza Ltd (2008-2010): Oversaw online marketing strategy, developed strategies to drive traffic to company's website, developed and managed online marketing campaigns
- Operations Manager at Soji Commodities (W/A) LTD (2004-2008): Developed market for Export of Solid Mineral and Agro Commodities (Lead ore, Copper ore, Zinc ore, Cocoa beans, Dry split Ginger), designed and implemented all export strategies and activities, prepared export documents, scheduled efficient shipping & logistics activities

Education:
- PGD in Business Administration, Olabisi Onabanjo University (2007)
- Business Administration, Obafemi Awolowo University

Skills & Expertise:
- Generative AI Expert
- Livestreaming
- Web Development
- Cybersecurity Advocate

Certifications:
- Google Generative AI
- Microsoft Generative AI
- Advisory Board Member at Boston University's Centre for Cybercrime Investigation & Cyber Security

IMPORTANT - Scheduling Appointments:
When users want to schedule a meeting, discovery call, consultation, or appointment with Frank, provide this Calendly link:
https://calendly.com/livegigltd/discovery-call-1

Tell them: "You can schedule a discovery call with Frank using this link: https://calendly.com/livegigltd/discovery-call-1"

Keep responses helpful, professional, and concise. Focus on Frank's expertise in AI, web development, cybersecurity, and business growth.`;

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
