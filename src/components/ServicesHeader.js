import React from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import theme from "../css/theme"
import { useStaticQuery, graphql } from "gatsby"

function ServicesHeader({ title, subtitle, imgNum }) {
  const data = useStaticQuery(graphql`
    {
      desktop: allFile(
        filter: { relativeDirectory: { eq: "servicebanners" } }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  const imageData = [
    data.desktop.nodes[0].childImageSharp.fluid,
    data.desktop.nodes[1].childImageSharp.fluid,
    data.desktop.nodes[2].childImageSharp.fluid,
  ]
  return (
    <StyledBackgroundImage Tag="section" fluid={imageData[imgNum]}>
      <Content>
        <h4>{subtitle}</h4>
        <h1>{title}</h1>
      </Content>
    </StyledBackgroundImage>
  )
}

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 40vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(116, 16, 16, 0.6);
  h4 {
    color: ${theme.colors.light};
    margin-bottom: 0.5rem;
    font-weight: ${theme.fontWeights.body};
  }
  h1 {
    color: ${theme.colors.light};
  }
  ${theme.mq()[0]} {
    text-align: center;
  }
`
export default ServicesHeader
