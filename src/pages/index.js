import React from "react"
import Layout from "../templates/layout"
import Form from "../components/Form"
import HowMuchCard from "../components/HowMuch"
import Steps from "../components/Steps"
import Arguments from "../components/Arguments"
import Hero from "../components/Hero"

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
