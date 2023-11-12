import styled from "styled-components";

export const FooterDiv = styled.div`
  background-color: ${(params) => params.theme.secondary};
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  color: #fff;

  span{
    color: ${(params) => params.theme.main};
  }
`;
