import { useSelector } from "react-redux";
export const useAuth = () => {
  const { name, email, token, id, isLoggedIn, isRefreshing } = useSelector(
    (state) => state.auth
  );
  return {
    isRefreshing,
    isLoggedIn,
    email,
    token,
    name,
    id,
  };
};
