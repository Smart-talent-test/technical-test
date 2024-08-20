import styled from "styled-components";

interface IButtonVariantProps {
  variant: "primary" | "secondary";
}

export const ButtonStyled = styled.button<IButtonVariantProps>`
  background-color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.main.primary : ""};
  border: none;
  border-radius: var(--button-border-radius, 5rem);
  color: ${({ theme }) => theme.colors.white.base};
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.white.base : ""};
`;
