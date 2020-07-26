import React from "react"

import { useForm } from "react-hook-form"
import Title from "../Title"

import { Container } from "./styles"

function Form() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <div>
      <Container>
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
              {errors.exampleRequired && <span>This field is required</span>}
            </label>
            <button>ENVIAR</button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Form
