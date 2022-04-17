import React from "react";
import styled from "styled-components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";
function Bottle() {
  const navigate = useNavigate();
  const onClickMemo = () => {
    navigate("/read");
  };
  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <BottleContainer>
          <HappyMemo onClick={onClickMemo} />
        </BottleContainer>
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
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottleContainer = styled.div`
  margin-top: 30px;
  width: 90%;
  min-height: 80vh;
  background-image: url("images/main/BigBottle.png");
  background-repeat: no-repeat;
  background-position: center;
  background-color: #729743;
  border-radius: 10px;
  position: relative;
`;

const HappyMemo = styled.div`
  width: 86px;
  height: 104px;
  background-image: url("images/main/HappyMemo.png");
  position: absolute;
  bottom: 50px;
  left: 180px;
`;
