import styled from "styled-components";
import { colors } from "../../constants";

export const Wrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const BtnLogOut = styled.button`
  height: 48px;
  max-width: 166px;
  border: none;
  border-radius: 12px;
  background: ${colors.YELLOW_BUTTON};
  color: ${colors.WHITE};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  padding: 14px 39px 14px 39px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const WelcomeStyle = styled.p`
  color: rgb(18, 20, 23);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.333px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;
