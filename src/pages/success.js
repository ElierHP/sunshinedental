import React from "react"
import Container from "../components/Container"
import Button from "../components/Button"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import theme from "../css/theme"

function success() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <h1>Thank You!</h1>
          <p>We will get back to you as soon as possible.</p>
          <BtnContainer>
            <Button text="Home" href="/" />
          </BtnContainer>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Wrapper = styled.div`
  text-align: center;
  padding: 5rem;
  margin-bottom: -2rem;
  ${theme.mq()[0]} {
    padding: 3rem;
    padding-top: 4rem;
  }
`
const BtnContainer = styled.div`
  margin: auto;
  width: 300px;
  a {
    text-decoration: none;
  }
  ${theme.mq()[0]} {
    width: 100%;
  }
`

export default success
