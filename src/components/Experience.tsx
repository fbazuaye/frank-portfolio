import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Development & AI Agent Development",
      company: "LiveGig Ltd",
      period: "Current",
      location: "Lagos, Nigeria",
      description: [
        "Developing and deploying advanced AI agents for business automation",
        "Creating modern web applications with cutting-edge technologies",
        "Implementing AI-powered solutions for digital transformation"
      ]
    },
    {
      title: "Terminal Supervisor / Stock Officer / Inventory Analyst / Loading Master",
      company: "MRS Oil Nigeria PLC",
      period: "Multiple Roles",
      location: "Lagos, Nigeria",
      description: [
        "Managed terminal operations and stock control",
        "Conducted inventory analysis and optimization",
        "Supervised loading operations ensuring safety and efficiency"
      ]
    },
    {
      title: "Marketing Manager",
      company: "Richwell Plaza Ltd",
      period: "2008 - 2010",
      location: "Lagos, Nigeria",
      description: [
        "Oversaw comprehensive online marketing strategy",
        "Developed strategies to drive traffic to company website",
        "Managed and executed online marketing campaigns"
      ]
    },
    {
      title: "Operations Manager",
      company: "Soji Commodities (W/A) LTD",
      period: "2004 - 2008",
      location: "Lagos, Nigeria",
      description: [
        "Developed export markets for solid minerals and agro commodities (Lead ore, Copper ore, Zinc ore, Cocoa beans, Dry split Ginger)",
        "Designed and implemented export strategies and activities",
        "Managed shipping & logistics operations and export documentation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground md:text-right">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
