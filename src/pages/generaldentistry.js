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
import teethcleanings from "../images/teethcleanings.svg"
import fillings from "../images/fillings.svg"
import rootcanals from "../images/rootcanals.svg"
import "aos/dist/aos.css"

function generaldentistry() {
  return (
    <Layout>
      <SEO title="General Dentistry" />
      <ServicesHeader
        title="General Dentistry"
        subtitle="Valencia Shores Dentist"
        imgNum={1}
      />
      <ServicesOverview title="Overview">
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          We handle general dentistry with the same skill, precision, and care
          that we approach our specialty work with. Teeth cleaning, fillings,
          crowns, bridges, root canal, dentures are all approached with
          meticulous skill and an attention to detail that’s hard to find
          anywhere else. We take pride in ensuring that you have the very best
          dental experience possible. We focus on you, and making sure your
          smile is always at its best and brightest so you feel confident in
          sharing it with the world.
        </p>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-offset="0"
        >
          Our practice offers an array of dental services meant to help the
          people in our community. From basic services such as routine x-rays
          and cleanings; to smile makeovers such as veneers, crowns, Invisalign;
          to surgical and emergency needs that are meant to alleviate any oral
          pain and discomfort you may be experiencing. No matter which service
          you or your loved one comes in for, we aim in making your visit as
          comfortable as possible!
        </p>
      </ServicesOverview>
      <ServiceCards
        data={[
          {
            title: "Teeth Cleanings",
            text:
              "We focus on you, and making sure your smile is always at its best and brightest so you feel confident in sharing it with the world.”",
            btn: "Contact Us",
            src: teethcleanings,
            key: 0,
            alt: "teeth-cleanings",
            href: "/contact",
            delay: "100",
          },
          {
            title: "Fillings & Crowns",
            text:
              "At Taylorview Dental we offer white (composite)as well as silver (amalgam) fillings to restore your teeth back into function.",
            btn: "Contact Us",
            src: fillings,
            key: 1,
            alt: "fillings-&-crowns",
            href: "/contact",
            delay: "200",
          },
          {
            title: "Root Canals & Bridges",
            text:
              "When the nerve of the tooth becomes diseased, infected or inflamed,  it must be treated to relieve both pain and infection",
            btn: "Contact Us",
            src: rootcanals,
            key: 2,
            alt: "root-canals-&-bridges",
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

export default generaldentistry
