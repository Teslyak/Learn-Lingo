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
import { useAuth } from "../../../Hooks/use-auth";
import { UserMenu } from "../UserMenu/UserMenu";

export const Header = ({ setNamePopUp }) => {
  const { isLoggedIn } = useAuth();
  const handleLogin = () => {
    setNamePopUp("login");
  };

  const handleSignIn = () => {
    setNamePopUp("signin");
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
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <WrapButton>
            <ButtonLogin type="button" onClick={handleLogin}>
              <Span>
                <Login />
              </Span>
              Log in
            </ButtonLogin>

            <ButtonRegister type="button" onClick={() => handleSignIn()}>
              Registration
            </ButtonRegister>
          </WrapButton>
        )}
      </WrapTeachersLogin>
    </Wrap>
  );
};

Header.propTypes = {
  setNamePopUp: propTypes.func.isRequired,
};
