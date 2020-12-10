import React from "react"
import Container from "./Container"
import styled from "@emotion/styled"
import theme from "../css/theme"
import Card from "../components/Card"

function ServiceCards({ data }) {
  return (
    <Section>
      <Container>
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
                bgColor={theme.colors.primaryhover}
                hoverColor={theme.colors.primary}
              />
            )
          })}
        </Wrapper>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: ${theme.space[1]}rem 0 ${theme.space[3]}rem 0;
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
export default ServiceCards
