import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    common: {
      white: "#fff",
      black: "#000",
    },
    text: {
      primary: "#1c1c1c",
    },
    grey: {
      50: "#0000000D",
      100: "#F7F9FB",
      200: "#00000015",
      300: "#D5DAE1",
      400: "#00000066",
      500: "#00000060",
      600: "#949597",
      700: "#656575",
    },
    primary: { main: "#1F2025" },
    secondary: { main: "#0B7BFF", light: "#4F9E91" },
    success: { main: "#039855", light: "#A5E9D9", dark: "#4F9E91" },
    error: { main: "#D32F2F", light: "#FF4747" },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
    button: {
      fontSize: 16,
      fontWeight: 500,
      textTransform: "none",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});
