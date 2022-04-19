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
            {/* <Mobile> */}
            <MobileTitleInput>
              <BottleTitlePopup />
            </MobileTitleInput>
            {/* </Mobile> */}
            {/* <PC>
              <PCTitleInput>
                <BottleTitlePopup />
              </PCTitleInput>
            </PC> */}
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
  background-color: #5d97bd;
  background-size: 300px;
  border-radius: 10px;
  font-weight: 600;
  min-height: 90vh;
  min-width: 100%;
`;

const TaggedBottle = styled.div`
  background-image: url("images/main/TaggedBottle.png");
  background-repeat: no-repeat;
  position: relative;
  min-height: 80vh;
  min-width: 312px;
  background-position: center center;
  left: 10px;
`;

const MobileTitleInput = styled.div`
  position: absolute;
  font-size: 20px;
  height: 50px;
  color: white;
  background-color: transparent;
  transform: rotate(-24deg);
  line-height: 1.5;
  width: 70px;
  text-align: center;
  left: 210px;
  top: 240px;
`;

const PCTitleInput = styled(MobileTitleInput)`
  margin-left: 240px;
`;
