
import Project from '../singleProject/singleProject.component'
import { v4 as uuidv4 } from 'uuid';
const ProjectsAfterToday = ({ projects }) => {
    const today = new Date();
    const filteredProjects = projects.filter(project => new Date(project.date) > today);
    
  

  return (
    <div className="projectsContainer" id="afterCurrent">
    {filteredProjects
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((project) => (
          <Project project={project} key={uuidv4()} />

      ))}
  </div>
  );
};

export default ProjectsAfterToday;