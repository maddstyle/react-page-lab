import React from "react";
import { Container, Title, Description, AwesomeButton } from "./styles";

const Home = () => {
  return (
    <Container>
      <Title>
        Say hello to <br />
        ReactJS
      </Title>
      <Description>
        You will learn a Frontend <br />
        framework from scratch, to <br />
        become a Ninja Developer.
      </Description>
      <AwesomeButton>Awesome!</AwesomeButton>
    </Container>
  );
};

export default Home;
