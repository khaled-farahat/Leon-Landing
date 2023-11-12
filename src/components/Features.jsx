import React from "react";
import {
  StyledContainer,
  Feature,
  FeatTitle,
  FeatPara,
  FeatIcon,
} from "../styles/Features.styled";
import { TbLamp2 } from "react-icons/tb";
import { GiFizzingFlask } from "react-icons/gi";
import { TiGlobeOutline } from "react-icons/ti";

const Features = () => {
  return (
    <div style={{backgroundColor: '#f6f6f6'}}>
      <StyledContainer>
        <Feature>
          <FeatIcon>
            <TbLamp2 />
          </FeatIcon>
          <FeatTitle>Tell Us Your Idea</FeatTitle>
          <FeatPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quod, quia
          </FeatPara>
        </Feature>
        <Feature>
          <FeatIcon>
            <GiFizzingFlask />
          </FeatIcon>
          <FeatTitle>We Will Do All The Work</FeatTitle>
          <FeatPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quod, quia
          </FeatPara>
        </Feature>
        <Feature>
          <FeatIcon>
            <TiGlobeOutline />
          </FeatIcon>
          <FeatTitle>Your Product Is Worldwide</FeatTitle>
          <FeatPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quod, quia
          </FeatPara>
        </Feature>
      </StyledContainer>
    </div>
  );
};

export default Features;
