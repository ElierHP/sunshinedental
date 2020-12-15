import React from "react"
import styled from "@emotion/styled"
import theme from "../css/theme"

function PatientProcess() {
  return (
    <Wrapper>
      <div>
        <h4>Step One</h4>
        <h1>Come Prepared</h1>
        <p>
          Thank you for wanting to take care of your dental health with us,
          there is a few things we'd love for you to know about prior to the
          first visit.
        </p>
        <p>Bring your Dental Insurance Card</p>
      </div>
      <Line />
      <div>
        <h4>Step Two</h4>
        <h1>Get to know you</h1>
        <p>
          During your first visit, we will review your dental history and take
          necessary X-rays of your teeth and mouth. Then, the doctor will meet
          with you to help you create your own individual treatment plan, and
          answer any questions that you may have.
        </p>
      </div>
      <Line />
      <div>
        <h4>Step Three</h4>
        <h1>Regular Checkups</h1>
        <p>
          The ADA recommends visiting your dentist at least every six months for
          regular checkups and routine cleanings to keep your teeth and gums
          healthy.
        </p>
        <p>
          We understand that life is busy, so when you’re preparing for your
          visit to Sunshine Dental, please note that your appointments can last
          between 45 and 90 minutes.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 60%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  justify-items: center;
  padding-top: ${theme.space[2]}rem;
  div p:nth-child(4) {
    margin-bottom: 0;
  }
`

const Line = styled.div`
  width: 5px;
  height: 100px;
  background-color: ${theme.colors.dark};
  margin: 5rem 0 5rem 0;
`
export default PatientProcess
