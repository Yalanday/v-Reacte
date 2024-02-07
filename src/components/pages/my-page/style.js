import styled from "styled-components";
import hacker from "/src/img/hacker-boromir.jpg";

export const StyledMyPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${hacker});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
`;

export const TitleMyPage = styled.h1`
    margin: 20px auto auto;
`;

