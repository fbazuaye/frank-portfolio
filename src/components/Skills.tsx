import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "AI & Machine Learning",
      skills: ["Generative AI", "AI Agent Development", "AI Deployment", "Google AI Certification", "Microsoft AI Certification"]
    },
    {
      category: "Web Development",
      skills: ["Full-Stack Development", "Web Design", "Online Marketing", "Digital Strategy", "E-commerce"]
    },
    {
      category: "Cybersecurity",
      skills: ["Cyber Defense", "Security Advocacy", "Risk Assessment", "Cybercrime Investigation", "Security Consulting"]
    },
    {
      category: "Business & Management",
      skills: ["Operations Management", "Marketing Management", "Export Strategy", "Logistics", "Business Development"]
    },
    {
      category: "Technical Skills",
      skills: ["Livestreaming", "Content Creation", "Project Management", "Data Analysis", "Strategic Planning"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
