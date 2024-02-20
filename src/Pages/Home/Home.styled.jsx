import styled from "styled-components";
import { colors } from "../../constants";

export const Wrap = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  gap: 24px;
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
  max-width: 548px;
  text-align: start;
`;

export const Discrp = styled.p``;
export const Button = styled.button``;
export const BlockImages = styled.div`
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
  letter-spacing: -0.96px;
`;
export const SpanTheBest = styled.span`
  color: ${colors.BLACK_TEXT};
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.96;
  text-align: start;
`;
