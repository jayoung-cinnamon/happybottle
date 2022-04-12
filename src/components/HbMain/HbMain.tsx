import React, { useEffect } from "react";
import Header from "components/Header";
import styled from "styled-components";
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
      {open ? (
        <UpdateModal></UpdateModal>
      ) : (
        <>
          <WriteAndRead></WriteAndRead>
          <BottleContainer></BottleContainer>
        </>
      )}
    </Container>
  );
}

export default HbMain;

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
`;
