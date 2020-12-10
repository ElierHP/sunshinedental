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
import tooth from "../images/tooth.svg"
import toothbrush from "../images/toothbrush.svg"
import dentalhealth from "../images/dentalhealth.svg"

function cosmetic() {
  return (
    <Layout>
      <SEO title="General Dentistry" />
      <ServicesHeader
        title={`Cosmetic & Restoration`}
        subtitle="Achieve the smile of your dreams"
        imgNum={0}
      />
      <ServicesOverview title="Overview">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tristique, eros ut semper vulputate, arcu ante pellentesque eros, quis
          viverra lacus lorem et nisi. Praesent at efficitur ante. Phasellus
          placerat pulvinar blandit. Fusce vel ultricies quam, ut lobortis mi.
          Aliquam fringilla turpis a nibh semper gravida. Nulla varius nisi sit
          amet fringilla tempus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Fusce tristique, eros ut semper vulputate, arcu ante
          pellentesque eros, quis viverra lacus lorem et nisi. Praesent at
          efficitur ante. Phasellus placerat pulvinar blandit. Fusce vel
          ultricies quam, ut lobortis mi. Aliquam fringilla turpis a nibh semper
          gravida. Nulla varius nisi sit amet fringilla tempus.
        </p>
        <p>
          Phasellus placerat pulvinar blandit. Fusce vel ultricies quam, ut
          lobortis mi. Aliquam fringilla turpis a nibh semper gravida. Nulla
          varius nisi sit amet fringilla tempus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Fusce tristique, eros ut semper
          vulputate, arcu ante pellentesque eros, quis viverra lacus lorem et
          nisi. Praesent at efficitur ante. Phasellus placerat pulvinar blandit.
          Fusce vel ultricies quam, ut lobortis mi. Aliquam fringilla turpis a
          nibh semper gravida. Nulla varius nisi sit amet fringilla tempus.
        </p>
      </ServicesOverview>
      <ServiceCards
        data={[
          {
            title: "Teeth Straightening",
            text:
              "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
            btn: "Contact Us",
            src: dentalhealth,
            key: 0,
            alt: "teeth-straightening",
          },
          {
            title: "Healthier Smile",
            text:
              "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
            btn: "Contact Us",
            src: toothbrush,
            key: 1,
            alt: "healthier-smile",
          },
          {
            title: "Clear Aligners",
            text:
              "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.",
            btn: "Contact Us",
            src: tooth,
            key: 2,
            alt: "clear-aligners",
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

export default cosmetic
