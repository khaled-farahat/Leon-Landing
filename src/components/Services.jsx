import React from "react";
import {
  StyledServices,
  ServContent,
  Col,
  Srv,
  Icon,
  Head,
  Para,
  Image,
  ImageContainer,
} from "../styles/Services.styled";
import { Container, SpHeader, SpPara } from "../styles/Global.styled";
import { HiPrinter } from "react-icons/hi";
import { BsFillChatLeftFill, BsWindowFullscreen } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import servicePic from "../assets/services.jpg";

const Services = () => {
  return (
    <StyledServices id="services">
      <Container>
        <SpHeader>Services</SpHeader>
        <SpPara>Don't Be busy be productive</SpPara>
        <ServContent>
          <Col>
            <Srv>
              <Icon>
                <HiPrinter />
              </Icon>
              <div>
                <Head>Graphic design</Head>
                <Para>
                  Graphic design is the process of visual communication and
                  problem-solving using one or more of typography, photography
                  and illustration.
                </Para>
              </div>
            </Srv>
            <Srv>
              <Icon>
                <BsFillChatLeftFill />
              </Icon>
              <div>
                <Head>UI & UX</Head>
                <Para>
                  Process of enhancing user satisfaction with a product by
                  improving the usability, accessibility, and pleasure provided
                  in the interaction.
                </Para>
              </div>
            </Srv>
          </Col>
          <Col>
            <Srv>
              <Icon>
                <BsWindowFullscreen />
              </Icon>
              <div>
                <Head>Web design</Head>
                <Para>
                  Web design encompasses many different skills and disciplines
                  in the production and maintenance of websites.
                </Para>
              </div>
            </Srv>
            <Srv>
              <Icon>
                <CgScreen />
              </Icon>
              <div>
                <Head>Web development</Head>
                <Para>
                  Web development is a broad term for tie work involved in
                  developing a web site for the Internet or an intranet.
                </Para>
              </div>
            </Srv>
          </Col>
          <Col className="img">
            <ImageContainer>
              <Image alt="service" src={servicePic} />
            </ImageContainer>
          </Col>
        </ServContent>
      </Container>
    </StyledServices>
  );
};

export default Services;
