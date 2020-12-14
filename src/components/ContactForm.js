import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import theme from "../css/theme"
import styled from "@emotion/styled"
import Container from "../components/Container"

function ContactForm() {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  return (
    <Container>
      <Heading>How can we help you today?</Heading>
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
              .max(300, "Must be 20 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }, e) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact", ...this.state }),
            })
              .then(() => alert("Success!"))
              .catch(error => alert(error))

            e.preventDefault()
          }}
        >
          <StyledForm
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <FormWrapper>
              <div>
                <InputContainer>
                  <label htmlFor="firstName">First Name:</label>
                  <Field name="firstName" type="text" />
                </InputContainer>
                <ErrorContainer>
                  <ErrorMessage name="firstName" />
                </ErrorContainer>
              </div>

              <div>
                <InputContainer>
                  <label htmlFor="lastName">Last Name:</label>
                  <Field name="lastName" type="text" />
                </InputContainer>
                <ErrorContainer>
                  <ErrorMessage name="lastName" />
                </ErrorContainer>
              </div>

              <div>
                <InputContainer>
                  <label htmlFor="phone">Phone:</label>
                  <Field name="phone" type="tel" />
                </InputContainer>
                <ErrorContainer>
                  <ErrorMessage name="phone" />
                </ErrorContainer>
              </div>

              <div>
                <InputContainer>
                  <label htmlFor="email">Email:</label>
                  <Field name="email" type="email" />
                </InputContainer>
                <ErrorContainer>
                  <ErrorMessage name="email" />
                </ErrorContainer>
              </div>
            </FormWrapper>

            <TextArea>
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

            <button type="submit">Submit</button>
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
  background-color: ${theme.colors.gray};
  padding: 3rem 6rem 2rem 6rem;
  margin-top: 2rem;
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
    padding: 0.8rem;
  }
  button {
    background-color: ${theme.colors.primary};
    border: none;
    color: ${theme.colors.light};
    padding: 0.3rem 1.5rem 0.3rem 1.5rem;
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
`
const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
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
`
const TextAreaInput = styled(Field)`
  border: none;
`
export default ContactForm
