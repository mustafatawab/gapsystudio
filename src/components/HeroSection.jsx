// src/components/HeroSection.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/path/to/image.jpg');
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 100px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Button = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const HeroSection = () => (
  <HeroContainer>
    <Title>We Bring Your Vision to Life</Title>
    <Button href="#contact">Get Started</Button>
  </HeroContainer>
);

export default HeroSection;
