import styled from "styled-components";

export const AboutDiv = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const AboutContent = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 250px;
  height: 275px;

  &::before {
    content: "";
    position: absolute;
    background-color: gray;
    width: 100px;
    height: calc(100% + 80px);
    top: -40px;
    left: -20px;
    z-index: -1;
  }

  ::after {
    content: "";
    position: absolute;
    width: 120px;
    height: 200px;
    border-left: 80px solid ${(params) => params.theme.main};
    border-bottom: 80px solid ${(params) => params.theme.main};
    z-index: -1;
    right: -150px;
    top: -40px;
  }

  @media (max-width: 991px) {
    flex-direction: row;
    text-align: center;

    &::before,
    &::after {
      display: none;
    }
  }
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const TextDiv = styled.div`
  flex-basis: calc(100% - 500px);
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const TextBold = styled.p`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 20px;
  color: ${(params) => params.theme.secondary};
  line-height: 1.6;
`;

export const Text = styled.p`
  line-height: 1.6;
  @media (max-width: 991px) {
    text-align: center;
  }
`;

export const Line = styled.hr`
  width: 50%;
  /* align-self: left; */
  margin-left: 0;
  border: 1px solid ${(params) => params.theme.main};
  @media (max-width: 991px) {
    width: 100%;
  }
`;
