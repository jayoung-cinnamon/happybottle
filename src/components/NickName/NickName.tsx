import React from "react";
import styled from "styled-components";
function NickName() {
  return (
    <NickNameContainer>
      <Logo />
      <Title>Welcome!</Title>
      <ExplainText>닉네임을 입력해주세요</ExplainText>
      <InputContainer>
        <Input
          name="nickname"
          type="text"
          placeholder="nickname"
          required
        ></Input>
        <LoginInput type="submit" value="회원가입완료"></LoginInput>
      </InputContainer>
    </NickNameContainer>
  );
}

export default NickName;

const NickNameContainer = styled.div`
  margin: 0 auto;
  width: 240px;
  height: 430px;
  max-width: 640px;
  min-width: 320px;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 25px;
  font-size: 25px;
  font-weight: 500;
`;

const Logo = styled.div`
  width: 90px;
  height: 90px;
  background-image: url("images/main/Sneaky.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* border: 1px solid red; */
`;

const InputContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
`;

const Input = styled.input`
  font-size: 13px;
  padding: 5px;
  margin-top: 10px;
  height: 25px;
  width: 200px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid papayawhip;
  border-radius: 3px;
  ::placeholder {
    color: #faaaaa;
  }
`;

const LoginInput = styled.input`
  font-size: 15px;
  padding: 5px;
  margin-top: 10px;
  height: 30px;
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #faaaaa;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
`;

const ExplainText = styled.div`
  color: #aeaeae;
  font-size: 15px;
  margin-top: 20px;
`;
