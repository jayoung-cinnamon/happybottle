// @ts-nocheck
import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

function BottleContainer({ bottleList }: any) {
  const navigate = useNavigate();

  // console.log("bottleList: ", bottleList);

  bottleList.map((item: object, index: any) => {
    //@ts-ignore
    // console.log(Object.values(item)[0]?.bottleName);
  });

  const onCLickBottle = (target: any) => {
    // console.log("target: ", target);
    navigate(`/bottle/${target.data}`);
  };

  // TODO: 1. bottleList 받아서 동적으로 렌더링되도록 수정
  // TODO: 1-1. bottleShape랑 bottleUid가 반영되어야함

  if (bottleList.length) {
    return (
      <Container>
        {bottleList.map((item: any, index: any) => (
          <BottleWrapper>
            <Bottle
              key={index}
              shape={Object.values(item)[0].bottleShape}
              onClick={onCLickBottle}
            >
              <h1>{Object.values(item)[0].bottleName}</h1>
            </Bottle>
          </BottleWrapper>
        ))}
      </Container>
    );
  } else {
    return <></>;
  }
}

export default BottleContainer;
interface BottleColorProps {
  shape: string;
}
const Container = styled.div`
  width: 100%;
  margin-top: 35px;
  margin-bottom: 35px;
`;

const BottleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  /* border: 1px solid blue; */
`;

const Bottle = styled.div<BottleColorProps>`
  width: 92px;
  height: 200px;
  background-size: 100% 100%;
  position: relative;
  background-image: url("images/main/Bottle_White.png");
  ${(props) =>
    props.shape === "blue" &&
    css`
      background-image: url("images/main/Bottle_Blue.png");
    `}
  ${(props) =>
    props.shape === "green" &&
    css`
      background-image: url("images/main/Bottle_Green.png");
    `}
  ${(props) =>
    props.shape === "black" &&
    css`
      background-image: url("images/main/Bottle_Black.png");
    `}
    //보틀 네입 태그
    & > h1 {
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    word-break: break-all;
    position: absolute;
    bottom: 50px;
    padding: 10px;
    background-color: #454d96;
    color: white;
    ${(props) =>
      props.shape === "blue" &&
      css`
        background-color: #eeeded;
        color: black;
      `}
    ${(props) =>
      props.shape === "green" &&
      css`
        background-color: #da8036;
        color: white;
      `}
  ${(props) =>
      props.shape === "black" &&
      css`
        background-color: #754da8;
        color: wthie;
      `}
  }
`;
