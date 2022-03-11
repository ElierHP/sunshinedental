import React from "react"
import Button from "./Button"
import Container from "./Container"
import styled from "@emotion/styled"
import theme from "../css/theme"
import "aos/dist/aos.css"

function OfficeHours() {
  return (
    <Section>
      <Container>
        <Wrapper>
          <OfficeContent data-aos="fade-right" data-aos-duration="1000">
            <h1>Our Office</h1>
            <p>Location: Valencia Shores Blvd</p>
            <p>State/City: Lake Worth, Florida</p>
            <p>Zip Code: 32004</p>
            <BtnContainer>
              <Button
                text="New Patients"
                bgColor="transparent"
                border={`2px solid ${theme.colors.light}`}
                textColor={theme.colors.light}
                href="/newpatients"
              />
            </BtnContainer>
          </OfficeContent>
          <Schedule
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h1>Office Hours</h1>
            <ul>
              <li>
                <p>Monday, Wednesday</p>
                <p>7AM - 3PM</p>
              </li>
              <li>
                <p>Tuesday, Thursday</p>
                <p>8AM-5PM</p>
              </li>
              <li>
                <p>Friday, Saturday</p>
                <p>9AM-2PM</p>
              </li>
              <li>
                <p>Sunday: Closed</p>
                <p>Emergency Only</p>
              </li>
            </ul>
          </Schedule>
        </Wrapper>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  background-color: ${theme.colors.primary};
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 3rem;
  li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  h1 {
    color: white;
  }
  p {
    color: white;
  }
  ${theme.mq()[2]} {
    padding-left: 6rem;
    li {
      grid-gap: 3rem;
    }
  }
  ${theme.mq()[1]} {
    grid-template-columns: 1fr;
    padding: 1rem;
    li {
      grid-gap: 0;
    }
  }
`

const BtnContainer = styled.div`
  width: 50%;
  ${theme.mq()[1]} {
    width: 50%;
    margin: auto;
  }
`

const OfficeContent = styled.div`
  ${theme.mq()[1]} {
    text-align: center;
    h1 {
      padding-top: 2rem;
    }
  }
`

const Schedule = styled.div`
  ${theme.mq()[1]} {
    text-align: center;
    h1 {
      padding-top: 2rem;
    }
  }
  ${theme.mq()[0]} {
    text-align: left;
    h1 {
      text-align: center;
    }
    p:nth-of-type(2) {
      text-align: right;
    }
  }
`

export default OfficeHours
