import React from "react"
import Layout from "../templates/layout"
import Form from "../components/form"
import HowMuchCard from "../components/how-much-card"

export default () => (
  <div>
    <Layout>
      <HowMuchCard></HowMuchCard>
      <Form />
    </Layout>
  </div>
)
