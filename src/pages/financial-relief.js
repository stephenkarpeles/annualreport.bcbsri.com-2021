import * as React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ContentBlock from "../components/content-block/content-block"
import ByTheNumbers from "../components/by-the-numbers/by-the-numbers"
import HorizontalSlider from "../components/horizontal-slider/horizontal-slider"
import HeroImg from "../images/hero-bcg-financial-relief.jpg"

const FinancialReliefPage = () => {
  return (
    <Layout>
      <Hero
        bgImg={HeroImg}
        heading={["Financial", <br/>, "Relief"]}
        subheading="BCBSRI helped providers and businesses through the pandemic not just with monetary assistance, but also with empathy and flexibility."
      />
      <ContentBlock
        bgColor="#fff"
        eyebrow="Financial Relief"
        heading="Delivering premium relief to customers"
        featNumSymbol="$"
        featNumNumber="25"
        featNumValue="M"
        featNumText="In Premium Relief"
        smallNumNumber="723,106"
        smallNumCaption="chilis in salsa"
      />
      <ContentBlock
        bgColor="#F7F9FA"
        eyebrow="Financial Relief"
        heading="Supporting COVID-19 relief efforts"
        featNumSymbol="$"
        featNumNumber="250"
        featNumValue="K"
        featNumText="Donated to COVID-19 relief efforts"
        smallNumNumber="5,108"
        smallNumCaption="visits in 2020"
      />
      <HorizontalSlider
        bgColor="#F7F9FA"
      />
      <ByTheNumbers/>
    </Layout>
  )
}

export default FinancialReliefPage