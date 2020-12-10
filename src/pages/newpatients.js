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
      text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum."
      btnText={`Call us at ${theme.phone}`}
      href={`tel:${theme.phone}`}
      img={Nurse}
    />
    <PatientProcess />
    <ScheduleAppointment />
  </Layout>
)

export default NewPatients
