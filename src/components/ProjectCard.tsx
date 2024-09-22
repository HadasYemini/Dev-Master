import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface Project {
  image: string;
  title: string;
  description: Array<string>;
  siteLink?: string;
  githubLink?: string;
  video?: Array<{ src: string; title: string }>;
  technologies:Array<string>;
  done?:string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleVideoPage = () => {
    navigate('/video-page', { state: { videos: project.video } });
  };

  return (
    <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col">
      <div className="relative h-48">
        <img className="absolute inset-0 w-full h-full object-contain" src={project.image} alt={project.title} />
      </div>
      <div className="p-6 flex flex-col flex-grow">
      {project.done && <p className="text-red-600 mb-4 font-bold">{t.projects.done}</p>}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description[0]}</p>
        <p className="text-gray-700 mb-4">{project.description[1]}</p>
        <p className="text-gray-700 mb-4">{`${t.projects.technologies} : ${project.technologies.join(' ')}`}</p>
        <div className="flex justify-between mt-auto">
          {project.siteLink && (
           <Link to={project.siteLink} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline text-lg font-semibold mb-2">
           {t.projects.watchSite}          
           </Link>
          )}
          {project.githubLink && (
            <Link to={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline text-lg font-semibold mt-2">
            {t.projects.watchGitHub} 
          </Link>
          )}
          {project.video && project.video.length > 0 && (
            <button onClick={handleVideoPage} className="text-teal-500 hover:underline text-lg font-semibold mt-2">
              {t.projects.watchVideos} 
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
