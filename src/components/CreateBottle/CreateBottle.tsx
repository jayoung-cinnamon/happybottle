import React from "react";
import Header from "components/Header";
import styled from "styled-components";
import { Mobile, PC } from "styles/Mediaquery";
import { useNavigate } from "react-router-dom";
import BottleTitlePopup from "components/BottleTitlePopup";

function CreateBottle() {
  const navigate = useNavigate();
  const onClickTitle = () => {
    console.log("createBottle");
    return (
      <>
        <BottleTitlePopup />
      </>
    );
  };
  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <BottleContainer>
          <TaggedBottle>
            <Mobile>
              <MobileTitleInput>
                <BottleTitlePopup />
              </MobileTitleInput>
            </Mobile>
            <PC>
              <PCTitleInput>
                <BottleTitlePopup />
              </PCTitleInput>
            </PC>
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
  /* border: 1px solid red; */
`;

const TaggedBottle = styled.div`
  min-height: 80vh;
  min-width: 100%;
  background-image: url("images/main/TaggedBottle.png");
  background-position: 65% 50%;
  background-repeat: no-repeat;
  background-color: #5d97bd;
  background-size: 300px;
  border-radius: 10px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  position: relative;
`;

const MobileTitleInput = styled.div`
  font-size: 20px;
  height: 50px;
  color: white;
  background-color: transparent;
  transform: rotate(-24deg);
  line-height: 1.5;
  width: 70px;
  text-align: center;
  /* border: 1px solid red; */
  margin-left: 170px;
  margin-bottom: 30px;
`;

const PCTitleInput = styled(MobileTitleInput)`
  margin-left: 240px;
`;
