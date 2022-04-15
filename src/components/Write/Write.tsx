import React from "react";
import Header from "components/Header";
import styled from "styled-components";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "service/firebase";
import { getDatabase, ref, set } from "firebase/database";
function Write() {
  // const dbService = initializeApp.firestore();
  const navigate = useNavigate();
  const getDate = () => {
    const date = new Date();
    const formattedDate = format(date, "yyyy.MM.dd HH:mm:ss");
    return formattedDate;
  };

  // function writeUserData(
  //   userId: string,
  //   name: string,
  //   email: string,
  //   imageUrl: string
  // ) {
  //   const db = getDatabase();
  //   set(ref(db, "userUid/" + userId), {
  //     writtenDate: getDate(),
  //     email: "73381216@naver.com",
  //     profile_picture: "hi.jpg",
  //   });
  // }
  const writeUserData = (
    userUid: string,
    writtenDate: string,
    email: string,
    picture: string
  ) => {
    const db = getDatabase();
    set(ref(db, "userUid/" + userUid), {
      writtenDate: getDate(),
      email: "73381216@naver.com",
      picture: "hi.jpg",
    });
    console.log(`db`);
  };
  const obSubmit = async (e: any) => {
    e.preventDefault();
    return writeUserData;
  };

  const onClickSave = (e: any) => {
    if (
      window.confirm(`저장 후엔 수정할 수 없어요🥲
계속 저장할까요?`)
    ) {
      obSubmit(e);
      console.log(e);
      alert("저장되었어요! 한 달 뒤에 만나요!😙");
    } else {
      console.log("취소");
    }
  };

  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <PaperWrapper>
          <Paper>
            <Title type="text" placeholder="제목을 입력해주세요"></Title>
            <DateContainer>{getDate()}</DateContainer>
            <Content placeholder="오늘 행복했던 순간을 적어주세요 :)"></Content>
          </Paper>
          <BtnWrapper>
            <SubmitBtn onClick={onClickSave}>병에 담기</SubmitBtn>
          </BtnWrapper>
        </PaperWrapper>
      </Container>
    </MainContainer>
  );
}

export default Write;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  /* align-items: center; */
  padding: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PaperWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const Paper = styled.div`
  width: 90%;
  background-color: #ededed;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.input`
  margin-top: 30px;
  padding-bottom: 10px;
  width: 90%;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid grey;
  background-color: #ededed;
`;

const DateContainer = styled.div`
  margin: 13px;
  width: 90%;
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  font-weight: 400;
`;

const Content = styled.textarea`
  margin-top: 10px;
  background-color: #ededed;
  min-height: 100vh;
  height: 100%;
  font-size: 15px;
  resize: none;
  border: none;
  width: 90%;
`;

const BtnWrapper = styled.div`
  width: 90%;
  margin: 10px;
  display: flex;
  justify-content: flex-end;
`;

const SubmitBtn = styled.button`
  width: 100px;
  height: 45px;
  background-color: #a5aac7;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
`;
