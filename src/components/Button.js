import React from "react"
import styled from "@emotion/styled"
import theme from "../css/theme"
import { Link } from "gatsby"

function Button({
  text,
  href,
  bgColor,
  border,
  textColor,
  telRef,
  hoverColor,
  isCallBtn,
}) {
  const Btn = styled(Link)`
    background-color: ${bgColor || theme.colors.primary};
    border: ${border || 0};
    color: ${textColor || "white"};
    padding: 0.3rem 1.5rem 0.3rem 1.5rem;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: ${theme.fontSizes[2]}px;
    &:hover {
      background-color: ${hoverColor || theme.colors.primaryhover};
      color: white;
      border: ${border ? `2px solid ${theme.colors.primaryhover}` : 0};
      transition: all 0.2s ease-in;
    }
  `

  const CallBtn = Btn.withComponent("a")

  return (
    <>
      {isCallBtn ? (
        <CallBtn href={telRef}> {text}</CallBtn>
      ) : (
        <Btn to={href} href={telRef}>
          {text}
        </Btn>
      )}
    </>
  )
}
export default Button
