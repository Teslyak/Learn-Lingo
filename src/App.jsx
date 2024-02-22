import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SharedLayout } from "./component/SharedLayout";
import { Home } from "./Pages/Home/Home";
import { Teachers } from "./Pages/Teachers/Teachers";

import { LoginForm } from "./component/LoginForm/LoginForm";
import { useState } from "react";

export function App() {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<SharedLayout setIsOpenPopUp={setIsOpenPopUp} />}
        >
          <Route index element={<Home />} />
          <Route path="teachers" element={<Teachers />} />
        </Route>
      </Routes>
      {isOpenPopUp ? <LoginForm onClose={() => setIsOpenPopUp(false)} /> : null}
    </>
  );
}
