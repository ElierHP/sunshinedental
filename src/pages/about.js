import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageBanner from "../components/PageBanner"
import OurDoctors from "../components/OurDoctors"
import ScheduleAppointment from "../components/ScheduleAppointment"
import Doctor from "../images/doctor.svg"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <PageBanner
      title="About Us"
      subtitle="We're here to help"
      text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
antiopam ad, nam no suscipit quaerendum."
      btnText="Our Services"
      href="/services"
      img={Doctor}
    />
    <OurDoctors />
    <ScheduleAppointment />
  </Layout>
)

export default About
