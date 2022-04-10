import React, { useState } from "react";
import styled from "styled-components";
import { signUpWithEmailPassword } from "service/auth";
import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newAccount, setNewAccount] = useState(true); // 새로운 유저인지 확인(초기값: true)
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
  const onRegister = async (e: any) => {
    e.preventDefault();
    try {
      let data;
      data = signUpWithEmailPassword(email, password);
      console.log(data);
      alert("회원가입완료");
      navigate("/nickname");
    } catch (error) {
      console.log(`error : ${error}`);
    }
  };

  return (
    <MainContainer>
      <RegisterContainer>
        <Logo />
        <Title>Hi!</Title>
        <InputContainer>
          <Input
            onChange={onChange}
            value={email}
            name="email"
            type="email"
            placeholder="email"
            required
          ></Input>
          <Input
            onChange={onChange}
            value={password}
            name="password"
            type="password"
            placeholder="password"
            required
          ></Input>

          <RegisterInput type="button" value="회원가입" onClick={onRegister} />
        </InputContainer>
        <LoginContainer>
          <RegisterText>이미 회원이신가요?</RegisterText>
          <StyledLink to="/login">
            <LoginBtn>로그인</LoginBtn>
          </StyledLink>
        </LoginContainer>
        <GoogleLoginBtn>Google로 로그인</GoogleLoginBtn>
      </RegisterContainer>
    </MainContainer>
  );
}

export default Index;

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
  padding: 10px;
`;

const RegisterContainer = styled.div`
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
  background-image: url("images/main/EyeSmile.png");
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

const RegisterInput = styled.input`
  font-size: 15px;
  padding: 5px;
  margin-top: 10px;
  height: 30px;
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff8686;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  margin-top: 10px;
  width: 210px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const RegisterText = styled.div`
  font-size: 12px;
`;

const LoginBtn = styled.button`
  font-size: 13px;
  padding: 3px;
  height: 30px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #faaaaa;
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
