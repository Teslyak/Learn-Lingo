import { Suspense } from "react";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Wrap } from "./Sharedlayout.styled";

export const SharedLayout = () => {
  return (
    <Wrap>
      <Header />
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </Wrap>
  );
};
