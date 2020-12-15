import React from "react"
import PageBanner from "../components/PageBanner"
import Layout from "../components/layout"
import SEO from "../components/seo"
import theme from "../css/theme"
import PatientProcess from "../components/PatientProcess"
import ScheduleAppointment from "../components/ScheduleAppointment"
import Nurse from "../images/nurse.svg"

const NewPatients = () => (
  <Layout>
    <SEO title="New Patients" />
    <PageBanner
      title="What to expect"
      subtitle="Your first visit"
      text="To save you time, we recommend reading our step by step instructions prior to your first appointment. When you are ready, please give us a call!"
      btnText={`Call us at ${theme.phone}`}
      href={`tel:${theme.phone}`}
      img={Nurse}
    />
    <PatientProcess />
    <ScheduleAppointment />
  </Layout>
)

export default NewPatients
