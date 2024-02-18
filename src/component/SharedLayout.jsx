import { Suspense } from "react";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
