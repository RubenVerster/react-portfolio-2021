import { FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import {
  SiTypescript,
  SiPhp,
  SiReact,
  SiBootstrap,
  SiSass,
  SiRedux,
} from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
const Projects = () => {
  const projects = [
    {
      name: 'TSMotorcycles',
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <SiPhp />],
      description:
        'Website created for a local business that services and sells motorbikes',
      link: 'https://rubenverster.com/projects/tsm-template/',
    },
    {
      name: '90min Technical Assessment',
      tech: [<FaHtml5 />, <FaCss3Alt />, <SiSass />],
      description:
        'A design was given and a time limit of 90 minutes to convert the design into code',
      link: 'https://github.com/RubenVerster/visio-homepage',
    },
    {
      name: 'RGB Color Game',
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      description:
        'A game created where you try and guess the matching color of an RGB generated color',
      link: 'http://rubenverster.com/projects/color/',
    },
    {
      name: 'Client Credit Manager',
      tech: [
        <FaHtml5 />,
        <FaCss3Alt />,
        <FaJs />,
        <SiReact />,
        <FaDatabase />,
        <SiBootstrap />,
      ],
      description:
        'A platform for managing the credit that clients are still due to pay',
      link: 'https://reactclientpanel-b804b.web.app/login?redirect=%2F',
    },

    {
      name: 'Currency Converter',
      tech: [
        <FaHtml5 />,
        <SiSass />,
        <SiTypescript />,
        <SiReact />,
        <SiBootstrap />,
        <AiOutlineApi />,
      ],
      description:
        'An app that converts currencies based on the exchange rate for the day',
      link: 'https://github.com/RubenVerster/currency-converter',
    },
    {
      name: 'Cookie Crumble News',
      tech: [
        <FaHtml5 />,
        <SiSass />,
        <SiTypescript />,
        <SiReact />,
        <SiBootstrap />,
        <AiOutlineApi />,
      ],
      description: 'A news app that uses an API to retrieve the latest news',
      link: 'https://github.com/RubenVerster/cookie-crumble-news-rewrite',
    },
  ];

  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <div className="project-card w-100 md:w-6/12 m-12" key={project.name}>
          <div className="project-card__side project-card__side--front">
            <div className="project-card__top">&nbsp;</div>
            <h3 className="project-card__heading">
              <span className="project-card__heading--span">
                {project.name}
              </span>
            </h3>
            <div className="project-card__details">
              <p>{project.description}</p>
            </div>
          </div>
          <div className="project-card__tech flex flex-wrap justify-center">
            {project.tech.map((style) => style)}
          </div>
          <div className="project-card__side project-card__side--back">
            <a rel="noopener noreferrer" target="_blank" href={project.link}>
              <div className="project-card__bottom">Visit Project</div>
            </a>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="projects">
      <div className="projects__content w-full">
        <h2 className="heading-primary">Projects</h2>
        <div className="info-card mx-auto">
          <p>These are just a handful of projects I have worked on</p>
          <p>
            Please visit{' '}
            <a
              className="text-blue-700"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/RubenVerster"
            >
              My GitHub
            </a>{' '}
            to see all the projects I have worked on
          </p>
        </div>
        <div className="projects__content-projects mx-auto mb-12 p-12 flex justify-evenly items-center flex-wrap">
          {renderProjects()}
        </div>
      </div>
    </section>
  );
};

export default Projects;
