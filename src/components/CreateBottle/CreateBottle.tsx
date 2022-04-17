import React from "react";
import Header from "components/Header";
import styled from "styled-components";

function CreateBottle() {
  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <BottleContainer>
          <TaggedBottle />
        </BottleContainer>
      </Container>
    </MainContainer>
  );
}

export default CreateBottle;

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
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottleContainer = styled.div`
  margin-top: 30px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;

const TaggedBottle = styled.img`
  min-height: 80vh;
  min-width: 100%;
  background-image: url("images/main/TaggedBottle.png");
  background-position: 65% 50%;
  background-repeat: no-repeat;
  background-color: #ffa7da;
  background-size: 300px;
  border-radius: 10px;
  position: relative;
  /* background-position: 170%; */
  /* z-index: 999; */
  border: 1px solid blue;
`;
