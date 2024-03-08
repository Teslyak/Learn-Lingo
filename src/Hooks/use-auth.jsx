import { useSelector } from "react-redux";
export const useAuth = () => {
  const { name, email, token, id, isLoggedIn } = useSelector(
    (state) => state.auth
  );
  return {
    isLoggedIn,
    email,
    token,
    name,
    id,
  };
};
