import React from "react";
import styled, { css } from "styled-components";
import Popup from "reactjs-popup";
function WritePopup() {
  return (
    <Popup trigger={<BtnContainer>병에 담기</BtnContainer>} modal nested>
      {(close: any) => (
        <ModalPopupContainer>
          <TitleBox>
            <CancelBtn onClick={close} />
            <h1>메모를 담을 보틀을 골라주세요!</h1>
          </TitleBox>
          <ModalPage>
            <TagInputBox>
              <Item>
                <RadioButton
                  type="radio"
                  name="radio"
                  value="white"
                  // checked={bottleName === ""}
                  // onChange={onChangeShape}
                />
                <RadioButtonLabel />
                <div>BottleName</div>
              </Item>
            </TagInputBox>
          </ModalPage>
        </ModalPopupContainer>
      )}
    </Popup>
  );
}

export default WritePopup;

const ModalPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const BtnContainer = styled.div`
  width: 100px;
  height: 45px;
  background-color: #a5aac7;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

const TitleBox = styled.div`
  width: 90%;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
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
  cursor: pointer;
`;

const ModalPage = styled.div`
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
  border: 5px dotted white;
`;

const TagInputBox = styled.div`
  width: 280px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  margin-top: 2px;
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border-radius: 2px;
  color: white;
  font-weight: 500;
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 100px;
  height: 25px;
  margin-right: 10px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 2px solid #ccc;
`;
