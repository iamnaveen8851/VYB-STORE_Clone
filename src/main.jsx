import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import themeContext from "./theme.js";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={themeContext}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
