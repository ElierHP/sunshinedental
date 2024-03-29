import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import theme from "../css/theme"
import styled from "@emotion/styled"
import Container from "../components/Container"
import "aos/dist/aos.css"

function ContactForm() {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const success = () => {
    window.location.pathname = "/success"
  }
  return (
    <Container>
      <Heading
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-offset="0"
      >
        How can we help you today?
      </Heading>
      <Wrapper>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(10, "Must be 30 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 30 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            phone: Yup.number().required("Required"),
            message: Yup.string()
              .min(10, "Must be 10 characters or more")
              .max(300, "Must be 300 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, e) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact", ...values }),
            })
              .then(() => success())
              .catch(error => alert(error))
          }}
        >
          <StyledForm
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <FormWrapper>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                <InputContainer>
                  <label htmlFor="firstName">First Name:</label>
                  <Field name="firstName" type="text" />
                </InputContainer>
                <ErrorContainer>
                  <ErrorMessage name="firstName" />
                </ErrorContainer>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos-offset="0"
              >
                <InputContainer>
                  <label htmlFor="lastName">Last Name:</label>
                  <Field name="lastName" type="text" />
                </InputContainer>
                <ErrorContainer>
                  <ErrorMessage name="lastName" />
                </ErrorContainer>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-offset="0"
              >
                <InputContainer>
                  <label htmlFor="phone">Phone:</label>
                  <Field name="phone" type="tel" />
                </InputContainer>
                <ErrorContainer>
                  <ErrorMessage name="phone" />
                </ErrorContainer>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <InputContainer>
                  <label htmlFor="email">Email:</label>
                  <Field name="email" type="email" />
                </InputContainer>
                <ErrorContainer>
                  <ErrorMessage name="email" />
                </ErrorContainer>
              </div>
            </FormWrapper>

            <TextArea
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <label htmlFor="message">Message:</label>
              <TextAreaInput
                name="message"
                type="textarea"
                as="textarea"
                rows="7"
              />
              <ErrorContainer>
                <ErrorMessage name="message" />
              </ErrorContainer>
            </TextArea>

            <button
              type="submit"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-offset="0"
            >
              Submit
            </button>
          </StyledForm>
        </Formik>
      </Wrapper>
    </Container>
  )
}

const Heading = styled.h1`
  text-align: center;
  margin-top: 2.5rem;
`
const Wrapper = styled.section`
  background-color: #e5e5e5;
  padding: 3rem 6rem 2rem 6rem;
  margin-top: 2rem;
  border-radius: 0.2rem;
  ${theme.mq()[0]} {
    padding: 2rem;
  }
`
//Form
const StyledForm = styled(Form)`
  display: grid;
  label {
    margin-bottom: 0.25rem;
  }
  input {
    border-radius: 0.2rem;
    border: none;
    padding: 0.5rem;
  }
  button {
    background-color: ${theme.colors.primary};
    border: none;
    color: ${theme.colors.light};
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    border-radius: 0.3rem;
    font-size: ${theme.fontSizes[2]}px;
    margin-top: 2rem;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.primaryhover};
      color: ${theme.colors.light};
      transition: all 0.2s ease-in;
    }
  }
`
const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  ${theme.mq()[2]} {
    grid-template-columns: 1fr;
  }
`
const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 0.2rem;
  justify-content: center;
  align-items: center;
  ${theme.mq()[2]} {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`

//Error
const ErrorContainer = styled.div`
  color: red;
  font-size: 14px;
  text-align: right;
  z-index: 10;
`

//Text Area
const TextArea = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  label {
    padding-top: 2rem;
  }
  ${theme.mq()[2]} {
    label {
      padding-top: 4rem;
    }
  }
  ${theme.mq()[0]} {
    label {
      padding-top: 2rem;
    }
  }
`
const TextAreaInput = styled(Field)`
  border: none;
`
export default ContactForm
