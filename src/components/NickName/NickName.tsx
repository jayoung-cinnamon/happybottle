import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useUpdateProfile } from "react-firebase-hooks/auth";

function NickName() {
  const auth = getAuth();

  const navigate = useNavigate();
  const [nickName, setNickName] = useState("");
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "nickname") {
      setNickName(value);
    }
  };
  useEffect(() => {
    console.log("nickname:", nickName);
  }, [nickName]);

  const updateUserNickName = async (e: any) => {
    try {
      e.preventDefault();
      let data = await updateProfile({ displayName: nickName, photoURL: "" });
      console.log(data);
      navigate("/hbmain");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <MainContainer>
      <NickNameContainer>
        <Logo />
        <Title>Welcome!</Title>
        <ExplainText>닉네임을 입력해주세요</ExplainText>
        <InputContainer>
          <Input
            onChange={onChange}
            name="nickname"
            type="text"
            placeholder="nickname"
            value={nickName}
            required
          ></Input>
          <LoginInput
            type="button"
            value="회원가입완료"
            onClick={updateUserNickName}
          ></LoginInput>
        </InputContainer>
      </NickNameContainer>
    </MainContainer>
  );
}

export default NickName;

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
