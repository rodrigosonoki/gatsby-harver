import React from "react"

import Title from "../Title"

import {
  Container,
  Row,
  ReversedRow,
  Card,
  StepNumber,
  GhostCard,
} from "./styles"

function Steps() {
  return (
    <div>
      <Container>
        <Title
          h1="É assim que a mágica acontece"
          p="A gente tem tudo pra você criar seu próprio negócio."
        ></Title>
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
