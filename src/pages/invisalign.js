import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesHeader from "../components/ServicesHeader"
import ServicesOverview from "../components/ServicesOverview"
import OfficeHours from "../components/OfficeHours"
import ImageSection from "../components/ImageSection"
import ColorBlock from "../components/ColorBlock"
import theme from "../css/theme"
import ServiceCards from "../components/ServiceCards"
import healthiersmile from "../images/healthiersmile.svg"
import teethwhitenings from "../images/teethwhitenings.svg"
import teethstraight from "../images/teethstraight.svg"
import "aos/dist/aos.css"

function invisalign() {
  return (
    <Layout>
      <SEO title="Invisalign" />
      <ServicesHeader
        title="Invisalign"
        subtitle="Trained Orthodontist"
        imgNum={2}
      />
      <ServicesOverview title="Overview">
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-offset="0"
        >
          Invisalign is a great tooth straightening option for both adult
          patients and teenagers who are looking for an alternative to
          traditional metal braces. This means you can kiss the days of broken
          wires and flossing nightmares goodbye! Instead, these custom-made
          clear dental aligners are easy to remove when you’re going to eat and
          brush your teeth and can provide picture-worthy results in just a
          matter of months.
        </p>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-offset="0"
        >
          Depending on the complexity of your case, you could complete your
          whole Invisalign treatment in as little as 6 months, but you’ll start
          seeing results much sooner! If you’re ready to start your journey to a
          straighter smile, contact our office today and we’ll schedule your
          appointment.
        </p>
      </ServicesOverview>
      <ServiceCards
        data={[
          {
            title: "Teeth Straightening",
            text:
              "In most cases, after 6 months your teeth will be completely straightened.",
            btn: "Contact Us",
            src: teethstraight,
            key: 0,
            alt: "teeth-straightening",
            href: "/contact",
            delay: "100",
          },
          {
            title: "Healthier Smile",
            text:
              "In just a matter of weeks you can start seeing a healther smile.",
            btn: "Contact Us",
            src: healthiersmile,
            key: 1,
            alt: "healthier-smile",
            href: "/contact",
            delay: "200",
          },
          {
            title: "Clear Aligners",
            text:
              "The aligners are completely clear, no metal braces or wires required!",
            btn: "Contact Us",
            src: teethwhitenings,
            key: 2,
            alt: "clear-aligners",
            href: "/contact",
            delay: "300",
          },
        ]}
      />
      <OfficeHours />
      <ImageSection
        title="First Time Patient?"
        btnText="New Patients"
        btnRef="/newpatients"
        bgColor={theme.colors.primaryhover}
        hoverColor={theme.colors.primary}
      />
      <ColorBlock />
    </Layout>
  )
}

export default invisalign
