import React from "react";
import Header from "components/Header";
import styled from "styled-components";
function HbMain() {
  return (
    <Container>
      <Header></Header>
    </Container>
  );
}

export default HbMain;

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 15px; */
  /* min-height: 100%; */
  border: 1px solid blue;
`;
