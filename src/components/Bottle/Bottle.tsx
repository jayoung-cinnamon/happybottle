//@ts-nocheck
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Header from "components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useObject } from "react-firebase-hooks/database";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";
import parse from "date-fns/parse";
import { getRandomInteger } from "utils/randomPosition";
import isAfter from "date-fns/isAfter";
import add from "date-fns/add";

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
  let bottleColor: string = "";
  const setMemoList = (data: any) => {
    memoList.push(data);
    console.log("memoList: ", memoList);
    memoList.map((item, index) => {
      console.log("isOpened", Object.values(item)[0]["memo"].isOpened);
      // console.log("writtenDate", Object.values(item)[0]["memo"].writtenDate);
      const targetDate = add(
        parse(
          Object.values(item)[0]["memo"].writtenDate,
          "yyyy.MM.dd HH:mm:ss",
          new Date()
        ),
        {
          //TODO: 30일로 변경
          days: 1,
        }
      );
      // console.log(
      //   "writtenDate",
      //   parse(
      //     Object.values(item)[0]["memo"].writtenDate,
      //     "yyyy.MM.dd HH:mm:ss",
      //     new Date()
      //   )
      // );
      console.log("지금시간: ", new Date());
      console.log("30일 지났어?", isAfter(new Date(), targetDate));

      const isPassed30days = isAfter(new Date(), targetDate);
      if (isPassed30days) {
        const updates = {};
        updates["isOpened"] = true;
        update(
          ref(db, `${userUid}/${bottleUid}/${Object.keys(item)[0]}/memo/`),
          updates
        );
      }
    });
  };
  if (snapshot) {
    console.log("snapshot.val(): ", snapshot.val());
    const data = snapshot.val();
    if (data !== null) {
      bottleColor = data.bottleShape;
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
          <BottleContainer shape={bottleColor}>
            <TempBottleBox>
              {memoList.map((item, index) => (
                <HappyMemo
                  index={index}
                  isOpened={Object.values(item)[0]["memo"].isOpened}
                  key={index}
                  onClick={() => onClickMemo(index)}
                  // position={getRandomInteger(180, 500)}
                  degree={getRandomInteger(1, 360)}
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
interface BottleProps {
  bottleColor: string;
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

const BottleContainer = styled.div<BottleProps>`
  margin-top: 30px;
  width: 90%;
  min-height: 580px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/main/Big_Bottle_White.png");
  background-repeat: no-repeat;
  background-position: center;
  background-color: #454d96;
  border-radius: 10px;
  position: relative;
  ${(props) =>
    props.shape === "blue" &&
    css`
      background-image: url("/images/main/Big_Bottle_Blue.png");
      background-color: #648875;
    `}
  ${(props) =>
    props.shape === "green" &&
    css`
      background-image: url("/images/main/Big_Bottle_Green.png");
      background-color: #d68c1e;
    `}
  ${(props) =>
    props.shape === "black" &&
    css`
      background-image: url("/images/main/Big_Bottle_Black.png");
      background-color: #754da8;
    `}
`;

const TempBottleBox = styled.div`
  min-width: 210px;
  min-height: 537px;
  position: relative;
`;

//TODO: 인덱스 받아서 위치 랜덤으로?, isOpened 받아서 열 수 있는거랑 구분
const HappyMemo = styled.div<MemoPositionProps>`
  width: 70px;
  height: 90px;
  background-image: url("/images/main/HappyMemo.png");
  background-size: cover;
  position: absolute;
  bottom: 50px;
  left: 180px;
  cursor: pointer;
  ${(props) =>
    props.isOpened === true &&
    css`
      animation: fade-out-down 2s ease-in infinite;
    `};

  @keyframes fade-out-down {
    0% {
      filter: brightness(1.1);
    }
    50% {
      filter: brightness(1.2);
    }
    100% {
      filter: brightness(1.25);
    }
  }

  // index: 1,2,3 구간
  ${(props) =>
    (props.index === 0 || props.index === 1 || props.index === 2) &&
    css`
      bottom: 0.5em;
      /* background-color: red; */
      left: calc(65 * ${(props) => props.index}px);
    `};
  // index: 4,5,6 구간
  ${(props) =>
    (props.index === 3 || props.index === 4 || props.index === 5) &&
    css`
      bottom: 5.5em;
      /* background-color: blue; */
      left: calc(65 * ${(props) => props.index % 3}px);
    `};

  // index: 7,8,9 구간
  ${(props) =>
    (props.index === 6 || props.index === 7 || props.index === 8) &&
    css`
      bottom: 10.5em;
      /* background-color: green; */
      left: calc(65 * ${(props) => props.index % 3}px);
    `};

  // index: 10,11,12 구간
  ${(props) =>
    (props.index === 9 || props.index === 10 || props.index === 11) &&
    css`
      bottom: 15.5em;
      /* background-color: green; */
      left: calc(65 * ${(props) => props.index % 3}px);
    `};
  ${(props) =>
    props.degree &&
    css`
      /* border: 2px solid black; */
      transform: rotate(${(props) => props.degree}deg);
    `};
`;
