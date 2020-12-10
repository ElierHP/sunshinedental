import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./Container"
import TestimonialCard from "./TestimonialCard"
import styled from "@emotion/styled"
import theme from "../css/theme"

function Testimonials() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "testimonials" } }) {
        nodes {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  const cardData = [
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique, eros ut semper vulputate, arcu ante pellentesque eros, quis viverra lacus lorem et nisi. Praesent at efficitur ante. Phasellus placerat pulvinar blandit. Fusce vel ultricies quam, ut lobortis mi. Aliquam fringilla turpis a nibh semper gravida. Nulla varius nisi sit amet fringilla tempus.",
      name: "Bob Marley",
      image: data.allFile.nodes[0].childImageSharp.fixed,
      key: 0,
    },
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique, eros ut semper vulputate, arcu ante pellentesque eros, quis viverra lacus lorem et nisi. Praesent at efficitur ante. Phasellus placerat pulvinar blandit. Fusce vel ultricies quam, ut lobortis mi. Aliquam fringilla turpis a nibh semper gravida. Nulla varius nisi sit amet fringilla tempus.",
      name: "Bob Marley",
      image: data.allFile.nodes[1].childImageSharp.fixed,
      key: 1,
    },
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique, eros ut semper vulputate, arcu ante pellentesque eros, quis viverra lacus lorem et nisi. Praesent at efficitur ante. Phasellus placerat pulvinar blandit. Fusce vel ultricies quam, ut lobortis mi. Aliquam fringilla turpis a nibh semper gravida. Nulla varius nisi sit amet fringilla tempus.",
      name: "Bob Marley",
      image: data.allFile.nodes[2].childImageSharp.fixed,
      key: 2,
    },
  ]
  return (
    <Section>
      <h1>Happy Patients</h1>
      <Container>
        {cardData.map(e => {
          return (
            <TestimonialCard
              text={e.text}
              name={e.name}
              image={e.image}
              key={e.key}
            />
          )
        })}
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: ${theme.space[2]}rem 0 ${theme.space[1]}rem 0;
  h1 {
    text-align: center;
    padding-bottom: ${theme.space[1]}rem;
  }
`

export default Testimonials
