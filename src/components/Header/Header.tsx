import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { loginStatus } from "service/auth";
import { signOut, getAuth, deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Popup from "reactjs-popup";
import UpdateModal from "components/UpdateModal";
import { useRecoilState } from "recoil";
import { modalRecoilStore } from "recoil/mainModal";
const Header = () => {
  const auth = getAuth();
  const [open, setOpen] = useRecoilState(modalRecoilStore);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    setOpen(false);
  }, []);

  const onClickUpdateInfo = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(!open);
  };

  useEffect(() => {
    console.log(`open: ${open}`);
  }, [open]);
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <Clover onClick={onClickUpdateInfo} />
          <TextContainer>
            <Hello>Hello</Hello>
            {user ? <UserName>{user.displayName} :)</UserName> : <></>}
          </TextContainer>
        </HeaderWrapper>
      </HeaderContainer>
      {open ? (
        <ModalContainer modalOpen={open}>
          <UpdateModal></UpdateModal>
        </ModalContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
interface SlideProps {
  modalOpen: boolean;
}

const HeaderContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  position: relative;
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
  background-image: url("/images/main/Clover.png");
  background-size: 100% 100%;
  cursor: pointer;
`;

const LogoutBtn = styled.button`
  border: 1px solid red;
  width: 30px;
  height: 30px;
`;

const ModalContainer = styled.div<SlideProps>`
  width: 100%;
  /* border: 1px solid blue; */
  height: 100vh;
  /* transition: transform 1s linear;
  transform: translateX(-100%);
  position: fixed; */
  /* left: 0; */
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* ${(props) =>
    props.modalOpen &&
    css`
      background-color: red;
      transform: translateX(0px);
    `} */
`;
