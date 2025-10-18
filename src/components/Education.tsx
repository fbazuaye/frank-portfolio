import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "PGD in Business Administration",
      institution: "Olabisi Onabanjo University",
      year: "2007",
      location: "Nigeria"
    },
    {
      degree: "Business Administration",
      institution: "Obafemi Awolowo University",
      year: "",
      location: "Nigeria"
    }
  ];

  const certifications = [
    {
      title: "Generative AI Certification",
      issuer: "Google",
      description: "Advanced training in Generative AI technologies and applications"
    },
    {
      title: "Generative AI Certification",
      issuer: "Microsoft",
      description: "Microsoft's comprehensive Generative AI certification program"
    },
    {
      title: "Advisory Board Member",
      issuer: "Boston University - Centre for Cybercrime Investigation & Cyber Security",
      description: "Contributing to shaping future initiatives in safeguarding digital landscapes"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                    {edu.year && (
                      <p className="text-sm text-muted-foreground mt-2">Graduated: {edu.year}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications & Recognition
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{cert.title}</CardTitle>
                        <p className="text-primary font-semibold">{cert.issuer}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
