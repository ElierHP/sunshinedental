import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import OfficeHours from "../components/OfficeHours"
import ImageSection from "../components/ImageSection"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Dentistry at Valencia Shores Blvd" />
    <Hero />
    <OfficeHours />
    <ImageSection showBtn />
    <Services />
    <Testimonials />
  </Layout>
)

export default IndexPage
