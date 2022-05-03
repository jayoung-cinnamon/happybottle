import React from "react";
import Header from "components/Header";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { alertRecoilStore } from "recoil/mainModal";
import { useRecoilState } from "recoil";

function AlertModal({
  children,
  title,
}: {
  alertOpen: boolean;
  children: any;
  title: string;
}) {
  const [alertOpen, setAlertOpen] = useRecoilState(alertRecoilStore);
  const onClickClose = () => {
    setAlertOpen(false);
  };
  return (
    <>
      <ModalOverlay onClick={onClickClose} alertOpen={alertOpen}>
        <ModalWrapper>
          <ModalInner>
            <TitleBox>
              <CancelBtn />
              <h1>{title}</h1>
            </TitleBox>
            <h1>{children}</h1>
          </ModalInner>
        </ModalWrapper>
      </ModalOverlay>
    </>
  );
}

export default AlertModal;

interface ModalProps {
  alertOpen: boolean;
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  /* overflow: auto; */
  /* outline: 0; */
  /* border: 1px solid red; */
`;

const ModalOverlay = styled.div<ModalProps>`
  box-sizing: border-box;
  position: fixed;
  /* display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: ${(props) => (props.alertOpen ? "block" : "none")};
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  border: 5px dotted #a31414;
  background-color: #fff;
  border-radius: 10px;
  width: 250px;
  max-width: 640px;
  min-width: 320px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 0px 20px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & > h1 {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    width: 190px;
    /* position: absolute; */
    /* bottom: 50px; */
    /* padding: 10px; */
    /* margin-top: 30px; */
    min-width: 72px;
    margin-bottom: 20px;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  top: 0;
  justify-content: space-between;
  & > h1 {
    font-size: 15px;
    font-weight: 600;
    word-break: break-all;
  }
`;

const CancelBtn = styled.div`
  width: 30px;
  height: 30px;
  background-image: url("/images/main/XLogo.png");
  cursor: pointer;
`;
