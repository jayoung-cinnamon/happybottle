import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
function BottleContainer({ bottleList }: any) {
  console.log("bottleList: ", bottleList);
  bottleList.map((item: any, index: any) => {
    console.log("item: ", item);
    console.log("index: ", index);
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
            <Bottle1 color={item.bottleShpae} onClick={onCLickBottle} />
          </BottleWrapper>
        ))}
        {/* <BottleWrapper>
          <Bottle1 onClick={onCLickBottle} />
          <Bottle1 />
        </BottleWrapper>
        <BottleWrapper>
          <Bottle2 />
          <Bottle2 />
        </BottleWrapper>
        <BottleWrapper>
          <Bottle1 />
          <Bottle2 />
        </BottleWrapper> */}
      </Container>
    );
  } else {
    return <></>;
  }
}

export default BottleContainer;
interface BottleColorProps {
  color: string;
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

const Bottle1 = styled.div<BottleColorProps>`
  width: 92px;
  height: 200px;
  background-size: 100% 100%;
  background-image: url("images/main/Bottle2.png");
  ${(props) =>
    props.color === "white" &&
    css`
      background-image: url("images/main/Bottle1.png");
    `}
`;
const Bottle2 = styled.div`
  width: 92px;
  height: 200px;
  background-image: url("images/main/Bottle2.png");
  background-size: 100% 100%;
`;
