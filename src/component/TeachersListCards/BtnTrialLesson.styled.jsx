import styled from "styled-components";
import { colors } from "../../constants";

export const BtnTrialLessons = styled.button`
  color: rgb(18, 20, 23);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  border-radius: 12px;
  background-color: rgb(244, 197, 80);
  border: none;
  padding: 16px 48px 16px 48px;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: ${colors.YELLOW_HOVER_BUTTON};
  }
`;
