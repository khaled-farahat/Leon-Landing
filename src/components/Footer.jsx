import React from "react";
import { FooterDiv } from "../styles/Footer.styled";
import { Container } from "../styles/Global.styled";

const Footer = () => {
  const Year = new Date().getFullYear();
  //©
  return (
    <FooterDiv>
      <Container>
        &copy; {Year} - <span>Leon</span> All Right Reserved
      </Container>
    </FooterDiv>
  );
};

export default Footer;
