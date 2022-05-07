// @ts-nocheck
import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

function BottleContainer({ bottleList }: any) {
  const navigate = useNavigate();
  const reversedBottleList = bottleList.reverse();
  const onCLickBottle = (index: any) => {
    navigate(`/bottle/${Object.keys(bottleList[index])}`);
  };

  const renderBottle = (reversedBottleList) => {
    let bottleMemo = [];
    const isOpenedCount = (item) => {
      let isOpened = [];
      for (const [key, value] of Object.entries(item)) {
        //@ts-ignore
        bottleMemo = [...Object.values(value)];
      }
      isOpened = bottleMemo.filter((item, index) => {
        if (item.memo) return item.memo.isOpened === true;
        return [];
      });
      return isOpened.length - 2;
    };

    return reversedBottleList.map((item: any, index: any) => (
      <ShelveBack>
        <BottleItemWrapper key={index}>
          <Bottle
            shape={Object.values(item)[0].bottleShape}
            onClick={() => {
              onCLickBottle(index);
            }}
          >
            <h1>{Object.values(item)[0].bottleName}</h1>{" "}
            <h2>{`${isOpenedCount(item)}/${
              Object.keys(Object.values(item)[0]).length - 2
            }`}</h2>
          </Bottle>
        </BottleItemWrapper>
        <ShelveDark />
        <ShelveBottom />
      </ShelveBack>
    ));
  };

  if (bottleList.length) {
    return (
      <Container>
        <BottleWrapper>
          <ShelveBackGround>
            {renderBottle(reversedBottleList)}
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
    return <Container></Container>;
  }
}

export default BottleContainer;
interface BottleColorProps {
  shape: string;
}
const Container = styled.div`
  max-width: 640px;
  min-width: 320px;
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
`;
const ShelveBack = styled.div`
  width: 49%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #947551;
`;

const ShelveBottom = styled.div`
  width: 100%;
  height: 20px;
  background-color: #cdac79;
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
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  cursor: pointer;
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
  //오픈된 갯수/ 쪽지 총개수
  & > h2 {
    width: 50%;
    height: 20px;
    font-size: 15px;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 5px;
    color: #7c7c7c;
  }
`;
