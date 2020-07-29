import React, { useState } from "react"

import { useForm } from "react-hook-form"
import Title from "../Title"

import { Container, Content, StyledCheck } from "./styles"

function Form() {
  /* HOOKS
   */

  //useState
  const { register, handleSubmit, errors } = useForm()
  const [apiResponse, setApiResponse] = useState("")

  //FUNCTIONS
  const onSubmit = data => {
    fetch(process.env.API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Rodrigo",
        email: "rosonoki@gmail.com",
        phone: "11997250212",
      }),
    })
      .then(console.log(data))
      .then(response => response.json())
      .then(data => setApiResponse(data))
      .then(console.log(process.env.API_URL))
  }

  return (
    <Container>
      {(() => {
        if (apiResponse.code === "200") {
          return (
            <Content>
              <StyledCheck>
                <svg
                  className="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    className="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
              </StyledCheck>
              <span>
                Obrigado pelo interesse! <br />
                Entraremos em contato o mais rápido possível com você!
              </span>
            </Content>
          )
        } else {
          return (
            <div>
              <Title
                h1="Quer criar sua loja?"
                p="Precisamos dos seus dados de contato pra que possamos fazer o setup da sua loja e incluí-la no nosso marketplace."
              />
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name-input">
                  Nome
                  <input
                    name="name"
                    id="name-input"
                    type="text"
                    placeholder="Rodrigo Sonoki"
                    ref={register({ required: true })}
                  />
                </label>
                {errors.exampleRequired && <span>This field is required</span>}
                <label htmlFor="email-input">
                  E-mail
                  <input
                    name="email"
                    id="email-input"
                    type="email"
                    placeholder="rodrigo@harver.com.br"
                    ref={register({ required: true })}
                  />
                </label>
                {errors.exampleRequired && <span>This field is required</span>}
                <label htmlFor="phone-input">
                  WhatsApp
                  <input
                    name="phone"
                    id="phone-input"
                    type="tel"
                    placeholder="(11)99725-0212"
                    ref={register({ required: true })}
                  />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                </label>
                <button type="submit">ENVIAR</button>
              </form>
            </div>
          )
        }
      })()}
    </Container>
  )
}

export default Form
