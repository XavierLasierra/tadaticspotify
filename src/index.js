import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import CoreLayout from "./common/layouts/CoreLayout";
import SongsContextProvider from "./contexts/SongsContextProvider";
import "./styles/_main.scss";

ReactDOM.render(
  <React.StrictMode>
    <SongsContextProvider>
      <CoreLayout>
        <Routes />
      </CoreLayout>
    </SongsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
