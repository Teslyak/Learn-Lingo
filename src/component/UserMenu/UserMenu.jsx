import { useDispatch } from "react-redux";
import { useAuth } from "../../../Hooks/use-auth";
import { logOut } from "../../../Redux/Auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useAuth();

  return (
    <div>
      <p>{`Welcom, ${name}`}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};
