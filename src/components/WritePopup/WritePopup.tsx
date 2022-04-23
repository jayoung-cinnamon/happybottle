import React from "react";
import styled, { css } from "styled-components";
import Popup from "reactjs-popup";
function WritePopup() {
  return (
    <Popup trigger={<BtnContainer>병에 담기</BtnContainer>} modal nested>
      {(close: any) => (
        <ModalPopupContainer>무슨병에 담을까?</ModalPopupContainer>
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
  border: 1px solid blue;
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
