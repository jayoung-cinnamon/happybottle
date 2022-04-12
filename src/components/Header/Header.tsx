import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { loginStatus } from "service/auth";
import { signOut, getAuth, deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    try {
      signOut(auth);
      navigate("/");
      console.log("로그아웃");
    } catch (error) {
      console.log(error);
    }
  };

  const onClickDeleteUser = async (e: any) => {
    e.preventDefault();
    try {
      let data = await deleteUser(user!);
      console.log(user);
      console.log(data);
      alert("탈퇴되었습니다");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Clover />
        {/* <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
      <LogoutBtn onClick={onClickDeleteUser}>탈퇴</LogoutBtn> */}
        <TextContainer>
          <Hello>Hello</Hello>
          {user ? <UserName>{user.displayName} :)</UserName> : <></>}
        </TextContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  width: 90%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 50%; */
  padding: 10px;
`;

const Hello = styled.div`
  font-size: 23px;
  margin-bottom: 10px;
  text-align: right;
`;

const UserName = styled.div`
  font-size: 23px;
  text-align: right;
`;

const Clover = styled.div`
  width: 80px;
  height: 70px;
  background-image: url("images/main/Clover.png");
  background-size: 100% 100%;
`;

const LogoutBtn = styled.button`
  border: 1px solid red;
  width: 30px;
  height: 30px;
`;
