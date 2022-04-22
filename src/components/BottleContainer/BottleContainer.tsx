import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
function BottleContainer({ bottleList }: any) {
  console.log("bottleList: ", bottleList);
  bottleList.map((item: any, index: any) => {
    console.log("item: ", item, "index:", index);
  });
  const navigate = useNavigate();
  const onCLickBottle = (target: any) => {
    console.log("target: ", target);
    navigate(`/bottle/${target.data}`);
  };

  // TODO: 1. bottleList 받아서 동적으로 렌더링되도록 수정
  // TODO: 1-1. bottleShape랑 bottleUid가 반영되어야함

  if (bottleList.length) {
    return (
      <Container>
        {bottleList.map((item: any, index: any) => (
          <BottleWrapper key={index}>
            <Bottle shape={item.bottleShape} onClick={onCLickBottle}>
              <h1>{item.bottleName}</h1>
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
`;

const Bottle = styled.div<BottleColorProps>`
  width: 92px;
  height: 200px;
  background-size: 100% 100%;
  & > h1 {
    font-size: 20px;
  }
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
`;
