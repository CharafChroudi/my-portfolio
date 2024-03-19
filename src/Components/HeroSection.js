import styled from "styled-components";
import profilePic from "../imgs/Charaf.jpg";

const ProfilePicContainer = styled.div`
  text-align: center;
`;

const ProfilePic = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

// CSS for the Navbar of the page

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 20px 0;
  z-index: 1000;
`;

const NavList = styled.ul`
  gap: 200px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const HeroSection = ({
  aboutRef,
  projectsRef,
  contactRef,
  scrollToRef,
  scrollToTop,
}) => {
  return (
    <>
      <StyledNavbar>
        <NavList>
          <NavItem>
            <NavLink onClick={scrollToTop}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToRef(aboutRef)}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToRef(projectsRef)}>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToRef(contactRef)}>Contact</NavLink>
          </NavItem>
        </NavList>
      </StyledNavbar>
      <StyledHeroSection>
        <ProfilePicContainer>
          <ProfilePic src={profilePic} alt="Profile" />
        </ProfilePicContainer>
        <Title>Charaf Chroudi</Title>
        <Description>
          Welcome to my Portfolio ! I am Charaf, a passionate Full-Stack Web
          Developer dedicated to crafting beautiful and functional websites.
          Explore my projects below and feel free to reach out !
        </Description>
        <ContactButton onClick={() => scrollToRef(contactRef)}>
          Contact Me
        </ContactButton>
      </StyledHeroSection>
    </>
  );
};

const StyledHeroSection = styled.div`
  text-align: center;
  padding: 100px 0;
  background-color: #f0f0f0;
`;
const Title = styled.h1`
  font-size: 4rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 30px;
`;

const ContactButton = styled.button`
  padding: 15px 30px;
  font-size: 1.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
export default HeroSection;
