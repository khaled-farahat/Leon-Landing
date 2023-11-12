import styled from "styled-components";

export const StyledServices = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const ServContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 60px;
`;

export const Col = styled.div`
  @media (max-width: 1199px) {
    &.img {
      display: none;
    }
  }
`;

export const Srv = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Icon = styled.span`
  color: ${(params) => params.theme.main};
  font-size: 30px;
  flex-basis: 60px;
`;

export const Head = styled.h3`
  color: ${(params) => params.theme.secondary};
  margin-left: 20px;
  line-height: 1.8px;
`;

export const Para = styled.p`
  line-height: 1.6;
`;

export const ImageContainer = styled.div`
  width: 260px;
  height: 310px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: -20px;
    background-color: ${(params) => params.theme.secondary};
    width: 80px;
    height: calc(100% + 100px);
    top: -50px;
    z-index: -1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
