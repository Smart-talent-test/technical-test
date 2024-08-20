import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme";

/**
 * Wraps element inside the ThemeProvider to allow styled components
 * @param component Styled Component to be wrapped
 * @returns A wrapped component to avoid issues when using render method
 */
export function renderWithTheme(component: ReactNode) {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}
