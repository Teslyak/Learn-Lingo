import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./firebase.js";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import MyStyleSheetManager from "./component/TeachersListCards/TeachersReadMore.styled.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/Learn-Lingo/">
        <Provider store={store}>
          <MyStyleSheetManager>
            <App />
          </MyStyleSheetManager>
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>
);
