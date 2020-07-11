import React from "react"
import Layout from "../templates/layout"
import Form from "../components/form"
import HowMuchCard from "../components/how-much-card"
import Steps from "../components/steps"
import Arguments from "../components/arguments"
import Hero from "../components/hero"

export default () => (
  <div>
    <Layout>
      <Hero />
      <Arguments />
      <Steps />
      <HowMuchCard />
      <Form />
    </Layout>
  </div>
)
