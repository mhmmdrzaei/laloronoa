import { PortableText } from "@portabletext/react";
import ProjectImages from "../projectImages/projectImages.compoent";

import Background from "../background/background.component";
const Project = ({ project }) => {
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
    <div key={project._id} className={`singleProject ${project.classname}`} id={`${project.slug}`}>
      <h1 className="projectTitle">{project.title}</h1>
      <Background>
        <div className="projectContent">
          <div className="projectText">
            <PortableText
              value={project.projectdescription}
              components={components}
            />
          </div>
          <ProjectImages images={project.projectImages} />
        </div>
      </Background>
    </div>
  );
};

export default Project;
