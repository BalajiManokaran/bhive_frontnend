import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffcf4b",
      light: "#ffcf4b",
      dark: "#27ae60",
    },
    secondary: {
      main: "#f9f9f9",
      light: "#f9f9f9",
      dark: "#cec6c6",
    },
    text: {
      primary: "#263238",
      secondary: "#65624c",
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontSize: "58px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "36px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "24px",
    },
    h4: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "18px",
    },
    h6: {
      fontSize: "16px",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgb(255, 255, 255)",
          padding: "0px 120px",
          height: "90px",
          boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
          [theme.breakpoints.down("md")]: {
            padding: "20px",
          },
        }),
      },
    },
  },
});
