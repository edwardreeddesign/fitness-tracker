import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  primary,
  secondary,
  outline,
  onSubmit,
  onClick,
  onCancel,
}) => {
  return (
    <StyledButton
      primary={primary}
      secondary={secondary}
      outline={outline}
      onSubmit={onSubmit}
      onClick={onClick}
      onCancel={onCancel}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  font-size: var(--fontMed);
  font-family: var(--ff-title);
  padding: 0.8rem 1.7rem;
  border-radius: 0.8rem;
  margin: 1rem;
  background: ${(p) =>
    p.primary
      ? "var(--clr-accent)"
      : p.secondary
      ? "var(--clr-light)"
      : p.outline
      ? "none"
      : ""};
  color: ${(p) =>
    p.primary
      ? "var(--clr-light)"
      : p.secondary
      ? "var(--clr-dark)"
      : p.outline
      ? "var(--clr-light)"
      : ""};
  border-color: ${(p) =>
    p.primary
      ? "1px solid var(--clr-accent)"
      : p.secondary
      ? "1px solid var(--clr-dark)"
      : p.outline
      ? "1px solid var(--clr-accent)"
      : ""};

  &:hover,
  &:active {
    background: ${(p) =>
      p.primary ? "#6b4e83" : p.secondary ? "#c2c0c2" : ""};
  }
`;

export default Button;
