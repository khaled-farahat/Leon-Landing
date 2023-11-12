import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Container } from "../styles/Global.styled";
import { Logo, StyledHeader, Menu, Icon } from "../styles/Header.styled";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <StyledHeader>
      <Container className="container">
        <Logo src={logo} />
        <Menu>
          <Icon>
            <RiMenu3Fill />
          </Icon>
          <ul>
            <li>
              <a href="#services">services</a>
            </li>
            <li>
              <a href="#portfolio">portfolio</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </Menu>
      </Container>
    </StyledHeader>
  );
}
