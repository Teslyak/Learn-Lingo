import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants";

export const Links = styled(NavLink)`
  height: 28px;
`;

export const Wrap = styled.div`
  max-width: 1184px;
  height: 48px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`;

export const LinksTitlte = styled(NavLink)`
  color: rgb(18, 20, 23);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
`;

export const WrapLogo = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const WrapLinksPages = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const LinksPages = styled(NavLink)`
  color: ${colors.BLACK_TEXT};

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;
export const WrapButton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const ButtonLogin = styled.button`
  height: 48px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${colors.BLACK_TEXT};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
`;
export const ButtonRegister = styled.button`
  height: 48px;
  max-width: 166px;
  border: none;
  background: ${colors.ButtonRegister};
`;

export const Span = styled.span`
  width: 20px;
  height: 20px;
`;
