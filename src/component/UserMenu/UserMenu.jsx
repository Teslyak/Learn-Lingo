import { useDispatch } from "react-redux";
import { useAuth } from "../../Hooks/use-auth";
import { logOut } from "../../Redux/Auth/operations";
import { BtnLogOut, WelcomeStyle, Wrap } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrap>
      <WelcomeStyle>{`Welcome, ${name}`}</WelcomeStyle>
      <BtnLogOut type="button" onClick={() => handleLogOut()}>
        Log Out
      </BtnLogOut>
    </Wrap>
  );
};
