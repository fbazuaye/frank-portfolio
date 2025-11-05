import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, CheckCircle } from "lucide-react";
import { Project } from "./ProjectCard";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectModal = ({ project, open, onOpenChange }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <Badge variant="secondary" className="mb-2">
                {project.category}
              </Badge>
              <DialogTitle className="text-3xl mb-2">{project.title}</DialogTitle>
              <DialogDescription className="text-base">
                {project.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Main Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 flex-wrap">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Live Site
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Code className="w-4 h-4 mr-2" />
                  View Source Code
                </a>
              </Button>
            )}
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-secondary/20">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Case Study */}
          {project.caseStudy && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">The Challenge</h3>
                <p className="text-muted-foreground">{project.caseStudy.challenge}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">The Solution</h3>
                <p className="text-muted-foreground">{project.caseStudy.solution}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Results & Impact</h3>
                <ul className="space-y-2">
                  {project.caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Images */}
              {project.caseStudy.images && project.caseStudy.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.caseStudy.images.map((img, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img src={img} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
