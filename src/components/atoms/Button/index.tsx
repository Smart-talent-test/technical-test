import { FC } from "react";

import { ButtonStyled } from "./Button.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../utils/theme";

export interface IButtonProps {
  text: string;
  variant: "primary" | "secondary";
}

const Button: FC<IButtonProps> = ({ text, variant = 'primary' }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ButtonStyled variant={variant}>{text}</ButtonStyled>
      </ThemeProvider>
    </>
  );
};

export default Button;
