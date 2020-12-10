import React from "react"
import styled from "@emotion/styled"
import theme from "../css/theme"

function ColorBlock() {
  return <ColorSection></ColorSection>
}

const ColorSection = styled.div`
  background-color: ${theme.colors.primary};
  width: 100%;
  height: 100px;
`
export default ColorBlock
