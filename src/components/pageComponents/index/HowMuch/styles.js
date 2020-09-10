import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 60px;
`

export const Cards = styled.div`
  display: flex;
  width: 100%;
  max-width: 1008px;
  justify-content: space-between;

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const StyledCard = styled.div`
  height: 520px;
  width: 320px;
  height: 520px;
  width: 320px;
  background-color: #fff;
  border-radius: 16px;
  -webkit-box-shadow: 1px 1px 10px 6px #888; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 1px 1px 10px 6px #888; /* Firefox 3.5 - 3.6 */
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 8px auto;
  }

  p {
    font-weight: bold;
    font-family: Montserrat;
    margin-bottom: 16px;
  }

  img {
    height: 320px;
    width: 320px;
    border-radius: 16px 16px 0 0;
  }

  h4 {
    text-align: center;
    color: #f17174;
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 1040px) {
    margin-bottom: 24px;
  }
`
