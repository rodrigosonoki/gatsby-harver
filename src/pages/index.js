import React from "react"
import Layout from "../templates/layout"
import Form from "../components/pageComponents/index/Form"
import HowMuchCard from "../components/pageComponents/index/HowMuch"
import Steps from "../components/pageComponents/index/Steps"
import Arguments from "../components/pageComponents/index/Arguments"
import Hero from "../components/pageComponents/index/Hero"

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
