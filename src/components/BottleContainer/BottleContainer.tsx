import React from "react";
import styled from "styled-components";
function BottleContainer() {
  return (
    <Container>
      <BottleWrapper>
        <Bottle1 />
        <Bottle1 />
      </BottleWrapper>
      <BottleWrapper>
        <Bottle2 />
        <Bottle2 />
      </BottleWrapper>
      <BottleWrapper>
        <Bottle1 />
        <Bottle2 />
      </BottleWrapper>
    </Container>
  );
}

export default BottleContainer;

const Container = styled.div`
  width: 100%;
  margin-top: 35px;
  margin-bottom: 35px;
`;

const BottleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;

const Bottle1 = styled.div`
  width: 92px;
  height: 200px;
  background-image: url("images/main/Bottle1.png");
  background-size: 100% 100%;
`;
const Bottle2 = styled.div`
  width: 92px;
  height: 200px;
  background-image: url("images/main/Bottle2.png");
  background-size: 100% 100%;
`;
