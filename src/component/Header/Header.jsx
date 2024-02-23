import propTypes from "prop-types";
import { Login } from "../../assets/icons/Login";
import { Logo_flag } from "../../assets/icons/Logo_flag";
import {
  ButtonLogin,
  ButtonRegister,
  Links,
  LinksPages,
  LinksTitlte,
  Span,
  Wrap,
  WrapButton,
  WrapLogo,
  WrapLogoHome,
  WrapTeachersLogin,
} from "./Header.styled";

export const Header = ({ setIsOpenPopUp }) => {
  const handleLogin = () => {
    setIsOpenPopUp(true);
  };

  const handleSignIn = () => {
    setIsOpenPopUp(true);
  };

  return (
    <Wrap>
      <WrapLogoHome>
        <WrapLogo>
          <Links to="/">
            <Logo_flag />
          </Links>
          <LinksTitlte to="/">LearnLingo</LinksTitlte>
        </WrapLogo>
        <LinksPages to="/">Home</LinksPages>
      </WrapLogoHome>

      <WrapTeachersLogin>
        <LinksPages to="teachers">Teachers</LinksPages>
        <WrapButton>
          <ButtonLogin type="button" onClick={() => handleLogin()}>
            <Span>
              <Login />
            </Span>
            Log in
          </ButtonLogin>
          <ButtonRegister type="button" onClick={() => handleSignIn()}>
            Registration
          </ButtonRegister>
        </WrapButton>
      </WrapTeachersLogin>
    </Wrap>
  );
};

Header.propTypes = {
  setIsOpenPopUp: propTypes.func.isRequired,
};
