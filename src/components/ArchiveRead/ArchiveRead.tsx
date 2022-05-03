import React from "react";
import Header from "components/Header";
import styled from "styled-components";

function ArchiveRead() {
  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <h1>보관함에서 꺼내보는 곳</h1>
      </Container>
    </MainContainer>
  );
}

export default ArchiveRead;

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
  /* padding: 10px; */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
