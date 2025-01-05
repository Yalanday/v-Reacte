import styled from "styled-components";

export const StyledUsersList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 15px;
`;

export const StyledUsersItem = styled.li`
    margin: 0;
    max-width: 170px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 1px solid silver;
`;

export const StyledUserImg = styled.img`
    width: 150px;
    height: 200px;
    object-fit: cover;
`;

export const StyledUserTitle = styled.h3`
    margin: 0;
`;

export const StyledUserParagraph = styled.p`
    margin: 0;
`;


