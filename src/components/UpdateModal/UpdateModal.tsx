import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { signOut, getAuth, deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { updateUserInfo } from "service/auth";

function UpdateModal() {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [updateInfo, setUpdateInfo] = useState(false);
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

  const onClickHomeBtn = () => {
    navigate("/hbmain");
  };

  const onClickUpdateBtn = () => {
    setUpdateInfo(!updateInfo);
  };

  useEffect(() => {
    console.log(`updateInfo: ${updateInfo}`);
  }, [updateInfo]);

  // const updateUserNickName = (e: any) => {
  //   try {
  //     e.preventDefault();
  //     let data = updateUserInfo(nickName);
  //     console.log(data);
  //     navigate("/hbmain");
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  return (
    <SlideMenu>
      <SlideWrapper>
        <BUttonContainer>
          <HomeBtn onClick={onClickHomeBtn}>홈</HomeBtn>
          <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
        </BUttonContainer>
        <UpdateContainer>
          <UpdateBtn onClick={onClickUpdateBtn}>회원정보 수정</UpdateBtn>
          {updateInfo ? (
            <>
              <UpdateBox>
                {user ? (
                  <NameContainer>
                    <UserName>{user.displayName}</UserName>
                    <Input
                      name="nickname"
                      type="text"
                      placeholder="변경할 닉네임을 입력하세요"
                      required
                    ></Input>
                  </NameContainer>
                ) : (
                  <></>
                )}
                <DeleteBtn onClick={onClickDeleteUser}>탈퇴</DeleteBtn>
              </UpdateBox>
            </>
          ) : (
            <></>
          )}
        </UpdateContainer>
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

const BUttonContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UpdateContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const UpdateBtn = styled(LogoutBtn)`
  background: #729743;
`;

const HomeBtn = styled(LogoutBtn)`
  background-color: #485edf;
`;

const UpdateBox = styled.div`
  border: 1px solid blue;
  width: 100%;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const UserName = styled.div`
  font-size: 23px;
  text-align: right;
`;

const Input = styled.input`
  font-size: 13px;
  padding: 5px;
  margin-top: 10px;
  height: 25px;
  /* width: 200px; */
  border: 1px solid grey;
  border-radius: 3px;
  ::placeholder {
    color: #faaaaa;
  }
`;
