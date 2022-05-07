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
import { useRecoilState } from "recoil";
function HbMain() {
  const [open, setOpen] = useRecoilState(modalRecoilStore);
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
  useEffect(() => {
    console.log("hbMain open value: ", open);
  }, [open]);
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
      <Main>
        <MainContainer
          style={
            open
              ? { position: "fixed", margin: "0 auto", left: "0", right: "0" }
              : {}
          }
        >
          <Container>
            <Header></Header>
            <WriteAndRead></WriteAndRead>
            <BottleContainer bottleList={dataArr}></BottleContainer>
          </Container>
        </MainContainer>
      </Main>
    );
  } else {
    return <></>;
  }
}

export default HbMain;

interface SlideProps {
  modalOpen: boolean;
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const MainContainer = styled.div`
  width: 100vw;
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  /* position: absolute; */
  top: 0;
  left: 0;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: 99;
`;
