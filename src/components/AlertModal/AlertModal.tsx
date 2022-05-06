import React from "react";
import Header from "components/Header";
import styled from "styled-components";
import Popup from "reactjs-popup";

function AlertModal({
  visible,
  children,
}: {
  visible: boolean;
  children: any;
}) {
  return (
    <Popup modal nested>
      {(close: any) => (
        <>
          <TitleBox>
            <CancelBtn onClick={close} />
            <h1>경고</h1>
          </TitleBox>

          <ModalOverlay visible={visible} />
          <ModalWrapper>
            <ModalInner>{children}</ModalInner>
          </ModalWrapper>
        </>
      )}
    </Popup>
  );
}

export default AlertModal;

interface ModalProps {
  visible: boolean;
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div<ModalProps>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  border: 5px dotted #729743;
  background-color: #fff;
  border-radius: 10px;
  max-width: 640px;
  min-width: 320px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
  height: 200px;
`;

const CancelBtn = styled.div`
  width: 30px;
  height: 30px;
  background-image: url("/images/main/XLogo.png");
  cursor: pointer;
`;

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
