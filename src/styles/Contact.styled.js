import styled from "styled-components";

export const ContactDiv = styled.div`
  background-color: ${(params) => params.theme.bg};
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const ContactContent = styled.div`
  margin-top: 60px;
`;

export const Para = styled.p`
  color: ${(params) => params.theme.secondary};
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(params) => params.theme.main};
  font-size: 1.7rem;
  font-weight: 800;
  padding-left: 15px;
`;
