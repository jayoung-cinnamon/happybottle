import React, { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { setAuthErrorCode } from "service/auth";
function Login() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const hookLogin = async (e: any) => {
    try {
      let data;
      e.preventDefault();
      data = await signInWithEmailAndPassword(auth, email, password);
      navigate("/hbmain");
      console.log("로그인성공");
    } catch (error: any) {
      console.log(error.code);
      alert(setAuthErrorCode(error.code));
    }
  };

  return (
    <MainContainer>
      <LoginContainer>
        <Logo />
        <Title>HAPPY BOTTLE</Title>
        <InputContainer>
          <Input
            onChange={onChange}
            name="email"
            type="email"
            value={email}
            placeholder="email"
            required
          ></Input>
          <Input
            onChange={onChange}
            name="password"
            type="password"
            value={password}
            placeholder="password"
            required
          ></Input>
          <LoginInput onClick={hookLogin}>로그인</LoginInput>
        </InputContainer>
        <RegisterContainer>
          <RegisterText>회원이 아니신가요?</RegisterText>
          <StyledLink to="/register">
            <RegisterBtn>회원가입</RegisterBtn>
          </StyledLink>
        </RegisterContainer>
        <GoogleLoginBtn>Google로 로그인</GoogleLoginBtn>
      </LoginContainer>
    </MainContainer>
  );
}

export default Login;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 10px; */
`;

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
  background-image: url("/images/main/SmileLogo.png");
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

const LoginInput = styled.button`
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;
