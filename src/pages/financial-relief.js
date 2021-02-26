import * as React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ContentBlock from "../components/content-block/content-block"
import ByTheNumbers from "../components/by-the-numbers/by-the-numbers"
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
      />
      <ContentBlock
        bgColor="#F7F9FA"
        eyebrow="Financial Relief"
        heading="Supporting COVID-19 relief efforts"
        featNumSymbol="$"
        featNumNumber="250"
        featNumValue="K"
        featNumText="Donated to COVID-19 relief efforts"
      />
      <ByTheNumbers/>
    </Layout>
  )
}

export default FinancialReliefPage