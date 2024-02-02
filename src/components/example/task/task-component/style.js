import styled from "styled-components";

export const StyledTask = styled.div`
    border: 1px solid red;
    width: 700px;
`;

export const TitleTask = styled.h3`
    color: #ffffff;
    font-size: 22px;
    margin: 10px;    
`;

export const ProgressTask = styled.div`
    position: relative;
    border: 1px solid orange;
    width: 500px;
    height: 25px;
    margin: 10px;
    
    &::after {
        content: '';
        position: absolute;
        height: 100%;
        width: ${(props) => props.$bcgWidth};
        background-color: red;
    }
`;

export const ButtonTask = styled.button`
    width: 150px;
    height: 40px;
    background-color: lime;
    border: none;
    margin: 10px;
    font-size: 22px;
    padding: 5px;

    &:hover {
        opacity: 0.7;
        transition: opacity 0.3s ease-in-out;
    }

    &:active {
        opacity: 0.2;
        transition: opacity 0.3s ease-in-out;
    }

    &:disabled {
        background-color: darkgray;
    }
`;

export const NumberTask = styled.strong`
    color: #ffffff;
    font-size: 22px;
    opacity: 0.5;
`;