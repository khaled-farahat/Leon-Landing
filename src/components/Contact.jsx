import React from "react";
import {
  ContactDiv,
  ContactContent,
  Para,
  Link,
} from "../styles/Contact.styled";
import { Container, SpHeader, SpPara } from "../styles/Global.styled";

const Contact = () => {
  return (
    <ContactDiv id="contact">
      <Container>
        <SpHeader>Contact</SpHeader>
        <SpPara>we are born to create</SpPara>
        <ContactContent>
          <Para>Feel free to drop us a line at:</Para>
          <Link href="mailto: khaled@gmail.com?subject=Contact">
            khaled@gmail.com
          </Link>
        </ContactContent>
      </Container>
    </ContactDiv>
  );
};

export default Contact;
