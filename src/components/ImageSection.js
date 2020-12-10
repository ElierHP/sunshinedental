import React from "react"
import Button from "./Button"
import theme from "../css/theme"
import styled from "@emotion/styled"
import building from "../images/building.svg"
import Container from "./Container"

function ImageSection({
  title,
  text,
  btnText,
  btnText2,
  btnRef,
  btnRef2,
  showBtn,
  bgColor,
  hoverColor,
}) {
  return (
    <section>
      <Container>
        <Wrapper>
          <div>
            <img src={building} alt="building" />
          </div>
          <Content>
            <h1>{title || "Welcome to Sunshine Dental"}</h1>
            <p>
              {text ||
                "Et has minim elitr intellegat. Mea aeterno eleifend antiopam adnam no suscipit quaerendum. At nam minimum ponderum. Est audiamanimal molestiae te. Ex duo eripuit mentitum."}
            </p>
            <BtnContainer>
              <Button
                text={btnText || "Learn More"}
                href={btnRef || "/about"}
                bgColor={bgColor}
                hoverColor={hoverColor}
              />
              {showBtn && (
                <Button
                  text={btnText2 || "Contact Us"}
                  bgColor="transparent"
                  border={`2px solid ${theme.colors.primary}`}
                  textColor={theme.colors.primary}
                  href={btnRef2 || "/contact"}
                />
              )}
            </BtnContainer>
          </Content>
        </Wrapper>
      </Container>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  padding: ${theme.space[2]}rem 0 ${theme.space[2]}rem 0;
  ${theme.mq()[1]} {
    display: block;
    padding: 4rem;
    text-align: center;
  }
  ${theme.mq()[0]} {
    padding: ${theme.space[2]}rem 0 ${theme.space[2]}rem 0;
  }
`
const Content = styled.div`
  padding: 1.5rem;
  margin-top: 2rem;
`

const BtnContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  ${theme.mq()[0]} {
    grid-template-columns: 1fr;
    width: 100%;
  }
`

export default ImageSection
