import React from "react"
import Layout from "../templates/layout"
import Form from "../components/form"
import HowMuchCard from "../components/how-much-card"
import Steps from "../components/steps"
import Arguments from "../components/arguments"

export default () => (
  <div>
    <Layout>
      <Arguments />
      <Steps />
      <HowMuchCard />
      <Form />
    </Layout>
  </div>
)
