import { useSelector } from "react-redux";
export const useAuth = () => {
  const { name, email, token, id } = useSelector((state) => state.user);
  return {
    isLoggedIn: !!id,
    email,
    token,
    name,
    id,
  };
};
