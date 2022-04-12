import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function WriteAndRead() {
  const navigate = useNavigate();
  const onClickWrite = () => {
    navigate("/write");
  };
  return (
    <Container>
      <LogoWrapper>
        <WriteLogo onClick={onClickWrite} />
        <Text>행복한 순간을 기록하세요</Text>
      </LogoWrapper>
      <LogoWrapper>
        <ReadLogo />
        <Text>꺼내보기</Text>
      </LogoWrapper>
    </Container>
  );
}

export default WriteAndRead;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 35px;
`;

const WriteLogo = styled.div`
  width: 95px;
  height: 120px;
  background-image: url("images/main/Write.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const ReadLogo = styled.div`
  width: 100px;
  height: 100px;
  background-image: url("images/main/Read.png");
`;

const Text = styled.div`
  width: 110px;
  margin-top: 25px;
  font-size: 20px;
  font-weight: 600;
  color: #acacac;
  text-align: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
