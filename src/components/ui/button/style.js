import styled from "styled-components";
import LogoImage from '/src/assets/react.svg';

export const StyledButton = styled.button`    
    width: 45px;
    height: 40px;
    background-color: #242424;
    background-image: url(${LogoImage});
    background-size: cover;
    outline: none;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.3;
    }
`;