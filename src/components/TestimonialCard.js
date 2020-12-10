import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import theme from "../css/theme"

function Testimonials({ image, text, name }) {
  return (
    <Container>
      <Wrapper>
        <ImageContaier>
          <Image fixed={image} />
        </ImageContaier>
        <Content>
          <p>{text}</p>
          <h4>{name}</h4>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 2rem;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 3rem;
  background-color: ${theme.colors.secondary};
  border-radius: 0.5rem;
  ${theme.mq()[0]} {
    display: flex;
    flex-direction: column;
  }
`

const ImageContaier = styled.div`
  margin: auto;
  ${theme.mq()[0]} {
    margin-bottom: 1rem;
  }
`

const Content = styled.div``

const Image = styled(Img)`
  border-radius: 50%;
`
export default Testimonials
