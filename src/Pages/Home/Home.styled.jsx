import styled from "styled-components";
import { colors } from "../../constants";
import border from "../../assets/img/BorderDashedSvg.svg";

export const Wrap = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;

export const BlockDiscriptions = styled.div`
  max-width: 720px;
  border-radius: 30px;
  background: ${colors.SILVER_BACKGROUND};
  padding: 98px 108px 98px 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  width: 548px;
  text-align: start;
  margin-bottom: 32px;
`;

export const Discrp = styled.p`
  text-align: start;
  margin-bottom: 64px;
  color: ${colors.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.32px;
  width: 471px;
`;
export const Button = styled.button`
  border-radius: 12px;
  background-color: ${colors.YELLOW_BUTTON};
  width: 267px;
  height: 60px;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  border: none;
  &:hover {
    background-color: ${colors.YELLOW_HOVER_BUTTON};
  }
`;

export const BlockImages = styled.div`
  position: relative;
  max-width: 568px;
  border-radius: 30px;
  background: ${colors.LIGHT_YELLOW};
  padding: 80px 118px 117px 114px;
`;
export const Sticker = styled.img`
  max-width: 336px;
  max-height: 333px;
`;

export const SpanLang = styled.span`
  background-color: ${colors.LIGHT_YELLOW};
  border-radius: 8px;
  max-width: 195px;
  font-style: italic;
  letter-spacing: -0.96px;
  font-size: 48px;
  font-weight: 400;
`;

export const Span = styled.span`
  color: ${colors.BLACK_TEXT};
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  text-align: start;
  font-style: normal;
  letter-spacing: -0.96px;
`;
export const SpanTheBest = styled.span`
  color: ${colors.BLACK_TEXT};
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.96;
  text-align: start;
  font-style: normal;
`;

export const UnionDiv = styled.div`
  position: absolute;
  height: 176px;
  overflow: hidden;
  top: 354px;
  left: 103.64px;
`;

export const AppelDiv = styled.div`
  position: absolute;
  left: 260.56px;
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1312px;
  height: 116px;
  gap: 100px;
  background-image: url(${border});
`;
export const Experienced = styled.li`
  display: flex;
  gap: 16px;
`;
export const Number = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.56px;
`;
export const DiscrpStat = styled.p`
  color: ${colors.BLACK_TEXT};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  text-align: start;
  width: ${(props) => props.width || "96px"};
`;
