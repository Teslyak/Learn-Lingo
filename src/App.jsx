import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SharedLayout } from "./component/SharedLayout";
import { Home } from "./Pages/Home/Home";
import { Teachers } from "./Pages/Teachers/Teachers";

import { useState } from "react";
import { SelectorPopUp } from "./component/SelectorPopUp";

export function App() {
  const [namePopUp, setNamePopUp] = useState("");

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout setNamePopUp={setNamePopUp} />}>
          <Route index element={<Home />} />
          <Route path="teachers" element={<Teachers />} />
        </Route>
      </Routes>

      <SelectorPopUp namePopUp={namePopUp} onClose={() => setNamePopUp("")} />
    </>
  );
}
