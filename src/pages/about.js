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
      text="Our dentists are all professional trained experts in their field, we can guarantee your safety and well-being at Sunshine Dental."
      btnText="Our Services"
      href="/services"
      img={Doctor}
    />
    <OurDoctors />
    <ScheduleAppointment />
  </Layout>
)

export default About
