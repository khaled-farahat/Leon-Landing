import styled from "styled-components";

export const Logo = styled.img`
  /* width: 55px; */
  /* height: 30px; */
  height: 40px;
`;

export const StyledHeader = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
  }
`;

export const Menu = styled.div`
  position: relative;
  ul {
    display: none;
    list-style: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: calc(100% + 5px);
    background: #fff;
    min-width: 180px;
    padding: 0;
    margin: 0;
    background-color: #f6f6f6;
    z-index: 1;

    li {
      margin: 10px 0;
      a {
        text-decoration: none;
        color: #000;
        font-size: 1rem;
        font-weight: bold;
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

        :hover {
          color: ${(props) => props.theme.main};
          text-decoration: none;
        }
      }
    }
  }

  ul::before {
    content: "";
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #f6f6f6 transparent;
    position: absolute;
    right: 5px;
    top: -17px;
  }

  &:hover {
    ul {
      display: flex;
    }
  }
`;

export const Icon = styled.span`
  font-size: 35px;
`;
