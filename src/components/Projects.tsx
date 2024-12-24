import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce solution built with React and Node.js",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Streamline your workflow with this intuitive task manager",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A showcase of creative work and professional achievements",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      link: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics and management tools for social media",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-emerald-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;