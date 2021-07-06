import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.a``;

const Button = ({
  className,
  href,
  target,
  rel,
  modal,
  onClick,
  as,
  type,
  darkmode,
  text,
}) => (
  <StyledButton
    className={`group relative font-body font-semibold text-white hover:text-white bg-secondary-600 hover:bg-primary-600 px-4 py-4 rounded min-w-[214px] h-[50px] inline-flex items-center justify-center text-center no-underline focus:outline-none transition-colors duration-300 ease-in-out ${
      darkmode && "bg-primary-600"
    } ${className || ""}`}
    href={href}
    target={target}
    rel={rel}
    data-modal-open={modal}
    onClick={onClick}
    as={as}
    type={type}
    darkmode={darkmode}
  >
    {text}
  </StyledButton>
);

export default Button;
