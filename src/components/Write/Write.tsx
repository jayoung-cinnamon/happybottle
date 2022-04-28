import React, { useState, useEffect, KeyboardEvent } from "react";
import Header from "components/Header";
import styled, { css } from "styled-components";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "service/firebase";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import { randomUid } from "utils/common";
import { getDateStringType, getDate } from "utils/date";
import Popup from "reactjs-popup";
import WritePopup from "components/WritePopup";
import { createIf } from "typescript";

function Write() {
  const auth = getAuth();
  console.log(auth.currentUser?.uid);

  const [content, setContent] = useState<string>("");
  const limitTextArea = (e: KeyboardEvent): void => {
    if (content.length > 200) {
      alert("글자수는 200자 이상 입력 할 수 없습니다.");
      return;
    }
  };
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(e.target.value);
  };
  const [title, setTitle] = useState<string>("");
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    console.log("content: ", content);
    console.log("title: ", title);
  }, [content, title]);

  const navigate = useNavigate();
  const [random, setRandom] = useState(randomUid(28));
  const target = random;
  useEffect(() => {
    const db = getDatabase();
    const userUid = auth.currentUser?.uid;
    const memoRef = ref(db, `${userUid}/${target}`);
    onValue(memoRef, (snapshot) => {
      const data = snapshot.val();
      console.log("data:", data);
      for (const [key, value] of Object.entries(data)) {
        //@ts-ignore
        setMemoData(value.memo);
      }
    });
  });
  let dataArr: any[] = [];
  const setMemoData = (data: any) => {
    dataArr.push(data);
    console.log("dataArr: ", dataArr);
  };

  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <PaperWrapper>
          <Paper>
            <Title
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChangeTitle(e);
              }}
              type="text"
              placeholder="제목을 입력해주세요"
              maxLength={20}
            ></Title>
            <DateContainer>{getDate()}</DateContainer>
            <Content
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                onChangeContent(e);
              }}
              placeholder="오늘 행복했던 순간을 적어주세요 :)"
              onKeyUp={limitTextArea}
            ></Content>
            <TextLimit>
              <span
                style={
                  content.length > 200 ? { color: "red" } : { color: "black" }
                }
              >
                {content.length}
              </span>
              / 200
            </TextLimit>
          </Paper>
          <BtnWrapper>
            <WritePopup
              content={content}
              title={title}
              date={getDate()}
              memoUid={getDateStringType()}
            />
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
  flex-direction: column;
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
  min-height: 40vh;
  height: 100%;
  font-size: 15px;
  resize: none;
  border: none;
  width: 90%;
  margin-bottom: 30px;
`;

const BtnWrapper = styled.div`
  width: 90%;
  margin: 10px;
  display: flex;
  justify-content: flex-end;
`;

const TextLimit = styled.div`
  width: 90%;
  height: 20px;
  text-align: right;
  font-size: 18px;
  color: grey;
  margin-bottom: 10px;
`;
