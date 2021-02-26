import * as React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ContentBlock from "../components/content-block/content-block"
import ByTheNumbers from "../components/by-the-numbers/by-the-numbers"
import HeroImg from "../images/hero-bg-1.jpg"

const FinancialReliefPage = () => {
  return (
    <Layout>
      <Hero
        bgImg={HeroImg}
        heading={["Financial", <br/>, "Relief"]}
        subheading="BCBSRI helped providers and businesses through the pandemic not just with monetary assistance, but also with empathy and flexibility."
      />
      <ContentBlock
        featNumSymbol="$"
        featNumNumber="25"
        featNumValue="M"
        featNumText="In Premium Relief"
      />
      <ByTheNumbers/>
    </Layout>
  )
}

export default FinancialReliefPage