import React from "react"
import Container from "./Container"
import styled from "@emotion/styled"

function ServicesOverview({ title, children }) {
  return (
    <Section>
      <Container>
        <H1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          {title}
        </H1>
        {children}
      </Container>
    </Section>
  )
}

const Section = styled.div`
  padding: 3rem 0 3rem 0;
`

const H1 = styled.h1`
  text-align: left;
`
export default ServicesOverview
