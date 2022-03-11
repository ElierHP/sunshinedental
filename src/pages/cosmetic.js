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
import botoxfilter from "../images/botoxfilter.svg"
import bridges from "../images/bridges.svg"
import veneers2 from "../images/veneers2.svg"
import "aos/dist/aos.css"

function cosmetic() {
  return (
    <Layout>
      <SEO title="Cosmetic" />
      <ServicesHeader
        title={`Cosmetic & Restoration`}
        subtitle="Achieve the smile of your dreams"
        imgNum={0}
      />
      <ServicesOverview title="Overview">
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          Beautiful, natural, undetectable. A smile that is distinctly you.
          We’ve seen first-hand the impact our work has had in the lives of our
          patients. Your smile can bring out the beauty in yourself, the beauty
          in others, and your smile can change the world. Every service at
          Sunshine Dental is carefully approached to be as undetectable and
          natural looking as possible. Whether we’re working on your front-most
          tooth or your furthest back molar, you can count on us to make it
          blend seamlessly with the rest of your smile.
        </p>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-offset="0"
        >
          Our cosmetic services aren’t only meant to improve the look of your
          smile, but to also improve dental complications and diseases such as a
          misaligned bite, halitosis, and gingivitis. If you have been putting
          off your dental visit for some time now, we advise you to not wait
          another minute. We are here to create a calm environment to soothe
          away any fear or hesitation you may have before your appointment. You
          will be amazed at what we can achieve once we begin working together!
        </p>
      </ServicesOverview>
      <ServiceCards
        data={[
          {
            title: "Bridges",
            text:
              "Dental bridges are effective cosmetic treatments that can provide beautiful results while helping to improve speaking, chewing, and a variety of other problems associated with missing teeth.",
            btn: "Contact Us",
            src: bridges,
            key: 0,
            alt: "bridges",
            href: "/contact",
            delay: "100",
          },
          {
            title: "Veneers",
            text:
              "Veneers are thin, decorative coverings laid over your natural teeth, used to conceal a variety of imperfections such as chips, cracks, stains, gaps and alignment issues, and worn or disproportionate teeth.",
            btn: "Contact Us",
            src: veneers2,
            key: 1,
            alt: "veneers",
            href: "/contact",
            delay: "200",
          },
          {
            title: "Botox & Filler",
            text:
              "Our specially-trained doctors are certified to responsibly and strategically administer Botox® therapy and dermal fillers for therapeutic purposes, or to help you achieve a more youthful appearance",
            btn: "Contact Us",
            src: botoxfilter,
            key: 2,
            alt: "botox-and-filler",
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

export default cosmetic
