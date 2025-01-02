import "@fontsource/inter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import RouterApp from "./router";
import { AppRedux } from "./redux";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppRedux>
          <RouterApp />
        </AppRedux>
      </Router>
    </ThemeProvider>
  );
}

export default App;
