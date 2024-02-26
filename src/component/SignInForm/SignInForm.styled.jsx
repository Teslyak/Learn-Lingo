import styled from "styled-components";
import { colors } from "../../constants";
import { Field } from "formik";

export const WrapLogin = styled.div`
  position: relative;
  width: 566px;

  background-color: #fff;
  padding: 64px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
`;

export const Title = styled.h3`
  color: ${colors.BLACK_TEXT};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  text-align: start;
  margin-bottom: 20px;
`;

export const Discrp = styled.p`
  color: ${colors.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  margin-bottom: 40px;
`;

export const Input = styled(Field)`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  width: 438px;
  height: 54px;
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  padding: 16px 18px 16px 18px;
  &::placeholder {
    color: ${colors.BLACK_TEXT};
  }
  margin-bottom: ${(props) => props.marginbottom || "18px"};
`;

export const ButtonSubmit = styled.button`
  width: 438px;
  height: 60px;
  border-radius: 12px;
  background-color: ${colors.YELLOW_BUTTON};
  &:hover {
    background-color: ${colors.YELLOW_HOVER_BUTTON};
  }
  border: none;
  color: ${colors.BLACK_TEXT};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`;

export const WrapCloseBtn = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`;
