import { useDispatch } from "react-redux";
import { useAuth } from "../../../Hooks/use-auth";
import { logOut } from "../../../Redux/Auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{`Welcome, ${name}`}</p>
      <button type="button" onClick={() => handleLogOut()}>
        Log Out
      </button>
    </div>
  );
};
