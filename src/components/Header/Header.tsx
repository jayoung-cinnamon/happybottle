import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { signOut, loginStatus } from "service/auth";
import { useNavigate } from "react-router-dom";
const Header = () => {
  // TODO: 타입 정의 해야하는데 일단은 디스플레이네임만 처리
  interface UserDataType {
    displayName: string | null;
  }
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserDataType>();
  const logout = () => {
    try {
      signOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const user = loginStatus();
    if (user.currentUser !== null) setUserData(user.currentUser);
  }, []);
  useEffect(() => {
    console.log("header userData: ", userData);
  }, [userData]);

  return (
    <HeaderContainer>
      <TextContainer>
        <Hello>Hello</Hello>
        {userData ? <UserName>{userData.displayName}</UserName> : <></>}
      </TextContainer>
      <Clover />
      <LogoutBtn onClick={logout} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid black;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
`;

const Hello = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`;

const UserName = styled.div`
  font-size: 25px;
`;

const Clover = styled.div`
  width: 90px;
  height: 80px;
  background-image: url("images/main/Clover.png");
  background-size: 100% 100%;
`;

const LogoutBtn = styled.button`
  border: 1px solid red;
  width: 30px;
  height: 30px;
`;
