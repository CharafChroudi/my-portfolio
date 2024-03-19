import React from "react";
import styled from "styled-components";

const StyledAboutMe = styled.section`
  padding: 50px 0;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 20px;
  text-align: center;
`;

const AboutMe = ({ aboutRef }) => {
  return (
    <StyledAboutMe>
      <Title>About Me</Title>
      <Description ref={aboutRef}>
        I am an inspiring, passionate full-stack JavaScript developer with great
        communication skills and an excellent team worker. Seeking a new
        position in the IT field where I can apply my knowledge and skills for
        continuous improvement.
      </Description>
    </StyledAboutMe>
  );
};

export default AboutMe;
