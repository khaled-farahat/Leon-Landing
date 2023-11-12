import styled from "styled-components";
import bg from "../assets/landing.jpg";

export const StyledLanding = styled.div`
  /* background: url(${bg}) no-repeat center center/cover #fefefe; */
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  height: calc(100vh - 44px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const IntroText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
width: 320px;
max-width: 100%;
`;

export const Head = styled.h1`
margin:0;
color: ${params => params.theme.main }
`;

export const Para = styled.p`
  color: #2c4755;
`;
