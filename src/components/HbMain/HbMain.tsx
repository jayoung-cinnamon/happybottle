import React, { useEffect } from "react";
import Header from "components/Header";
import styled, { css } from "styled-components";
import WriteAndRead from "components/WriteAndRead";
import BottleContainer from "components/BottleContainer";
import { useRecoilValue } from "recoil";
import { modalRecoilStore } from "recoil/mainModal";
import UpdateModal from "components/UpdateModal";
function HbMain() {
  const open = useRecoilValue(modalRecoilStore);

  return (
    <Container>
      <Header></Header>
      {/* {open ? (
        <ModalContainer modalOpen={open}>
          <UpdateModal></UpdateModal>
        </ModalContainer>
      ) : (
        <>
          <WriteAndRead></WriteAndRead>
          <BottleContainer></BottleContainer>
        </>
      )} */}
      {open ? (
        <ModalContainer modalOpen={open}>
          <UpdateModal></UpdateModal>
        </ModalContainer>
      ) : (
        <></>
      )}

      <WriteAndRead></WriteAndRead>
      <BottleContainer></BottleContainer>
    </Container>
  );
}

export default HbMain;

interface SlideProps {
  modalOpen: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
`;

const ModalContainer = styled.div<SlideProps>`
  width: 100%;
  /* border: 1px solid blue; */
  position: absolute;

  height: 50%;
  /* transition: transform 1s linear;
  transform: translateX(-100%);
  position: fixed; */
  /* left: 0; */
  z-index: 1;
  /* ${(props) =>
    props.modalOpen &&
    css`
      background-color: red;
      transform: translateX(0px);
    `} */
`;
