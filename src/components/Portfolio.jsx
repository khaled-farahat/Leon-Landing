import React from "react";
import { Container, SpHeader, SpPara } from "../styles/Global.styled";
import {
  PortfolioDiv,
  PortfolioContainer,
  Image,
  Head,
  Para,
  Card,
} from "../styles/Portfolio.styled";
import img1 from "../assets/portfolio-1.jpg";
import img2 from "../assets/portfolio-2.jpg";
import img3 from "../assets/portfolio-3.jpg";

const Portfolio = () => {
  return (
    <PortfolioDiv id="portfolio">
      <Container>
        <SpHeader>Portfolio</SpHeader>
        <SpPara>If you do it right it will last forever</SpPara>
        <PortfolioContainer>
          <Card>
            <Image src={img1} alt="img1" />
            <div style={{ padding: "15px" }}>
              <Head>Project Here</Head>
              <Para>
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and
              </Para>
            </div>
          </Card>
          <Card>
            <Image src={img2} alt="img2" />
            <div style={{ padding: "15px" }}>
              <Head>Project Here</Head>
              <Para>
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and
              </Para>
            </div>
          </Card>
          <Card>
            <Image src={img3} alt="img3" />
            <div style={{ padding: "15px" }}>
              <Head>Project Here</Head>
              <Para>
                My creative ability is very difficult to measure because it can
                manifest in so many surprising and
              </Para>
            </div>
          </Card>
        </PortfolioContainer>
      </Container>
    </PortfolioDiv>
  );
};

export default Portfolio;
