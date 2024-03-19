import styled from "styled-components";
import htmlImg from "../imgs/html.png";
import cssImg from "../imgs/css.png";
import javascriptImg from "../imgs/javascript.png";
import reactImg from "../imgs/react.png";
import nodeImg from "../imgs/node.png";
import expressImg from "../imgs/express.png";
import mongodbImg from "../imgs/mongodb.png";

const StyledTechnologies = styled.section`
  padding: 50px 0;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333; /* Dark gray text */
  margin-bottom: 30px;
  text-align: center;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TechItem = styled.li`
  margin: 0 20px;
`;

const TechImage = styled.img`
  width: 150px;
  height: 120px;
`;

const Technologies = () => {
  return (
    <StyledTechnologies>
      <Title>Technologies</Title>
      <TechList>
        <TechItem>
          <TechImage src={htmlImg} alt="HTML" />
        </TechItem>
        <TechItem>
          <TechImage src={cssImg} alt="CSS" />
        </TechItem>
        <TechItem>
          <TechImage src={javascriptImg} alt="JavaScript" />
        </TechItem>
        <TechItem>
          <TechImage src={reactImg} alt="React" />
        </TechItem>
        <TechItem>
          <TechImage src={nodeImg} alt="Node.js" />
        </TechItem>
        <TechItem>
          <TechImage src={expressImg} alt="Express.js" />
        </TechItem>
        <TechItem>
          <TechImage src={mongodbImg} alt="MongoDB" />
        </TechItem>
      </TechList>
    </StyledTechnologies>
  );
};

export default Technologies;
