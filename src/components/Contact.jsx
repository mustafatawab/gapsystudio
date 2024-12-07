import React, { useState } from 'react';
import styled from 'styled-components';
import { ImAttachment } from "react-icons/im";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    budget: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <>
      <Container>
        <Header>Contacts</Header>
        <Description className='font-pp-formula-condensed font-thin text-gray-600'>
          So you would like to work with one of the best teams in the world? What kind of project would you like us to craft for you?
        </Description>
        <ButtonGroup>
          <button className='animate-btn'>UI/UX Design</button>

          <button className="animate-btn">Brand Identity</button>
          <button className="animate-btn">Illustrations</button>
          <button className="animate-btn">Motion Design</button>
          <button className="animate-btn">Web development</button>
        </ButtonGroup>

        <SectionTitle className='font-pp-formula-condensed font-thin text-gray-600'>
          You can't put a price on happiness — oh wait, yes we can! What's your budget range for this Complete Website project?
        </SectionTitle>
        <ButtonGroup>
          <button className="animate-btn">$1 - $1000</button>
          <button className="animate-btn">$1000 - $5000</button>
          <button className="animate-btn">$5000 - $10000</button>
          <button className="animate-btn">I don't know</button>
          <button className="animate-btn">Hire Us</button>

        </ButtonGroup>

        <SectionTitle className='font-pp-formula-condensed font-thin text-gray-600'>
          We're mind-blowers, not mind-readers. Tell us more about your project.
        </SectionTitle>
        <Form onSubmit={handleSubmit}>
          <Row>
            <FieldGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </FieldGroup>
          </Row>

          <FieldGroup fullWidth>
            <Label htmlFor="projectDetails">About Project</Label>
            <Textarea name="projectDetails" value={formData.projectDetails} onChange={handleChange} required />
          </FieldGroup>
          <Row>
            <FileInputGroup>
              
                
                  <button className='upload-btn'>
                   <ImAttachment />
                  </button>
                <FileInput type="file" name="file" onChange={handleFileChange} />
              
              <FileContainer2>
                <FileText>Attach file</FileText>
              </FileContainer2>
            </FileInputGroup>

            {/* <SubmitButton type="submit">Submit</SubmitButton> */}
            <button className='animate-btn ml-auto'>Submit</button>
          </Row>
        </Form>
      </Container>

      {/* Footer Component */}
      <Footer>
        <FooterText>&copy; 2024 Your Company. All rights reserved.</FooterText>
        <FooterLink1 href="#">Privacy Policy</FooterLink1>
        <FooterLinks>
          <FooterLink href="#">Facebook</FooterLink>
          <FooterLink href="#">Behance</FooterLink>
          <FooterLink href="#">Dribbble</FooterLink>
          <FooterLink href="#">Instagram</FooterLink>
        </FooterLinks>
      </Footer>
    </>
  );
};

// Styled components
const Container = styled.div`
  padding: 40px 20px;
  max-width: 70vw;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  color: #333;
  text-align: left;
`;


const Header = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 20px;
  font-family: 'Rock Salt', sans-serif;
  text-align: center;

`;

const Description = styled.p`
  font-size: 3rem;
  line-height: 1.5;
  margin-bottom: 30px;
  
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #333;
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.fullWidth ? "1" : "0.5")};
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #eeeeee; /* Background color of input field */
  color: #fff; /* Text color inside the input field */
  outline: none;
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  background-color: #eeeeee;
  min-height: 150px;
`;

const FileInputGroup = styled.div`
  display: flex;
  
  gap: 10px;
  cursor: pointer;
`;

const FileContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fe6f61;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FileContainer2 = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  border-radius: 5px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const FileLabel = styled.label`
  font-size: 1.5rem;
  color: #ff6b6b;
  text-align: center;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const FileText = styled.span`
  font-size: 1rem;
  color: #333;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  padding: 15px;
  font-size: 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  width: 100px;
  margin-left: auto;

  &:hover {
    background-color: #000;
  }
`;

// Footer Styled Components
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 1px;
  padding: 20px 50px;
  background-color: #000000;
  color: #fff;
  gap: 20px;
  `
  ;


const FooterText = styled.p`
  margin: 0;
  font-size: 1.2rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto; /* Aligns the links to the right */
`;

const FooterLinksContainer = styled.div`
  color: #333;
  text-align: right;
`;

const FooterLink1 = styled.a`
  color: #797979;
  margin-left: 3rem;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.4s ease; /* Smooth color transition */

  &:after {
        transform: scaleY(1); // Initial scale for the hover effect
        transition: transform 0.4s ease; // Transition for the effect
        transformOrigin: bottom; // Origin point for the transform
    }

  &:hover {
    color: #fe6f61;
  }
 &:hover:after {
    transform: scaleY(0); // Scale to full width on hover
    transformOrigin: bottom;
`


const FooterLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.4s ease; /* Smooth color transition */

  &:after {
        transform: scaleY(1); // Initial scale for the hover effect
        transition: transform 0.4s ease; // Transition for the effect
        transformOrigin: bottom; // Origin point for the transform
    }

  &:hover {
    color: #fe6f61;
  }
 &:hover:after {
    transform: scaleY(0); // Scale to full width on hover
    transformOrigin: bottom;
`;



export default ContactPage;
