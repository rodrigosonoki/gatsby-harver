import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 800px;
  background: rgb(255, 153, 102);
  background: linear-gradient(
    144deg,
    rgba(255, 153, 102, 1) 0%,
    rgba(241, 113, 116, 1) 65%
  );
  padding: 48px 48px 60px 48px;

  div {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    height: 560px;
    justify-content: center;

    img {
      display: none;
    }
  }
`

export const Title = styled.div`
  color: #fff;
  width: 50%;
  flex-direction: column;
  align-items: flex-start;

  p {
    margin: 8px 0 16px;
    font-family: Montserrat;
    font-weight: 300;
    font-size: 18px;
  }

  @media only screen and (max-width: 900px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    p {
      margin: 8px 0 24px;
    }
  }
`
