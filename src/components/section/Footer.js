import React from "react"
import styled from "@emotion/styled"
import theme from "../../css/theme"

const Footer = () => {
  return (
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </Container>
  )
}

const { space } = theme

const Container = styled.footer`
  margin-top: ${space[1]}rem;
`

export default Footer
