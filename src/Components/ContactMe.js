import styled from "styled-components";

const ContactMe = ({ contactRef }) => {
  return (
    <ContactContainer ref={contactRef}>
      <ContactHeader>Contact Me</ContactHeader>
      <ContactForm>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <TextArea id="message" name="message" rows="4" />
        </FormGroup>
        <SubmitButton type="submit" onSubmit={(e) => e.preventDefault()}>
          Send Message
        </SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  background-color: #f9f9f9;
  padding: 40px;
`;

const ContactHeader = styled.h2`
  text-align: center;
`;

const ContactForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ContactMe;
