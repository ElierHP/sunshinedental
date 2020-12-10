import React from "react"
import Container from "./Container"
import Card from "./Card"
import styled from "@emotion/styled"
import dentalhealth from "../images/dentalhealth.svg"
import tooth from "../images/tooth.svg"
import toothbrush from "../images/toothbrush.svg"
import theme from "../css/theme"

function Services() {
  const data = [
    {
      title: "General Dentistry",
      text: "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
      btn: "Learn More",
      src: dentalhealth,
      key: 0,
      alt: "general-dentistry",
    },
    {
      title: "Cosmetic",
      text: "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
      btn: "Learn More",
      src: toothbrush,
      key: 1,
      alt: "cosmetic",
    },
    {
      title: "Invisalign",
      text: "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
      btn: "Learn More",
      src: tooth,
      key: 2,
      alt: "invisilign",
    },
  ]
  return (
    <Section>
      <Container>
        <h1>Our Services</h1>
        <Wrapper>
          {data.map(e => {
            return (
              <Card
                title={e.title}
                text={e.text}
                btn={e.btn}
                src={e.src}
                key={e.key}
                alt={e.alt}
              />
            )
          })}
        </Wrapper>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: ${theme.space[2]}rem 0 ${theme.space[2]}rem 0;
  h1 {
    text-align: center;
    padding-bottom: ${theme.space[1]}rem;
  }
  ${theme.mq()[1]} {
    padding: ${theme.space[1]}rem 0 ${theme.space[1]}rem 0;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  ${theme.mq()[1]} {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }
  ${theme.mq()[0]} {
    padding: 0 1rem 0 1rem;
  }
`

export default Services
