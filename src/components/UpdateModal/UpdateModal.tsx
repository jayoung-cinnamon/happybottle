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
        <DeleteBtn onClick={onClickDeleteUser}>탈퇴</DeleteBtn>
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
  z-index: 9;
  /* border: 1px solid blue; */
`;

const SlideWrapper = styled.div`
  margin: 30px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 5px dotted #729743;
  border-radius: 10px;
`;

const LogoutBtn = styled.button`
  font-size: 15px;
  padding: 5px;
  margin-top: 10px;
  height: 30px;
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #307d15;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
`;
const DeleteBtn = styled(LogoutBtn)`
  background: #a31414;
`;
