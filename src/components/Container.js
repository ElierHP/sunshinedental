import React from "react"
import styled from "@emotion/styled"

function Container({ children, className }) {
  return (
    <Wrapper>
      <main className={className}>{children}</main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem 0 1rem;
`

export default Container
