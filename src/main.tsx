import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./app.tsx";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#6366f1" },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense>
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
