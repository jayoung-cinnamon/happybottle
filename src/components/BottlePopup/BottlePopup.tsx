import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

function BottlePopup() {
  return (
    <Popup trigger={<CreateBottleBtn />} modal nested>
      {(close: any) => (
        <ModalPopupContainer>
          <TitleBox>
            <CancelBtn onClick={close} />
          </TitleBox>

          <ModalPage>...</ModalPage>

          {/* <Popup
              trigger={<button className="button"> Trigger </button>}
              position="top center"
              nested
            >
              <span>보틀 생성</span>
            </Popup> */}
        </ModalPopupContainer>
      )}
    </Popup>
  );
}

export default BottlePopup;

const ModalPopupContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  /* position: absolute; */
`;

const ModalPage = styled.div`
  border: 1px solid blue;
  height: 100%;
  min-width: 320px;
  min-height: 300px;
  width: 90%;
  height: 100%;

  background-color: white;
`;

const CreateBottleBtn = styled.div`
  width: 120px;
  height: 120px;
  background-image: url("images/main/Yummy.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
`;

const TitleBox = styled.div`
  width: 90%;
  display: flex;
  margin-bottom: 20px;
  border: 1px solid orange;
`;

const CancelBtn = styled.div`
  width: 30px;
  height: 30px;
  background-image: url("images/main/XLogo.png");
`;
