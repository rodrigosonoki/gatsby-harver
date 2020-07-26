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
  justify-content: space-between;
  height: 100%;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 960px;

  @media only screen and (max-width: 780px) {
    flex-direction: column;
  }
`

export const StyledCard = styled.div`
  width: 240px;
  height: 280px;

  h3 {
    margin: 8px 0 16px;
  }
  p {
    font-size: 14px;
  }
`
