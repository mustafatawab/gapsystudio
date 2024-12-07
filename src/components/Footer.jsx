import React, { useState } from 'react';
import styled from 'styled-components';

const Footer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const StyledLink = styled.a`
    ${linkStyles}
    position: relative;
    overflow: hidden;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px; /* Thickness of the underline */
        width: 100%;
        background-color: black; /* Color of the underline */
        transform: scaleX(0); /* Initial scale for the hover effect */
        transition: transform 0.3s ease; /* Transition for the effect */
        transform-origin: bottom right; /* Origin point for the transform */
    }

    &:hover:after {
        transform: scaleX(1); /* Scale to full width on hover */
        transform-origin: bottom left; /* Change origin for the scale effect */
    }
`;

    return (
        <header style={headerStyles}>
            <StyledLink href="">Facebook</StyledLink>
            <StyledLink href="" >Behance</StyledLink>
            <StyledLink href="">Dribbble</StyledLink>
            <StyledLink href="" >Instagram</StyledLink>
        </header>
    );
};

const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    gap: '50px',
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
};

const linkStyles = {
    position: 'stick', // Required for positioning the pseudo-element
    color: 'black',
    fontSize: '1rem',
    textDecoration: 'none',
    overflow: 'hidden', // Ensures the underline does not overflow
};

const linkHoverEffect = {
    // Create a pseudo-element for the underline
    '&:after': {
        content: '""',
        position: 'absolute',
        left: '0',
        bottom: '0',
        height: '2px', // Thickness of the underline
        width: '100%',
        backgroundColor: 'black', // Color of the underline
        transform: 'scaleX(0)', // Initial scale for the hover effect
        transition: 'transform 0.3s ease', // Transition for the effect
        transformOrigin: 'bottom right', // Origin point for the transform
    },
    '&:hover:after': {
        transform: 'scaleX(1)', // Scale to full width on hover
        transformOrigin: 'bottom left', // Change origin for the scale effect
    },
};
export default Footer;
