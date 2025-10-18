import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Code, Shield, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: "Generative AI Expert",
      description: "Certified in Generative AI from Google and Microsoft, pioneering innovative AI solutions"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack development expertise with modern technologies and best practices"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advisory board member at Boston University's Centre for Cybercrime Investigation"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Proven track record in driving business innovation and market development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-elegant">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With a dynamic background spanning both operational and managerial roles in diverse industries, 
                I bring extensive expertise in driving business growth and innovation. My journey began in Nigeria, 
                where I spearheaded the development of export markets for solid mineral and agro commodities, 
                optimizing strategies and logistics for seamless operations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Transitioning to marketing management, I honed my skills in online marketing and web development, 
                crafting and executing strategies to enhance digital presence and drive traffic for businesses.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">My mantra?</strong> Empowerment through innovation. Whether pioneering generative AI solutions 
                or fortifying cyber defense mechanisms, I'm dedicated to pushing boundaries and fostering a secure, 
                interconnected world. Let's collaborate to build, protect, and thrive in the digital age.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
