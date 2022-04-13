import React from "react";
import styled from "styled-components";
import Header from "components/Header";
function Bottle() {
  return (
    <MainContainer>
      <Container>
        <Header></Header>
        Bottle
      </Container>
    </MainContainer>
  );
}

export default Bottle;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  /* align-items: center; */
  padding: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
