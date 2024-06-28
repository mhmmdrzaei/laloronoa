
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import ProjectImages from '../projectImages/projectImages.compoent'

const ProjectsBeforeToday = ({ projects }) => {
    const today = new Date();
    const filteredProjects = projects.filter(project => new Date(project.date) <= today);
    const components = {
        marks: {
          link: ({ value, children }) => {
            const { blank, href } = value;
            return blank ? (
              <a href={href} target="_blank" rel="noopener">
                {children}
              </a>
            ) : (
              <a href={href}>{children}</a>
            );
          },
        },
      };
    
  

  return (
    <div className="projectsContainer">
    {filteredProjects
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((project) => (
        <div key={project._id} className={`singleProject ${project.classname}`} id="beforeCurrent">
          <h1 className="projectTitle">{project.title}</h1>
          <div className="projectContent">
            <div className="projectText">
                <PortableText value={project.projectdescription} components={components}/>
                
            </div>
            <ProjectImages images={project.projectImages} />

          </div>
        </div>
      ))}
  </div>
  );
};

export default ProjectsBeforeToday;