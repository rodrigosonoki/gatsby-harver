import styled from "styled-components"

export const Container = styled.div`
  height: 664px;
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

export const StyledCheck = styled.div`
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #f17174;
    stroke-miterlimit: 10;
    box-shadow: inset 0px 0px 0px #fff;
    animation: fill 0.4s ease-in-out 0.4s forwards,
      scale 0.3s ease-in-out 0.9s both;
  }

  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #fff;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }

  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes scale {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }

  @keyframes fill {
    100% {
      box-shadow: inset 0px 0px 0px 30px #fff;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-between;
  margin: auto;
  span {
    color: #fff;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 24px;
  }
`
