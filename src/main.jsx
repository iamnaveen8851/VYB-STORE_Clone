import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import themeContext from "./theme.js";

createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={themeContext}>
    <App />
  </ChakraProvider>
);
