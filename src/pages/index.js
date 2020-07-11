import React from "react"
import Layout from "../templates/layout"
import Form from "../components/form"
import HowMuchCard from "../components/how-much-card"
import Steps from "../components/steps"

export default () => (
  <div>
    <Layout>
      <HowMuchCard />
      <Steps />
      <Form />
    </Layout>
  </div>
)
