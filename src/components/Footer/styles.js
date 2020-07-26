import styled from "styled-components"

export const Container = styled.footer`
  background: #414960;

  height: 100%;
  padding: 24px 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;

  @media only screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Column = styled.div`
  span {
    font-size: 16px;
    color: #fff;
    font-family: Montserrat;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: #fff;
  }

  ul {
    font-size: 14px;
    list-style: none;
  }

  ul li,
  p,
  div {
    margin-top: 24px;
    font-family: Montserrat;
  }
  ul a {
    text-decoration: none;
    color: #fff;
  }

  ul a:visited {
    color: #fff;
  }

  div {
    fill: rgba(255, 255, 255, 0.5);
    width: 148px;
    display: flex;
    justify-content: space-between;
  }

  /* RESPONSIVE */
  @media only screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
