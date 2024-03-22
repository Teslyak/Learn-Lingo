import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants';

export const Links = styled(NavLink)`
  height: 28px;
`;

export const Wrap = styled.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 20px 128px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 560px) {
    padding: 20px 15px;
  }
`;

export const LinksTitlte = styled(NavLink)`
  color: rgb(18, 20, 23);
  font-size: 20px;
  //font-size: calc(12px + (20 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.333px;
`;

export const WrapLogo = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const WrapLinksPage = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const LinksPages = styled(NavLink)`
  color: ${colors.BLACK_TEXT};
  font-size: 16px;
  /* font-size: calc(12px + (20 - 12) * ((100vw - 320px) / (1440 - 320))); */
  font-weight: 400;
  line-height: 20px;
  max-width: 66px;

  &.active {
    font-weight: 500;
  }
`;
export const WrapButton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const ButtonLogin = styled.button`
  height: 48px;
  max-width: 73px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${colors.BLACK_TEXT};
  font-size: 16px;
  //font-size: calc(12px + (20 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  font-family: Roboto;
  white-space: nowrap;
  cursor: pointer;
`;
export const ButtonRegister = styled.button`
  height: 48px;
  width: 166px;
  border: none;
  border-radius: 12px;
  background: rgb(18, 20, 23);
  color: ${colors.WHITE};
  font-family: Roboto;
  font-size: 16px;
  //font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  padding: 14px 39px 14px 39px;
`;

export const Span = styled.span`
  max-width: 20px;
  height: 20px;
`;

export const WrapLogoHome = styled.div`
  display: flex;
  gap: 390px;
  align-items: center;
`;

export const WrapTeachersLogin = styled.div`
  display: flex;
  align-items: center;
`;
