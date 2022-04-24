//@ts-nocheck
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Header from "components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useObject } from "react-firebase-hooks/database";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";

function Bottle() {
  const { bottleUid } = useParams();
  console.log("{bottleUid}: ", bottleUid);
  const navigate = useNavigate();
  const db = getDatabase();
  const auth = getAuth();
  const userUid = auth.currentUser?.uid;
  const memoRef = ref(db, `${userUid}/${bottleUid}`);
  const [snapshot, loading, error] = useObject(memoRef);
  const onClickMemo = (index: any) => {
    console.log("index: ", index);
    console.log("memoList[index]: ", memoList[index]);
    navigate("/read");
  };
  let memoList: any[] = [];
  const setMemoList = (data: any) => {
    memoList.push(data);
    console.log("memoList: ", memoList);
  };
  if (snapshot) {
    console.log("snapshot.val(): ", snapshot.val());
    const data = snapshot.val();
    if (data !== null) {
      for (const [key, value] of Object.entries(data)) {
        //@ts-ignore
        if (value.memo) {
          setMemoList(value);
          //@ts-ignore
          console.log("value: ", value.memo);
        }
      }
    }
  }
  if (!loading) {
    return (
      <MainContainer>
        <Container>
          <Header></Header>
          <BottleContainer>
            {memoList.map((item, index) => (
              <HappyMemo
                position={index}
                key={index}
                onClick={() => onClickMemo(index)}
              />
            ))}
          </BottleContainer>
        </Container>
      </MainContainer>
    );
  } else {
    return <></>;
  }
}

export default Bottle;
interface MemoPositionProps {
  position: number;
}
const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  /* align-items: center; */
  padding: 10px;
`;

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottleContainer = styled.div`
  margin-top: 30px;
  width: 90%;
  min-height: 80vh;
  background-image: url("images/main/BigBottle.png");
  background-repeat: no-repeat;
  background-position: center;
  background-color: #729743;
  border-radius: 10px;
  position: relative;
`;
//TODO: 인덱스 받아서 위치 랜덤으로?
const HappyMemo = styled.div<MemoPositionProps>`
  width: 86px;
  height: 104px;
  background-image: url("images/main/HappyMemo.png");
  position: absolute;
  bottom: 50px;
  left: 180px;
  ${(props) =>
    props.position &&
    css`
      left: calc(45 * position) px;
    `}
`;
