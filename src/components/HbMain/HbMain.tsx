import React, { useEffect, useState } from "react";
import Header from "components/Header";
import styled, { css } from "styled-components";
import WriteAndRead from "components/WriteAndRead";
import BottleContainer from "components/BottleContainer";
import { useRecoilValue } from "recoil";
import { modalRecoilStore } from "recoil/mainModal";
import UpdateModal from "components/UpdateModal";
import { useObject } from "react-firebase-hooks/database";

import { getDatabase, onValue, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
function HbMain() {
  const db = getDatabase();
  const auth = getAuth();
  const userUid = auth.currentUser?.uid;
  const bottleRef = ref(db, `${userUid}/`);
  const [snapshot, loading, error] = useObject(bottleRef);

  let dataArr: any[] = [];
  const setBottleList = (data: any) => {
    dataArr.push(data);
    console.log("dataArr: ", dataArr);
  };
  if (snapshot) {
    console.log("snapshot.val(): ", snapshot.val());
    const data = snapshot.val();
    if (data !== null) {
      for (const [key, value] of Object.entries(data)) {
        //@ts-ignore
        // console.log("key: ", key);
        // console.log("value: ", value);
        setBottleList({ [key]: value });
      }
    }
    return (
      <MainContainer>
        <Container>
          <Header></Header>
          <WriteAndRead></WriteAndRead>
          <BottleContainer bottleList={dataArr}></BottleContainer>
        </Container>
      </MainContainer>
    );
  } else {
    return <></>;
  }
}

export default HbMain;

interface SlideProps {
  modalOpen: boolean;
}

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
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
