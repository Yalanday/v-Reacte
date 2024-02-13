import styled from "styled-components";

export const PageWrapper = styled.div`
    width: 90vw;
    max-width: 1920px;
    height: 100%;
    display: grid;
    grid-template-areas: 
        "header header"
        "nav main"
        "footer footer";
    grid-template-rows: 60px 1fr 70px;
    grid-template-columns: 15% 1fr;
    grid-gap: 5px;
    
`;

export const StyledHeader = styled.header`
    grid-area: header;
    border: 1px solid white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    color: #4118AB
`;

export const StyledMain = styled.main`
    grid-area: main;
    border: 1px solid white;
    border-radius: 5px;
`;

export const StyledNavWrapper = styled.nav`
    grid-area: nav;
    padding: 10px;
    border: 1px solid white;
    border-radius: 5px;
`;

export const StyledFooter = styled.footer`
    grid-area: footer;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 40px;
    text-align: center;
`;
