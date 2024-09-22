// Projects.tsx
import useProjects from '../constans/useProjects'; 
import ProjectCard from '../components/ProjectCard'; 
import { useLanguage } from '../context/LanguageContext'; 

export default function Projects() {
  const projects = useProjects(); 
  const { t } = useLanguage(); // שליפת התרגום לפי השפה הנוכחית

  return (
    <div id="projects" className="py-16 bg-gray-100">
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
      {t.projects.title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
  );
};


