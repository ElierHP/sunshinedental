import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import Button from "./Button"
import Container from "./Container"
import theme from "../css/theme"

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero-image.jpg" }) {
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
    <StyledBackgroundImage Tag="section" fluid={imageData} alt="girl-smile">
      <Container>
        <Wrapper>
          <Content>
            <h1>We want you to love your smile.</h1>
            <p>
              Schedule an appointment with us and experience the Sunshine Dental
              difference.
            </p>
            <BtnContainer>
              <Button href="/contact" text="Contact Us" />
              <Button
                text="New Patients"
                bgColor="transparent"
                border={`2px solid ${theme.colors.primary}`}
                textColor={theme.colors.primary}
                href="/newpatients"
              />
            </BtnContainer>
          </Content>
        </Wrapper>
      </Container>
    </StyledBackgroundImage>
  )
}

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 90vh;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Wrapper = styled.div`
  position: absolute;
  top: 7rem;
  ${theme.mq()[0]} {
    margin: auto;
    position: relative;
  }
`
const Content = styled.div`
  background-color: rgba(246, 246, 246, 0.85);
  width: 70%;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: -5px 5px 5px #d3c7c5;
  ${theme.mq()[0]} {
    width: 100%;
  }
`
const BtnContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  ${theme.mq()[0]} {
    grid-template-columns: 1fr;
    width: 100%;
  }
`

export default Hero
