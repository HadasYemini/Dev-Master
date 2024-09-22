import { useLanguage } from '../context/LanguageContext'; 

interface Project {
  title: string;
  description: string[];
  image: string;
  siteLink?: string;
  githubLink?: string;
  githubLinkBack?: string;
  video: { src: string; title: string }[];
  technologies:Array<string>;
  done?:string;
}

const useProjects = (): Project[] => {
  const { t } = useLanguage(); // שליפת התרגום לפי השפה הנוכחית

  return [
    {
      title: t.projects.iTalam.title, 
      description: t.projects.iTalam.description,
      image: '/assets/italam.svg',
      video: [
        { src: '/assets/italam-classA.mp4', title: 'iTalam-ClassA' },
        { src: '/assets/italam-classB.mp4', title: 'iTalam-ClassB' },
        { src: '/assets/italam-classC.mp4', title: 'iTalam-ClassC' },
        { src: '/assets/italam-classD.mp4', title: 'iTalam-ClassD' },
      ],
      technologies: ["JavaScript", "Html", "Css", "Jquery", "Phaser"]
    },
    {
      title: t.projects.TopAccessories.title, 
      description: t.projects.TopAccessories.description,
      image: '/assets/top-accessories.svg',
      githubLink: 'https://github.com/HadasYemini/project-nodejs.git',
      video: [
        { src: '../assets/top-accessories.mp4', title: 'Top-Accessories' },
      ],
      technologies: ["Node.js", "MongoDB","Css"]
    },
    {
      title: t.projects.BizManage.title, 
      description: t.projects.BizManage.description,
      image: '/assets/biz-manage.svg',
      video: [],
      technologies: ["React", "Node.js", "MongoDB","Tailwind"],
      done:t.projects.done,
      githubLink:"https://github.com/HadasYemini/bizManage-frontend.git",
      githubLinkBack:"https://github.com/HadasYemini/bizManage-back.git"
    },
    {
      title: t.projects.KolelOritah.title, 
      description: t.projects.KolelOritah.description,
      image: '/assets/logo-beer-yaakov.png',
      siteLink: 'https://religious-center.netlify.app/',
      video: [],
      technologies: ["React", "Node.js", "MongoDB","Tailwind"],
      done:t.projects.done
    }
  ];
};

export default useProjects;
