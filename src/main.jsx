import React from "react";
import ReactDOM from "react-dom/client";
import { StateContextProvider } from "./context";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains"; //
import { Chain } from "./constants";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={Chain}
      autoConnect={true}
      clientId="c623b4cdb3acd0da1c415436def7c94a"
    >
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
