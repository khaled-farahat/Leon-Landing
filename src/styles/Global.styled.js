import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  padding: 0 15px;
  /* small */
  @media (min-width: 768px) {
    width: 750px;
  }
  /* medium */
  @media (min-width: 992px) {
    width: 970px;
  }
  /* large */
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const SpHeader = styled.h2`
  color: #ebeced;
  font-size: 100px;
  font-size: 100px;
  text-align: center;
  font-weight: 800;
  letter-spacing: -3px;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 60px;
  }
`;

export const SpPara = styled.p`
  margin: -30px 0 0;
  font-size: 20px;
  text-align: center;
  color: #797979;

  @media (max-width: 767px) {
    margin-top: -20px;
  }
`;
