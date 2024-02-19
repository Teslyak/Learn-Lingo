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
  WrapLinksPages,
  WrapLogo,
} from "./Header.styled";

export const Header = () => {
  return (
    <Wrap>
      <WrapLogo>
        <Links to="/">
          <Logo_flag />
        </Links>
        <LinksTitlte to="/">LearnLingo</LinksTitlte>
      </WrapLogo>
      <WrapLinksPages>
        <LinksPages to="/">Home</LinksPages>
        <LinksPages to="teachers">Teachers</LinksPages>
      </WrapLinksPages>
      <WrapButton>
        <ButtonLogin>
          <Span>
            <Login />
          </Span>
          Log in
        </ButtonLogin>
        <ButtonRegister>Registration</ButtonRegister>
      </WrapButton>
    </Wrap>
  );
};
