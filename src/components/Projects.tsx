import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import livegigImage from "@/assets/projects/livegig-platform.jpg";
import exportImage from "@/assets/projects/export-system.jpg";
import cyberImage from "@/assets/projects/cybersecurity-portal.jpg";
import chatbotImage from "@/assets/projects/ai-chatbot.jpg";
import analyticsImage from "@/assets/projects/marketing-analytics.jpg";
import livestreamImage from "@/assets/projects/livestreaming-platform.jpg";

const projects: Project[] = [
  {
    id: "livegig",
    title: "LiveGig Platform",
    description: "AI-powered recruitment platform connecting talent with opportunities across Nigeria. Features intelligent candidate matching, automated screening, and real-time analytics.",
    image: livegigImage,
    category: "AI & Web Development",
    technologies: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL", "AWS"],
    metrics: [
      { label: "Active Users", value: "10K+" },
      { label: "Matches Made", value: "5K+" },
      { label: "Growth Rate", value: "400%" },
      { label: "Success Rate", value: "85%" },
    ],
    liveUrl: "https://livegig.com.ng",
    caseStudy: {
      challenge: "Traditional recruitment methods in Nigeria were time-consuming, biased, and inefficient. Companies struggled to find qualified candidates while job seekers faced limited opportunities and opaque hiring processes.",
      solution: "Built an AI-powered recruitment platform using machine learning for candidate-job matching, natural language processing for resume parsing, and automated screening workflows. Implemented real-time analytics dashboards and integrated payment systems for seamless transactions.",
      results: [
        "Reduced time-to-hire by 60% through automated screening and matching",
        "Achieved 85% match success rate between candidates and positions",
        "Grew user base to 10,000+ active users within first year",
        "Increased business revenue by 400% year-over-year",
        "Processed over 5,000 successful job placements",
      ],
    },
  },
  {
    id: "export-system",
    title: "Export Management System",
    description: "Comprehensive logistics platform for managing international commodity exports including lead ore, copper, zinc, cocoa, and ginger across West Africa.",
    image: exportImage,
    category: "Web Development",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Docker", "Google Maps API"],
    metrics: [
      { label: "Shipments", value: "500+" },
      { label: "Countries", value: "15+" },
      { label: "Time Saved", value: "70%" },
      { label: "Accuracy", value: "99%" },
    ],
    caseStudy: {
      challenge: "Managing export operations for solid minerals and agro commodities required coordination across multiple stakeholders, complex documentation, and real-time shipment tracking. Manual processes led to delays and errors.",
      solution: "Developed an end-to-end export management system with document generation, compliance tracking, real-time shipment monitoring, and automated notifications. Integrated with shipping APIs and customs systems for seamless operations.",
      results: [
        "Reduced documentation time by 70% through automation",
        "Achieved 99% accuracy in export document preparation",
        "Managed 500+ successful international shipments",
        "Expanded operations to 15+ countries across Asia and Europe",
        "Improved delivery predictability with real-time tracking",
      ],
    },
  },
  {
    id: "cybersecurity-portal",
    title: "Cybersecurity Training Portal",
    description: "Interactive learning platform for cybersecurity education featuring hands-on labs, certifications, and real-world threat simulations.",
    image: cyberImage,
    category: "Cybersecurity",
    technologies: ["React", "Python", "Django", "Docker", "Kubernetes", "AWS"],
    metrics: [
      { label: "Students", value: "2K+" },
      { label: "Courses", value: "50+" },
      { label: "Completion", value: "78%" },
      { label: "Certified", value: "1.5K+" },
    ],
    caseStudy: {
      challenge: "Organizations lacked accessible, practical cybersecurity training for their teams. Traditional methods were theoretical and didn't prepare professionals for real-world threats.",
      solution: "Created an interactive training portal with virtual labs, simulated attack scenarios, gamified learning paths, and industry-recognized certifications. Partnered with Boston University's Centre for Cybercrime Investigation.",
      results: [
        "Trained 2,000+ cybersecurity professionals",
        "78% course completion rate, above industry average of 45%",
        "1,500+ certified professionals deployed to organizations",
        "Reduced security incidents by 60% in partner organizations",
        "Recognized by Boston University as advisory board member",
      ],
    },
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot Solutions",
    description: "Intelligent conversational AI agents powered by GPT and custom models for customer service, sales automation, and business intelligence.",
    image: chatbotImage,
    category: "Generative AI",
    technologies: ["Python", "LangChain", "OpenAI", "Google AI", "FastAPI", "Redis"],
    metrics: [
      { label: "Conversations", value: "100K+" },
      { label: "Response Time", value: "< 2s" },
      { label: "Accuracy", value: "92%" },
      { label: "Cost Savings", value: "65%" },
    ],
    caseStudy: {
      challenge: "Businesses needed 24/7 customer support but couldn't afford large support teams. Existing chatbots were rigid and provided poor user experiences.",
      solution: "Developed custom AI chatbots using GPT-4 and fine-tuned models, integrated with business systems (CRM, databases, APIs), and implemented context-aware conversation management with fallback to human agents.",
      results: [
        "Handled 100,000+ customer conversations autonomously",
        "Achieved 92% accuracy in query resolution",
        "Reduced customer support costs by 65%",
        "Improved response time from hours to under 2 seconds",
        "Increased customer satisfaction scores by 40%",
      ],
    },
  },
  {
    id: "marketing-analytics",
    title: "Marketing Analytics Dashboard",
    description: "Real-time marketing performance dashboard with campaign tracking, ROI analysis, and predictive insights for data-driven decision making.",
    image: analyticsImage,
    category: "Web Development",
    technologies: ["React", "D3.js", "Python", "Pandas", "PostgreSQL", "Azure"],
    metrics: [
      { label: "Data Points", value: "1M+" },
      { label: "Campaigns", value: "200+" },
      { label: "ROI Increase", value: "45%" },
      { label: "Time Saved", value: "80%" },
    ],
    caseStudy: {
      challenge: "Marketing teams at Richwell Plaza struggled with fragmented data across multiple platforms, making it difficult to measure campaign effectiveness and optimize spending.",
      solution: "Built a unified analytics dashboard integrating data from Google Ads, Facebook, email marketing, and web analytics. Implemented real-time reporting, predictive modeling, and automated insights generation.",
      results: [
        "Unified 1M+ data points from 10+ marketing platforms",
        "Tracked 200+ campaigns with real-time performance metrics",
        "Increased marketing ROI by 45% through data-driven optimization",
        "Reduced reporting time by 80% through automation",
        "Enabled predictive campaign planning with ML models",
      ],
    },
  },
  {
    id: "livestreaming",
    title: "Livestreaming Platform",
    description: "Professional livestreaming solution with multi-platform broadcasting, real-time engagement analytics, and monetization features.",
    image: livestreamImage,
    category: "Livestreaming",
    technologies: ["WebRTC", "Node.js", "React", "FFmpeg", "Redis", "AWS MediaLive"],
    metrics: [
      { label: "Streams", value: "5K+" },
      { label: "Viewers", value: "50K+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Latency", value: "< 3s" },
    ],
    caseStudy: {
      challenge: "Content creators and businesses needed a reliable platform for professional livestreaming with multi-platform distribution, but existing solutions were expensive or unreliable.",
      solution: "Developed a scalable livestreaming platform using WebRTC for low-latency streaming, automated multi-platform broadcasting (YouTube, Facebook, Twitch), real-time analytics, and integrated monetization tools.",
      results: [
        "Hosted 5,000+ successful livestream events",
        "Served 50,000+ concurrent viewers at peak",
        "Maintained 99.9% platform uptime",
        "Achieved sub-3-second latency for interactive streams",
        "Generated $500K+ in creator revenue through monetization features",
      ],
    },
  },
];

const categories = ["All", "AI & Web Development", "Generative AI", "Web Development", "Cybersecurity", "Livestreaming"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my portfolio of AI-powered solutions, web applications, and cybersecurity initiatives
            that have driven real business impact.
          </p>
        </div>

        <Tabs defaultValue="All" className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-secondary/50 p-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setSelectedCategory(category)}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <ProjectCard project={project} onViewDetails={handleViewDetails} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};

export default Projects;
