import React from "react"
import styled from "@emotion/styled"
import theme from "../css/theme"
import Container from "./Container"
import Button from "./Button"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"
import "aos/dist/aos.css"

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Wrapper>
          <LogoContainer
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <img src={Logo} alt="sunshine-dental-logo" />
          </LogoContainer>
          <Content
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            <h3>Schedule an appointment with us and we'll reach out to you!</h3>
            <BtnContainer>
              <Button text="Contact Us Today!" href="/contact" />
              <Button
                text="New Patients"
                bgColor="transparent"
                border={`2px solid ${theme.colors.primary}`}
                textColor={theme.colors.primary}
                href="/newpatients"
              />
            </BtnContainer>
          </Content>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <h3>Navigation</h3>
            <ul>
              <li>
                <Link to="/newpatients">New Patients</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <h3>Contact Us</h3>
            <ul>
              <li>Phone: {theme.phone}</li>
              <li>Office: Location: Valencia Shores Blvd</li>
              <li>Lake Worth, Florida</li>
              <li>Open: Monday-Saturday</li>
            </ul>
          </div>
        </Wrapper>
      </Container>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  padding: ${theme.space[3]}rem 0 ${theme.space[1]}rem 0;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 2fr 2fr;
  grid-gap: 4rem;
  align-content: center;
  p {
    font-size: 14px;
  }
  h3 {
    font-size: 20px;
  }
  li {
    list-style: none;
  }
  ${theme.mq()[1]} {
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 1rem;
  }
  ${theme.mq()[0]} {
    grid-template-columns: 1fr;
    text-align: center;
    grid-gap: 2rem;
  }
`

const Content = styled.div`
  margin-left: -2rem;
  padding-right: 1rem;
  ${theme.mq()[1]} {
    margin-left: 0;
    padding-right: 2rem;
  }
  ${theme.mq()[0]} {
    padding-right: 0;
    text-align: center;
  }
`

const BtnContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  width: 90%;
  ${theme.mq()[0]} {
    margin: auto;
  }
`
const LogoContainer = styled.div`
  ${theme.mq()[1]} {
    display: none;
  }
`

export default Footer
