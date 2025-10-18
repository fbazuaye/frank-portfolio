import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "livegigltd@gmail.com",
      link: "mailto:livegigltd@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "08103252986",
      link: "tel:08103252986"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Plot 2045 Odusanya Oduguwa Crescent, Amuwo Odofin Festac, Lagos",
      link: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "fbazuaye",
      link: "https://www.linkedin.com/in/fbazuaye"
    },
    {
      icon: ExternalLink,
      label: "Website",
      value: "www.livegig.com.ng",
      link: "https://www.livegig.com.ng"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate to build, protect, and thrive in the digital age. 
            I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-elegant">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.link ? (
                        <a 
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground hover:text-primary transition-colors duration-200 break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground break-words">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t text-center">
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <a href="mailto:livegigltd@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send me an email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
