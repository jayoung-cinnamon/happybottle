import React from "react";
import Header from "components/Header";
import styled from "styled-components";
import WriteAndRead from "components/WriteAndRead";
import BottleContainer from "components/BottleContainer";
function HbMain() {
  return (
    <Container>
      <Header></Header>
      <WriteAndRead></WriteAndRead>
      <BottleContainer></BottleContainer>
    </Container>
  );
}

export default HbMain;

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
`;
