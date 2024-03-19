import { projects } from "../Data/ProjectsList";
import styled from "styled-components";
const Projects = ({ projectsRef }) => {
  return (
    <>
      <ProjectsContainer>
        <h2>Projects</h2>
        <ProjectsList ref={projectsRef}>
          {projects.map((project) => {
            return (
              <ProjectItem key={project.id}>
                <ProjectName>{project.projectName}</ProjectName>
                <ProjectImage src={project.img} alt="nyanCat" />
                <p>{project.description}</p>
              </ProjectItem>
            );
          })}
        </ProjectsList>
      </ProjectsContainer>
    </>
  );
};

const ProjectsContainer = styled.div`
  font-size: 2em;
  text-align: center;
  margin: 0 auto;
  padding: 20px;
`;

const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5em;
`;

const ProjectItem = styled.div`
  width: 300px;
  margin: 10px;
  text-align: left;
`;

const ProjectName = styled.h3`
  margin-bottom: 10px;
`;

const ProjectImage = styled.img`
  max-width: 120%;
  height: 200px;
  object-fit: cover;
`;

export default Projects;
