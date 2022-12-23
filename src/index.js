import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const AnswerHere = () => (
  <BrowserRouter>
    <ChakraProvider>
      <CSSReset />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnswerHere />
  </React.StrictMode>
);
