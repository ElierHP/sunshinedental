import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "@emotion/styled"
import Container from "./Container"
import theme from "../css/theme"
import Button from "./Button"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => {
  const [toggler, setToggler] = useState(false)
  const [clickToggler, setClickToggler] = useState(false)
  const NavUl = styled.ul`
    margin-left: auto;
    padding-right: 3rem;
    ${theme.mq()[2]} {
      padding-right: 0;
    }
    ${theme.mq()[1]} {
      display: ${toggler ? "grid" : "none"};
      grid-template-columns: 1fr;
      position: absolute;
      z-index: 10;
      top: 40px;
      left: 0;
      width: 100%;
      text-align: center;
      background-color: ${theme.colors.secondary};
      line-height: 2.2rem;
    }
  `
  const Dropdown = styled.ul`
    display: none;
    grid-template-columns: 1fr;
    position: absolute;
    margin: 0;
    padding: 0 !important;
    top: 75px;
    left: 0;
    background-color: ${theme.colors.secondary};
    z-index: 10;
    li {
      margin: 0;
    }
    ${theme.mq()[2]} {
      top: 70px;
    }
    ${theme.mq()[1]} {
      display: ${clickToggler ? "block" : "none"};
      position: relative;
      top: 0;
    }
  `
  const Hamburger = styled.div`
    display: none;
    margin-left: auto;
    ${theme.mq()[1]} {
      display: block;
    }
    div {
      background-color: ${theme.colors.dark};
      width: 30px;
      height: ${toggler ? "3px" : "5px"};
      margin-bottom: ${toggler ? 0 : "0.25rem"};
    }
    div:first-of-type {
      transform: ${toggler ? "rotate(45deg)" : "rotate(0deg)"};
      border-radius: ${toggler ? "1rem" : "0"};
    }
    div:nth-of-type(2) {
      transform: ${toggler ? "rotate(-45deg)" : "rotate(0deg)"};
      border-radius: ${toggler ? "1rem" : "0"};
      margin-top: ${toggler ? "-3px" : "0"};
    }
    div:last-child {
      display: ${toggler ? "none" : "block"};
    }
  `

  return (
    <MainHeader>
      <Container>
        <NavContainer>
          <Link to="/">
            <img src={Logo} alt="sunshine-dental-logo" />
          </Link>
          <NavUl>
            <li>
              <NavLink to="/newpatients">New Patients</NavLink>
            </li>
            <DropdownLi>
              <ALink
                onClick={() => {
                  clickToggler ? setClickToggler(false) : setClickToggler(true)
                }}
              >
                Services<span>{">"}</span>
              </ALink>
              <Dropdown>
                <li>
                  <DropDownLink to="/generaldentistry">
                    General Dentristry
                  </DropDownLink>
                </li>
                <li>
                  <DropDownLink to="/invisalign">Invisalign</DropDownLink>
                </li>
                <li>
                  <DropDownLink to="/cosmetic">
                    Cosmetic {"&"} Restoration
                  </DropDownLink>
                </li>
              </Dropdown>
            </DropdownLi>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </NavUl>
          <BtnContainer>
            <Button
              text={`Call us at ${theme.phone}`}
              telRef={`tel:${theme.phone}`}
              isCallBtn={true}
            />
          </BtnContainer>
          <Hamburger
            onClick={() => (toggler ? setToggler(false) : setToggler(true))}
          >
            <div></div>
            <div></div>
            <div></div>
          </Hamburger>
        </NavContainer>
      </Container>
    </MainHeader>
  )
}

const MainHeader = styled.header`
  background-color: ${theme.colors.secondary};
  padding: 0.5rem;
  position: relative;
`

const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  li {
    list-style: none;
    display: inline;
    margin-right: 1rem;
    font-size: ${theme.fontSizes[0]}px;
  }
  ${theme.mq()[2]} {
    grid-template-columns: 1fr 2fr;
  }
  ${theme.mq()[1]} {
    grid-template-columns: 1.5fr 1fr;
    li {
      padding: 0;
      margin: 0;
    }
  }
`

const BtnContainer = styled.div`
  ${theme.mq()[2]} {
    display: none;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.dark};
  letter-spacing: 0.5px;
  padding: 2rem 0 2rem 0;
  &:hover {
    color: ${theme.colors.primary};
    transition: all 0.2s ease-in;
  }
  ${theme.mq()[1]} {
    padding: 0;
    display: block;
    width: 100%;
    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.light};
      transition: all 0.2s ease-in;
    }
  }
`

const A = NavLink.withComponent("a")
const ALink = styled(A)`
  cursor: pointer;
`
//DropDown Menu
const DropdownLi = styled.li`
  position: relative;
  padding: 2rem 0 2rem 0;
  span {
    text-align: center;
    font-weight: 700;
    display: inline-block;
    transform: rotateZ(90deg);
    margin-left: 0.25rem;
  }
  //Hover DropDown Menu

  @media (min-width: 768px) {
    ul {
      width: 230px;
    }
    &:hover {
      ul {
        display: grid;
        animation-duration: 0.7s;
        animation-name: opacity;
      }
    }
    ${theme.mq()[1]} {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
  ${theme.mq()[1]} {
    padding: 0 !important;
  }
  @keyframes opacity {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

const DropDownLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: block;
  color: ${theme.colors.dark};
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.light};
    transition: all 0.2s ease-in;
  }
  ${theme.mq()[1]} {
    padding: 0;
  }
`

//GATSBY DEFAULT
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
