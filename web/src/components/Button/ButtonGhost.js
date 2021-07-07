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
    className={`font-body font-semibold text-primary-600 hover:text-white bg-white hover:bg-primary-600 border border-solid border-primary-700 px-4 py-2 h-[52px] min-w-[214px] rounded inline-flex items-center justify-center text-center no-underline focus:outline-none transition-colors duration-300 ease-in-out ${
      darkmode &&
      "text-white border-white hover:bg-white hover:text-primary-600"
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
