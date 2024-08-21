import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <main>
            <AppRoutes />
          </main>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
