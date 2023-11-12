import styled from "styled-components";

export const PortfolioDiv = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${(params) => params.theme.bg};
`;

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 60px;
`;

export const Card = styled.div`
  background-color: #fff;
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  /* background-color: gray; */
  object-fit: cover;
  object-position: center;
`;

export const Head = styled.h3`
  color: ${(params) => params.theme.secondary};
`;

export const Para = styled.p`
  line-height: 1.6;
`;
