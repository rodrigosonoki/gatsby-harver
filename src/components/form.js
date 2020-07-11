import React from "react"
import styled from "styled-components"
import Title from "../components/title"

const Container = styled.div`
  height: 100%;
  background: rgb(255, 153, 102);
  background: linear-gradient(
    144deg,
    rgba(255, 153, 102, 1) 0%,
    rgba(241, 113, 116, 1) 65%
  );
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 48px 0 60px;

  h1,
  p {
    color: #fff;
  }

  div {
    width: 100%;
    max-width: 1170px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  label {
    font-family: Montserrat;
    text-align: left;
    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 16px;
    padding: 48px;
    width: 100%;
    max-width: 640px;
    -webkit-box-shadow: 1px 1px 10px 6px #888; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 1px 1px 10px 6px #888; /* Firefox 3.5 - 3.6 */
    box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.2);
  }

  form input {
    height: 48px;
    padding: 8px;
    border: 1px solid rgb(218, 218, 218);
    border-radius: 8px;
    margin: 8px 0 16px;
  }

  form input::placeholder {
    font-family: Poppins;
  }

  form input:focus {
    transition: 0.3s;
    border: 1px solid rgb(66, 179, 255);
  }

  form button {
    height: 48px;
    width: 100%;
    border: none;
    font-family: "Montserrat";
    background: rgb(255, 153, 102);
    background: linear-gradient(
      144deg,
      rgba(255, 153, 102, 1) 0%,
      rgba(241, 113, 116, 1) 65%
    );
    transition: 0.3s;
    color: #fff;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 8px;
  }
`

function Form() {
  return (
    <div>
      <Container>
        <div>
          <Title
            h1="Quer criar sua loja?"
            p="Precisamos dos seus dados de contato pra que possamos fazer o setup da sua loja e incluí-la no nosso marketplace."
          />
          <form>
            <label htmlFor="name-input">
              Nome
              <input id="name-input" type="text" placeholder="Rodrigo Sonoki" />
            </label>
            <label htmlFor="email-input">
              E-mail
              <input
                id="email-input"
                type="email"
                placeholder="rodrigo@harver.com.br"
              />
            </label>
            <label htmlFor="phone-input">
              WhatsApp
              <input id="phone-input" type="tel" placeholder="(11)99725-0212" />
            </label>
            <button>ENVIAR</button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Form