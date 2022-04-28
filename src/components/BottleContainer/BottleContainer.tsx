// @ts-nocheck
import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

function BottleContainer({ bottleList }: any) {
  const navigate = useNavigate();

  // console.log("bottleList: ", bottleList);

  // bottleList.map((item: object, index: any) => {
  //@ts-ignore
  // console.log(Object.values(item)[0]?.bottleName);
  // });
  const reversedBottleList = bottleList.reverse();
  console.log(reversedBottleList);

  const onCLickBottle = (index: any) => {
    navigate(`/bottle/${Object.keys(bottleList[index])}`);
  };

  // TODO: 1. bottleList 받아서 동적으로 렌더링되도록 수정
  // TODO: 1-1. bottleShape랑 bottleUid가 반영되어야함

  if (bottleList.length) {
    return (
      <Container>
        <BottleWrapper>
          <ShelveBackGround>
            {reversedBottleList.map((item: any, index: any) => (
              <ShelveBack>
                <BottleItemWrapper key={index}>
                  <Bottle
                    shape={Object.values(item)[0].bottleShape}
                    onClick={() => {
                      onCLickBottle(index);
                    }}
                  >
                    <h1>{Object.values(item)[0].bottleName}</h1>
                  </Bottle>
                </BottleItemWrapper>
                <ShelveDark />
                <ShelveBottom />
              </ShelveBack>
            ))}
            {reversedBottleList.length % 2 !== 0 && (
              <>
                <ShelveBack>
                  <BottleItemWrapper>
                    <EmptyBottle />
                  </BottleItemWrapper>
                  <ShelveDark />
                  <ShelveBottom />
                </ShelveBack>
              </>
            )}
          </ShelveBackGround>
        </BottleWrapper>
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
`;
const BottleItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 30px;
  flex-wrap: auto;
  /* border: 1px solid red; */
  width: 40%;
`;

const ShelveBackGround = styled.div`
  width: 80%;
  height: 100%;
  background-color: #cdac79;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* border: 1px solid black; */
`;
const ShelveBack = styled.div`
  width: 49%;
  /* border: 2px solid green; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #947551;
`;

const ShelveBottom = styled.div`
  width: 100%;
  height: 20px;
  background-color: #cdac79;
  /* border: 1px solid blue; */
  /* position: absolute; */
  /* bottom: -60px; */
`;
const ShelveDark = styled.div`
  width: 100%;
  height: 52px;
  background-color: #755f45;
`;

const EmptyBottle = styled.div`
  width: 40%;
  height: 200px;
  margin-top: 40px;
`;
const Bottle = styled.div<BottleColorProps>`
  /* border: 1px solid blue; */
  bottom: -60px;
  width: 92px;
  min-width: 92px;
  height: 200px;
  background-size: 100% 100%;
  position: relative;
  background-position: 50% 50%;
  margin-top: 40px;
  background-image: url("/images/main/Bottle_White.png");
  ${(props) =>
    props.shape === "blue" &&
    css`
      background-image: url("/images/main/Bottle_Blue.png");
    `}
  ${(props) =>
    props.shape === "green" &&
    css`
      background-image: url("/images/main/Bottle_Green.png");
    `}
  ${(props) =>
    props.shape === "black" &&
    css`
      background-image: url("/images/main/Bottle_Black.png");
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
    /* border: 1px solid red; */
    min-width: 72px;
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
        color: black;
      `}
  }
`;
