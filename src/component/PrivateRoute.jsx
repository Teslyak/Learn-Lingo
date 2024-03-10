import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/use-auth";
export const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const isLoggedIn = auth.isLoggedIn;
  const isRefreshing = auth.isLoggedIn;
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to="/" /> : children;
};
