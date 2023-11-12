import styled from "styled-components";
import { Container } from "./Global.styled";

export const StyledContainer = styled(Container)`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, mimax(300px, 1fr));
  grid-gap: 20px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  Padding-top: 60px;
  Padding-bottom: 60px;
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const FeatIcon = styled.span`

  color: ${params => params.theme.main};
  font-size: 70px;

`;

export const FeatTitle = styled.h3`
color: ${params => params.theme.secondary};
`;

export const FeatPara = styled.p`
/* width: calc(100% -) */
width: 250px;
line-height: 1.6;

`;
