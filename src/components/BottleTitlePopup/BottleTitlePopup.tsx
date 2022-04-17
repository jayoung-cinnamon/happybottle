import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

function BottleTitlePopup() {
  return (
    <Popup trigger={<CreateBottleBtn>Click Me!</CreateBottleBtn>} modal nested>
      {(close: any) => (
        <ModalPopupContainer>
          <TitleBox>
            <CancelBtn onClick={close} />
            <h1>행복의 주제를 입력해주세요!</h1>
          </TitleBox>
          <ModalPage>
            <TagInputBox>
              <TagInput placeholder="주제를 입력해주세요" />
            </TagInputBox>
          </ModalPage>

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

export default BottleTitlePopup;

const ModalPopupContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  /* position: absolute; */
`;

const ModalPage = styled.div`
  /* border: 1px solid blue; */
  height: 100%;
  min-width: 320px;
  min-height: 300px;
  width: 80%;
  height: 100%;
  background-color: #454d96;
  border-radius: 10px;
  box-shadow: 0px 0px 37px 6px rgba(91, 91, 91, 0.81);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateBottleBtn = styled.div``;

const TitleBox = styled.div`
  width: 90%;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-around;
  display: flex;
  align-items: center;
  & > h1 {
    font-size: 20px;
    font-weight: 600;
  }
`;

const CancelBtn = styled.div`
  width: 30px;
  height: 30px;
  background-image: url("images/main/XLogo.png");
`;

const TagInputBox = styled.div`
  width: 280px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagInput = styled.input`
  color: white;
  width: 250px;
  font-size: 30px;
  border: none;
  text-align: center;
  line-height: 2;
  background-color: transparent;
  border-bottom: 1px solid white;
  ::placeholder {
    color: #ffffff2d;
  }
`;
