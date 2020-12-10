import React from "react"
import Container from "../components/Container"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import theme from "../css/theme"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <h1>404 Error: Not Found</h1>
      <p>The page you are trying to access does not exist.</p>
      <BtnContainer>
        <Button text="Home" href="/" />
      </BtnContainer>
    </Wrapper>
  </Layout>
)

const Wrapper = styled(Container)`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`
const BtnContainer = styled.div`
  width: 250px;
  ${theme.mq()[0]} {
    width: 100%;
    padding: 0 1rem 0 1rem;
  }
`

export default NotFoundPage
