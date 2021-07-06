import React from "react";
// import styled from "@emotion/styled";
// import tw from "twin.macro";

const Button = ({
  className,
  href,
  target,
  rel,
  onClick,
  as,
  type,
  darkmode,
  text,
}) => (
  <a
    className={`group relative inline-flex font-body text-primary-900 hover:text-primary-700 font-semibold pb-1.5 focus:outline-none ${className}`}
    href={href}
    target={target}
    rel={rel}
    onClick={onClick}
    as={as}
    type={type}
    darkmode={darkmode}
  >
    {text}
    <span className="absolute bottom-0 left-0 right-auto bg-primary-600 h-1 w-5 group-hover:w-full transition-all duration-500 ease-in-out"></span>
  </a>
);

export default Button;
