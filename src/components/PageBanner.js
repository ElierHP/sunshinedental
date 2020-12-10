import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import Button from "./Button"
import Container from "./Container"
import theme from "../css/theme"

function PageBanner({ title, subtitle, text, btnText, href, img }) {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "sky.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <StyledBackgroundImage Tag="section" fluid={imageData} alt="">
      <Container>
        <Wrapper>
          <Content>
            <h4>{subtitle}</h4>
            <h1>{title}</h1>
            <p>{text}</p>
            <BtnContainer>
              <Button text={btnText} telRef={href} isCallBtn={true} />
            </BtnContainer>
          </Content>
          <ImgContainer>
            <img src={img} alt="" />
          </ImgContainer>
        </Wrapper>
      </Container>
    </StyledBackgroundImage>
  )
}

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 8rem;
  padding: 2rem;
  ${theme.mq()[2]} {
    grid-template-columns: 2fr 1fr;
  }
  ${theme.mq()[1]} {
    grid-template-columns: 1fr;
    grid-gap: 4rem;
    padding: 1rem;
  }
`
const Content = styled.div`
  padding: 2rem;
  h4 {
    margin-bottom: 1rem;
  }
`
const BtnContainer = styled.div`
  width: 70%;
  ${theme.mq()[1]} {
    width: 100%;
  }
`
const ImgContainer = styled.div`
  img {
    height: 300px;
  }
`
export default PageBanner
