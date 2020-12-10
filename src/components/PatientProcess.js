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
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te. Ex duo eripuit mentitum.
        </p>
        <p>Bring your Dental Insurance Card</p>
      </div>
      <Line />
      <div>
        <h4>Step Two</h4>
        <h1>Get to know you</h1>
        <p>
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te. Ex duo eripuit mentitum.
        </p>
      </div>
      <Line />
      <div>
        <h4>Step Three</h4>
        <h1>Regular Checkups</h1>
        <p>
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te. Ex duo eripuit mentitum.
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
