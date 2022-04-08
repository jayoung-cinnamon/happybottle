import React, { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LoginContainer>
      <Logo />
      <Title>HAPPY BOTTLE</Title>
      <InputContainer>
        <Input
          name="email"
          type="email"
          value={email}
          placeholder="email"
          required
        ></Input>
        <Input
          name="password"
          type="password"
          value={password}
          placeholder="password"
          required
        ></Input>
        <LoginInput type="submit" value="Login"></LoginInput>
      </InputContainer>
      <RegisterContainer>
        <RegisterText>회원이 아니신가요?</RegisterText>
        <RegisterBtn>회원가입</RegisterBtn>
      </RegisterContainer>
      <GoogleLoginBtn>Google로 로그인</GoogleLoginBtn>
    </LoginContainer>
  );
}

export default Login;
// TODO: 컨테이너 위치 조정 필요 - 세로 중앙 정렬
const LoginContainer = styled.div`
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
  background-image: url("images/main/SmileLogo.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* border: 1px solid red; */
`;

const InputContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
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

const RegisterContainer = styled.div`
  margin-top: 10px;
  width: 210px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const RegisterText = styled.div`
  font-size: 12px;
`;

const RegisterBtn = styled.button`
  font-size: 13px;
  padding: 3px;
  height: 30px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff8686;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
`;
const GoogleLoginBtn = styled.button`
  margin-top: 10px;
  font-size: 13px;
  padding: 3px;
  height: 30px;
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a5aac7;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
`;
