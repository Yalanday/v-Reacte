import styled from "styled-components";
import LogoImage from '/src/assets/react.svg';

export const DialogsWrapper = styled.div`
    display: grid;
    grid-template-areas: 
        "dialogs messages"
        "dialogs input-wrapper"
    ;
    grid-template-rows: 1fr 8%;
    grid-template-columns: 20% 1fr;
    height: 100%;
    gap: 5px;
`;

export const DialogsList = styled.ul`
    grid-area: dialogs;
    margin: 0;
    padding: 10px 0 0 10px;
    list-style: none;
    border: 1px solid #ffffff;
    border-radius: 5px 0 0 5px;
`;

export const DialogsItem = styled.li`
    color: pink;
`;

export const MessagesWrapper = styled.div`
    grid-area: messages;
    display: flex;
    align-items: end;

`;

export const MessagesList = styled.ul`
    margin: auto auto 10px 10px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const MessagesItem = styled.li`
    color: aqua;
`;

export const InputButtonWrapper = styled.div`
    grid-area: input-wrapper;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MessageInputField = styled.textarea`
    width: 93%;
    height: 80%;
    font-size: 18px;
    resize: none;
`;

export const MessagesubmitButton = styled.button`
    margin: 0 auto;
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

