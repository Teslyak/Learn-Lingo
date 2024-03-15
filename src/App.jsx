import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SharedLayout } from "./component/SharedLayout";
import { Home } from "./Pages/Home/Home";
import { Teachers } from "./Pages/Teachers/Teachers";

import { useEffect, useState } from "react";
import { SelectorPopUp } from "./component/SelectorPopUp";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./Redux/Auth/operations";
import { PrivateRoute } from "./component/PrivateRoute";
import { Favorites } from "./Pages/Favorites/Favorite";
import { Toaster } from "react-hot-toast";
import { selectIsLoading } from "./Redux/Catalog/selectors";
import { Loader } from "./component/Loader/Loader";

export function App() {
  const [namePopUp, setNamePopUp] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<SharedLayout setNamePopUp={setNamePopUp} />}>
          <Route index element={<Home />} />
          <Route
            path="teachers"
            element={<Teachers setNamePopUp={setNamePopUp} />}
          />
          <Route
            path="favorites"
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>

      <SelectorPopUp namePopUp={namePopUp} onClose={() => setNamePopUp("")} />
      <Toaster />
    </>
  );
}
