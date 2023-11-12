import React from "react";
import {
  AboutDiv,
  AboutContent,
  Image,
  TextDiv,
  TextBold,
  Line,
  Text,
  ImageContainer,
} from "../styles/About.styled";
import { Container, SpHeader, SpPara } from "../styles/Global.styled";
import aboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <AboutDiv id="about">
      <Container>
        <SpHeader>About</SpHeader>
        <SpPara>Less is more work</SpPara>
        <AboutContent>
          <ImageContainer>
            <Image src={aboutImage} alt="about image" />
          </ImageContainer>
          <TextDiv>
            <TextBold>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            </TextBold>
            <Line />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur, nisl nec ultricies lacinia, nisl nisl aliquam nisl, a
            </Text>
          </TextDiv>
        </AboutContent>
      </Container>
    </AboutDiv>
  );
};

export default About;
