import React, { useState } from "react"
import axios from "axios"

import { useForm } from "react-hook-form"
import Title from "../../../globalComponents/Title"

import { Container, Content, StyledCheck } from "./styles"

function Form() {
  /* HOOKS
   */

  //useState
  const { register, handleSubmit, errors } = useForm()
  const [apiResponse, setApiResponse] = useState("")

  //FUNCTIONS
  const onSubmit = async data => {
    const response = await axios.post(
      "https://harver-api.herokuapp.com/lead/create",
      data
    )
    setApiResponse(response)
  }

  return (
    <Container>
      {(() => {
        if (apiResponse.status === 200) {
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
                p="Enquanto não terminamos de desenvolver nossa plataforma, estamos recebendo os pedidos através do formulário abaixo!"
              />
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name-input">
                  Nome
                  <input
                    name="name"
                    id="name-input"
                    type="text"
                    placeholder="João das Neves"
                    ref={register({ required: true })}
                  />
                  {errors.name && <span>O nome é obrigatório</span>}
                </label>
                <label htmlFor="email-input">
                  E-mail
                  <input
                    name="email"
                    id="email-input"
                    type="email"
                    placeholder="joao@snow.com"
                    ref={register({ required: true })}
                  />
                  {errors.email && <span>O e-mail é obrigatório</span>}
                </label>
                <label htmlFor="phone-input">
                  WhatsApp
                  <input
                    name="phone"
                    id="phone-input"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    ref={register({ required: true })}
                  />
                  {errors.phone && <span>O WhatsApp é obrigatório</span>}
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
