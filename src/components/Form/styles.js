import styled from "styled-components"

export const Container = styled.div`
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
    width: 80%;
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

  @media only screen and (max-width: 690px) {
    form {
    }
  }
`
