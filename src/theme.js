import { extendTheme } from "@chakra-ui/react";

const themeContext = extendTheme({
  fonts: {
    heading: "Urbanist, sans-serif", // Font for headings
    body: "Urbanist, sans-serif", // Font for body text
  },
});

export default themeContext;
