import React from "react"
import Container from "../components/Container"
import styled from "@emotion/styled"
import Button from "../components/Button"
import theme from "../css/theme"

function ScheduleAppointment() {
  return (
    <Section>
      <Container>
        <h1>Schedule an appointment today!</h1>
        <BtnContainer>
          <Button
            text={`Call us at ${theme.phone}`}
            telRef={`Tel:${theme.phone}`}
            bgColor={theme.colors.primaryhover}
            textColor={theme.colors.light}
            hoverColor="#a52503"
            isCallBtn={true}
          />
        </BtnContainer>
      </Container>
    </Section>
  )
}
const Section = styled.section`
  text-align: center;
  background-color: ${theme.colors.primary};
  padding: 4rem;
  margin: ${theme.space[2]}rem 0 ${theme.space[1]}rem 0;
  h1 {
    color: ${theme.colors.light};
  }
  ${theme.mq()[1]} {
    padding: 3rem 1rem 3rem 1rem;
  }
`

const BtnContainer = styled.div`
  margin: auto;
  width: 30%;
  ${theme.mq()[2]} {
    width: 50%;
  }
  ${theme.mq()[1]} {
    width: 80%;
  }
`

export default ScheduleAppointment
