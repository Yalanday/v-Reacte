import styled from "styled-components";
import hacker from "/src/img/hacker-boromir.jpg";
import { Textarea } from "../../ui/textarea/textarea";
import Button from "./../../ui/button/button";


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

export const MyPagePostList = styled.ul`
    width: 40%;
    padding: 0 10px;
    list-style: none;
    background-color: #ffffff;
    border-radius: 10px;

`;

export const MyPagePostItem = styled.li`
    display: flex;
    padding:  10px;
    margin: 10px auto;
    color: black;
    font-style: italic;
    background-color: silver;
    border-radius: 10px;
`;

export const TimeSpan = styled.span`
    color: red;
    font-weight: 800;
    margin-left: auto;
`;

export const TextareaMyPage = styled(Textarea)`
width: 50%;
height: 50px;
resize: none;
`;

export const MyPagePostButton = styled(Button)`

`;



