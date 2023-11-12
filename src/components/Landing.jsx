import React from "react";
import { StyledLanding, IntroText, Head, Para } from "../styles/Landing.styled";

const Landing = () => {
  return (
    <StyledLanding>
      <IntroText>
        <Head>Hello There!</Head>
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, quod, quia, voluptates quae voluptatibus quibusdam
          voluptatum quidem quos nemo quas. Quisquam, quae. Quisquam, quae.
        </Para>
      </IntroText>
    </StyledLanding>
  );
};

export default Landing;
