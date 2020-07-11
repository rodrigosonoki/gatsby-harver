import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  width: 100%;
`

const ReversedRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  width: 100%;
`

const Card = styled.div`
  width: 400px;
  height: 100%;
  -webkit-box-shadow: 1px 1px 10px 6px #888; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 1px 1px 10px 6px #888; /* Firefox 3.5 - 3.6 */
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 16px;

  p {
    margin-top: 8px;
    font-size: 14px;
  }
`

const StepNumber = styled.div`
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
`

const GhostCard = styled.div`
  width: 400px;
`

function Steps() {
  return (
    <div>
      <Container>
        <Row>
          <Card>
            <h4>Comece criando seus produtos</h4>
            <p>
              Através da nossa plataforma, você cria seus produtos e visualiza a
              prévia em alta qualidade e fidelidade do resultado final.
            </p>
          </Card>
          <StepNumber>
            <p>1</p>
          </StepNumber>
          <GhostCard />
        </Row>
        <ReversedRow>
          <GhostCard />
          <StepNumber>
            <p>2</p>
          </StepNumber>
          <Card>
            <h4>Defina seu lucro</h4>
            <p>
              A Harver não possui nenhum tipo de assinatura ou custos
              antecipados. Você paga apenas pelo que for vendido. Por isso, a
              diferença entre o preço que você definir e o custo do produto será
              seu lucro.
            </p>
          </Card>
        </ReversedRow>
        <Row>
          <Card>
            <h4>Divulgue sua loja</h4>
            <p>
              Assim que tudo estiver certo com seus produtos, vamos criar sua
              loja no nosso marketplace. A partir daí é hora de trabalhar a sua
              marca: divulgue no Instagram, envie amostras para os seus amigos,
              invista em campanhas de marketing…
            </p>
          </Card>
          <StepNumber>
            <p>3</p>
          </StepNumber>
          <GhostCard />
        </Row>
        <ReversedRow>
          <GhostCard />
          <StepNumber>
            <p>4</p>
          </StepNumber>
          <Card>
            <h4>Pedido recebido!</h4>
            <p>
              A cada novo pedido, te enviaremos um e-mail pra que você consiga
              fazer a gestão do seu negócio e acompanhar os seus lucros. Essa é
              sua chance de ganhar dinheiro dormindo. Literalmente.
            </p>
          </Card>
        </ReversedRow>
        <Row>
          <Card>
            <h4>Produzir, empacotar e enviar</h4>
            <p>
              Nossa equipe vai fazer a produção do seu produto, garantir que
              será empacotado certinho e enviado para o seu cliente. Tudo isso
              no menor tempo possível porque a gente sabe que ninguém gosta de
              ficar esperando, né?
            </p>
          </Card>
          <StepNumber>
            <p>5</p>
          </StepNumber>
          <GhostCard />
        </Row>
      </Container>
    </div>
  )
}

export default Steps
