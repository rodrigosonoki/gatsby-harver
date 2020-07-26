import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 0 60px;
  background: #f6f6f6;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  width: 100%;

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`

export const ReversedRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  width: 100%;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

export const Card = styled.div`
  width: 400px;
  height: 100%;
  -webkit-box-shadow: 1px 1px 10px 6px #888; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 1px 1px 10px 6px #888; /* Firefox 3.5 - 3.6 */
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 16px 24px;
  border-radius: 16px;
  background: #fff;

  p {
    margin-top: 8px;
    font-size: 12px;
  }

  @media only screen and (max-width: 1000px) {
    margin: 0 0 16px;
  }
`

export const StepNumber = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 36px;
  background-color: #f17174;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px rgba(241, 113, 116, 0.8);
  margin: 0 8px 0px 8px;

  p {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }

  @media only screen and (max-width: 1000px) {
    margin: 0 0 16px;
  }
`

export const GhostCard = styled.div`
  width: 400px;
`
