//@ts-nocheck
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Header from "components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useObject } from "react-firebase-hooks/database";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { getRandomInteger } from "utils/randomPosition";

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
    console.log("memoList[index]: ", Object.keys(memoList[index])[0]);
    const memoUid = Object.keys(memoList[index])[0];
    navigate(`/read/${bottleUid}/${memoUid}`);
  };
  let memoList: any[] = [];
  const setMemoList = (data: any) => {
    memoList.push(data);
    console.log("memoList: ", memoList);
    memoList.map((item, index) => {
      console.log("isOpened", Object.values(item)[0]["memo"].isOpened);
      console.log("writtenDate", Object.values(item)[0]["memo"].writtenDate);
    });
  };
  if (snapshot) {
    console.log("snapshot.val(): ", snapshot.val());
    const data = snapshot.val();
    if (data !== null) {
      for (const [key, value] of Object.entries(data)) {
        //@ts-ignore
        if (value.memo) {
          setMemoList({ [key]: value });
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
            <TempBottleBox>
              {memoList.map((item, index) => (
                <HappyMemo
                  index={index}
                  isOpened={Object.values(item)[0]["memo"].isOpened}
                  key={index}
                  onClick={() => onClickMemo(index)}
                  // position={getRandomInteger(180, 500)}
                  degree={getRandomInteger(1, 180)}
                />
              ))}
            </TempBottleBox>
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
  index: number;
  position: number;
  isOpened: boolean;
  degree: number;
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/main/BigBottle.png");
  background-repeat: no-repeat;
  background-position: center;
  background-color: #729743;
  border-radius: 10px;
  position: relative;
  align-items: flex-end;
`;

const TempBottleBox = styled.div`
  border: 1px solid red;
  min-width: 247px;
  height: 60vh;
  position: relative;
`;
//TODO: 인덱스 받아서 위치 랜덤으로?, isOpened 받아서 열 수 있는거랑 구분
const HappyMemo = styled.div<MemoPositionProps>`
  width: 86px;
  height: 104px;
  background-image: url("/images/main/HappyMemo.png");
  position: absolute;
  bottom: 50px;
  left: 180px;
  // index: 1,2,3 구간
  ${(props) =>
    (props.index === 0 || props.index === 1 || props.index === 2) &&
    css`
      bottom: 40px;
      /* background-color: red; */
      left: calc(90 * ${(props) => props.index}px);
    `};
  // index: 4,5,6 구간
  ${(props) =>
    (props.index === 3 || props.index === 4 || props.index === 5) &&
    css`
      bottom: 150px;
      /* background-color: blue; */
      left: calc(10 + 80 * ${(props) => props.index}px);
    `};

  // index: 7,8,9 구간
  ${(props) =>
    (props.index === 6 || props.index === 7 || props.index === 8) &&
    css`
      bottom: 260px;
      /* background-color: green; */
      left: calc(20 * ${(props) => props.index}px);
    `};
  ${(props) =>
    props.degree &&
    css`
      /* border: 2px solid black; */
      transform: rotate(${(props) => props.degree}deg);
    `};
`;
