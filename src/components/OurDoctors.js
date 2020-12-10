import React from "react"
import Container from "./Container"
import styled from "@emotion/styled"
import theme from "../css/theme"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

function OurDoctors({ name, title, text, imgNum }) {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "doctors" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const doctorData = [
    {
      name: "John Doe",
      title: "Dentist",
      text:
        "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,nam no suscipit quaerendum. At nam minimum ponderum. Est audiamanimal molestiae te. Ex duo eripuit mentitum. Et has minim elitrintellegat. Mea aeterno eleifend antiopam ad, nam no suscipitquaerendum. At nam minimum ponderum. Est audiam animal molestiaete. Ex duo eripuit mentitum.",
      img: data.allFile.nodes[2].childImageSharp.fluid,
      display: "block",
    },
    {
      name: "John Doe",
      title: "Dentist",
      text:
        "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,nam no suscipit quaerendum. At nam minimum ponderum. Est audiamanimal molestiae te. Ex duo eripuit mentitum. Et has minim elitrintellegat. Mea aeterno eleifend antiopam ad, nam no suscipitquaerendum. At nam minimum ponderum. Est audiam animal molestiaete. Ex duo eripuit mentitum.",
      img: data.allFile.nodes[0].childImageSharp.fluid,
      display: "block",
    },
    {
      name: "John Doe",
      title: "Dentist",
      text:
        "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,nam no suscipit quaerendum. At nam minimum ponderum. Est audiamanimal molestiae te. Ex duo eripuit mentitum. Et has minim elitrintellegat. Mea aeterno eleifend antiopam ad, nam no suscipitquaerendum. At nam minimum ponderum. Est audiam animal molestiaete. Ex duo eripuit mentitum.",
      img: data.allFile.nodes[1].childImageSharp.fluid,
      display: "none",
    },
  ]

  return (
    <Section>
      <Container>
        <h1>Meet the Doctors</h1>
        {doctorData.map(e => (
          <div>
            <Content>
              <ImgContainer>
                <StyledImg fluid={e.img} />
              </ImgContainer>
              <div>
                <Titles>
                  <h3>{e.name}</h3>
                  <p>{e.title}</p>
                </Titles>
                <p>{e.text}</p>
              </div>
            </Content>
            <div
              //Line CSS
              css={css`
                width: 5px;
                height: 100px;
                background-color: ${theme.colors.dark};
                margin: 5rem auto;
                display: ${e.display};
              `}
            />
          </div>
        ))}
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: ${theme.space[2]}rem 0 ${theme.space[1]}rem 0;
  h1 {
    text-align: center;
    padding-bottom: ${theme.space[2]}rem;
  }
  ${theme.mq()[1]} {
    h1 {
      padding-bottom: 3rem;
    }
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-items: center;
  align-items: center;
  grid-gap: 2rem;
  p {
    margin-bottom: 0;
  }
  ${theme.mq()[2]} {
    grid-template-columns: 1fr 2fr;
    p {
      padding-right: 2rem;
    }
    ${theme.mq()[1]} {
      grid-template-columns: 1fr;
      text-align: center;
      p {
        padding: 0 2rem;
      }
    }
  }
`
const ImgContainer = styled.div`
  width: 250px;
`
const StyledImg = styled(Img)`
  border-radius: 50%;
  width: 100%;
`

const Titles = styled.div`
  display: flex;
  h3 {
    margin-right: 0.5rem;
  }
  ${theme.mq()[1]} {
    display: block;
    text-align: center;
    h3 {
      margin: 1rem 0 0.3rem 0;
    }
    p {
      padding: 0 0 1.5rem 0;
    }
  }
`
export default OurDoctors
