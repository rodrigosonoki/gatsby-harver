import React from "react"
import Layout from "../templates/layout"
import Form from "../components/Form"
import HowMuchCard from "../components/HowMuch"
import Steps from "../components/Steps"
import Arguments from "../components/Arguments"
import Hero from "../components/Hero"

//HELMET
import { Helmet } from "react-helmet"

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Harver - Crie. A gente cuida do resto.</title>
    </Helmet>
    <Layout>
      <Hero />
      <Arguments />
      <Steps />
      <HowMuchCard />
      <Form />
    </Layout>
  </div>
)
