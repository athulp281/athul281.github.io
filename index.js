import React from "react";
import ReactDOM from "react-dom";
import MyContextProvider from "./src/useContext/MyContextProvider";
import App from "./src/App";

ReactDOM.render(
    <MyContextProvider>
        <App />
    </MyContextProvider>,
    document.getElementById("root")
);
