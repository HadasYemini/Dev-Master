import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'iTalam',
    description: [
      'פיתוח סביבת למידה דיגיטלית חדשה, אינטרקטיבית, מבוססת על תוכנית TALAM המצליחה, תוכנית לימודית לשפה העברית ולמורשת יהודית.',
      'הפרוייקט פותח ב- Html, JavaScript, Jquery, Css, Phaser.'
    ],  
    image: '/assets/italam.svg',
    link: '',
    video: [
      { src: '/assets/italam-classA.mp4', title : 'iTalam-ClassA' },
      { src: '/assets/italam-classB.mp4', title : 'iTalam-ClassB' },
      { src: '/assets/italam-classC.mp4', title : 'iTalam-ClassC' },
      { src: '/assets/italam-classD.mp4', title : 'iTalam-ClassD' },
    ]
  },
  {
    title: 'BizManage',
    description: [
      'מערכת לניהול לקוחות, משימות ועסקים',
      ''
    ],
    image: '/assets/biz-manage.svg',
    link: '',
    video: []
  },
  {
    title: 'Top-Accessories',
    description: [
      'חנות מקוונת',
      'פותח ב-NodeJs',
    ],
    image: '/assets/top-accessories.svg',
    link: '',
    githubLink: 'https://github.com/HadasYemini/project-nodejs.git',
    video: [
      { src: '../assets/top-accessories.mp4', title : 'חנות מקוונת' },
    ]
  },
  {
    title: 'כולל אורייתא',
    description: [
      '   פיתוח אתר לעמותה המאפשרת לאנשים מכל תחומי החיים לשלב את התורה בחיי היום-יום ולהתחבר לעומק ולרוחניות של המסורת היהודית. ',
      'האתר נמצא עדיין בפיתוח - הפרוייקט מתוכנת ב-REACT, Tailwind, NodeJs',
    ],
    image: '/assets/logo-beer-yaakov.png',
    link: 'https://religious-center.netlify.app/',
  }
];

export default function Projects() {
  return (
    <div id="projects" className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        פרוייקטים
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
