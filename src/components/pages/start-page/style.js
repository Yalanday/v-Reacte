import styled from "styled-components";

export const StyledStartPages = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("https://velog.velcdn.com/images/vlfflq2004/post/e0f7efdd-cc90-497f-b435-6a6be9ab3536/react.gif");
    background-size: 270%;
    background-position: center;
    opacity: 0.5;
`;

export const Text = styled.span`
    font-size: 14vw;

    @media screen and (min-width: 2600px) {
   
     font-size: 11vw;
  }
  
`;