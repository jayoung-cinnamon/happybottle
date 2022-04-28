import React from "react";
import Header from "components/Header";
import styled from "styled-components";
import { Mobile, PC } from "styles/Mediaquery";
import { useNavigate } from "react-router-dom";
import BottleTitlePopup from "components/BottleTitlePopup";

function CreateBottle() {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <BottleContainer>
          <TaggedBottle>
            <TitleInput>
              <BottleTitlePopup />
            </TitleInput>
            <TempBottleBox />
          </TaggedBottle>
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
  min-height: 60vh;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Container = styled.div`
  width: 100%;
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
  height: 100%;
  background-color: #5d97bd;
  background-size: 300px;
  border-radius: 10px;
  font-weight: 600;
`;

const TaggedBottle = styled.div`
  background-image: url("/images/main/TaggedBottle.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  min-height: 80vh;
  min-width: 295px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TempBottleBox = styled.div`
  width: 100%;
  min-height: 80vh;
  position: absolute;
`;

const TitleInput = styled.div`
  position: relative;
  font-size: 20px;
  height: 50px;
  color: white;
  background-color: transparent;
  transform: rotate(-24deg);
  line-height: 1.5;
  width: 70px;
  text-align: center;
  left: 60px;
  top: -60px;
`;
