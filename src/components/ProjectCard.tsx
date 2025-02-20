import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent blur-[1px] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>
      <div className="p-6 flex flex-col space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-blue-700 font-semibold group/link"
        >
          See more
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;