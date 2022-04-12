import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { signOut, getAuth, deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function UpdateModal() {
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
    <SlideMenu>
      <SlideWrapper>
        <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
        <LogoutBtn onClick={onClickDeleteUser}>탈퇴</LogoutBtn>
      </SlideWrapper>
    </SlideMenu>
  );
}

export default UpdateModal;

const SlideMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
`;

const SlideWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid green;
`;

const LogoutBtn = styled.button`
  border: 1px solid red;
  width: 30px;
  height: 30px;
`;
