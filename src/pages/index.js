import * as React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import HeroImg from "../images/bg-hero.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        bgImg={HeroImg}
        heading={["Annual", <br/>, "Report"]}
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </Layout>
  )
}

export default IndexPage
