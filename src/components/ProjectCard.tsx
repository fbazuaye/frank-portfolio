import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Eye } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: {
    challenge: string;
    solution: string;
    results: string[];
    images?: string[];
  };
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2 w-full">
            {project.liveUrl && (
              <Button size="sm" variant="secondary" asChild className="flex-1">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild className="flex-1">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Code className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2">
              {project.category}
            </Badge>
            <CardTitle className="text-xl">{project.title}</CardTitle>
          </div>
        </div>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
        
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            {project.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
        
        {project.caseStudy && (
          <Button 
            onClick={() => onViewDetails(project)} 
            variant="ghost" 
            className="w-full"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Case Study
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
