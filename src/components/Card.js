import React from "react"
import Button from "./Button"
import styled from "@emotion/styled"
import theme from "../css/theme"

function Card({ title, text, btn, src, href, bgColor, hoverColor, alt }) {
  return (
    <Wrapper>
      <ImgContainer>
        <img src={src} alt={alt} />
      </ImgContainer>
      <h3>{title}</h3>
      <p>{text}</p>
      <BtnContainer>
        <Button
          text={btn}
          href={href || "/services"}
          bgColor={bgColor}
          hoverColor={hoverColor}
        />
      </BtnContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  ${theme.mq()[1]} {
    background-color: ${theme.colors.gray};
    width: 60%;
    margin: auto;
    padding: 2rem;
    border-radius: 1rem;
  }
  ${theme.mq()[0]} {
    width: 100%;
  }
`

const ImgContainer = styled.div`
  width: 160px;
  margin: auto;
`

const BtnContainer = styled.div`
  width: 50%;
  margin: auto;
  ${theme.mq()[2]} {
    width: 100%;
  }
  ${theme.mq()[1]} {
    width: 50%;
    margin-bottom: 3rem;
  }
  ${theme.mq()[0]} {
    width: 80%;
  }
`

export default Card
