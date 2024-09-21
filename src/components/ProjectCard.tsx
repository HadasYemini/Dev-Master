import { useNavigate } from 'react-router-dom';

interface Project {
  image: string;
  title: string;
  description: Array<string>;
  link?: string;
  githubLink?: string;
  video?: Array<{ src: string; title: string }>;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  const handleVideoPage = () => {
    navigate('/video-page', { state: { videos: project.video } });
  };

  return (
    <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col">
      <div className="relative h-48">
        <img className="absolute inset-0 w-full h-full object-contain" src={project.image} alt={project.title} />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description[0]}</p>
        <p className="text-gray-700 mb-4">{project.description[1]}</p>
        <div className="flex justify-between mt-auto">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline text-lg font-semibold">
              צפה באתר
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline text-lg font-semibold">
              צפה בגיט (View on GitHub)
            </a>
          )}
          {project.video && project.video.length > 0 && (
            <button onClick={handleVideoPage} className="text-teal-500 hover:underline text-lg font-semibold mt-2">
              צפה בסרטונים (Watch Videos)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
