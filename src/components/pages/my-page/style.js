import styled from "styled-components";
import hacker from "/src/img/hacker-boromir.jpg"

export const StyledMyPage = styled.div`
    /* background-color: rgba(255, 255, 255, 0.1); */
    background-image: url(${hacker});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
    font-size: 6vw;
    font-weight: 700;
    padding-left: 20px;
`;