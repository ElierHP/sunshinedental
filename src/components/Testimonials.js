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
        "This team of awesome people saved me on a Sunday morning from some unbearable pain. Dr. Quintero was an amazing professional from the first appointment to the last. My root canal and my crown went perfect. Thank you and your team for taking great care of me!!!",
      name: "Alex Kaplunov",
      image: data.allFile.nodes[1].childImageSharp.fixed,
      key: 0,
    },
    {
      text:
        "The professionalism, level of care, knowledge of the staff and all around experience in this offic exactly what my family was looking for. The staff explains things/procedures in a way that the patient can understand and is comfortable with. Thank you for an excellent experience.",
      name: "Leah Rosenfeld",
      image: data.allFile.nodes[0].childImageSharp.fixed,
      key: 1,
    },
    {
      text:
        "I was extremely impressed by the level of professionalism and quality of care provided. Dr. Quintero was detail-oriented and thorough. He helped me feel calm and comfortable throughout my whole visit! The staff was also very kind and made my experience a pleasant one. I highly recommend Care Dental Wellington!!",
      name: "Daniel Alvarez",
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
