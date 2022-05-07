import React from "react";
import styled from "styled-components";
import Header from "components/Header";
import { useParams } from "react-router-dom";
import { useObject } from "react-firebase-hooks/database";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
import parse from "date-fns/parse";
import add from "date-fns/add";
import differenceInDays from "date-fns/differenceInDays";
import differenceInHours from "date-fns/differenceInHours";
import differenceInMinutes from "date-fns/differenceInMinutes";

function Read() {
  const { bottleUid, memoUid } = useParams();
  const db = getDatabase();
  const auth = getAuth();
  const userUid = auth.currentUser?.uid;
  const memoRef = ref(db, `${userUid}/${bottleUid}/${memoUid}`);
  const [snapshot, loading, error] = useObject(memoRef);

  const getETA = (memoDate: any) => {
    const targetDate = add(parse(memoDate, "yyyy.MM.dd HH:mm:ss", new Date()), {
      days: 1,
    });
    const diffrenceInDay = differenceInDays(new Date(), targetDate);
    let result = "";
    let differenceInHour = 0;
    let differenceInMinute = 0;

    if (diffrenceInDay === 0) {
      differenceInHour = differenceInHours(new Date(), targetDate);
    }
    if (differenceInHour === 0) {
      differenceInMinute = differenceInMinutes(new Date(), targetDate);
    }
    if (diffrenceInDay) {
      result = `${differenceInDays(
        new Date(),
        targetDate
      )}일 뒤에 읽을 수 있습니다.`;
    } else if (differenceInHour) {
      result = `${differenceInHours(
        new Date(),
        targetDate
      )}시간 뒤에 읽을 수 있습니다.`.substring(1);
    } else if (differenceInMinute) {
      result = `${differenceInMinutes(
        new Date(),
        targetDate
      )}분 뒤에 읽을 수 있습니다.`.substring(1);
    }

    return result;
  };

  let memo: Memo = {
    contents: "string",
    isOpened: true,
    memoColor: "string",
    picture: "string",
    title: "string",
    writtenDate: "string",
  };

  interface Memo {
    contents: string;
    isOpened: boolean;
    memoColor: string;
    picture: string;
    title: string;
    writtenDate: string;
  }
  if (snapshot) {
    const data = snapshot.val();
    if (data !== null) {
      memo = Object.values(data)[0] as Memo;
    }
  }
  if (memo && !loading) {
    const isOpened = memo.isOpened;
    return (
      <MainContainer>
        <Container>
          <Header></Header>
          <PaperWrapper>
            {isOpened && (
              <Paper>
                <Title>{memo.title}</Title>
                <DateContainer>{memo.writtenDate}</DateContainer>
                <Content>{memo.contents}</Content>
              </Paper>
            )}
            {!isOpened && (
              <Paper>
                <Title>{"한달 뒤에 읽을 수 있습니다"}</Title>
                <DateContainer>{getETA(memo.writtenDate)}</DateContainer>
                <Content>{"30일 뒤에 꺼내 볼 행복"}</Content>
              </Paper>
            )}
          </PaperWrapper>
        </Container>
      </MainContainer>
    );
  } else {
    return <></>;
  }
}

export default Read;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
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
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const Paper = styled.div`
  width: 90%;
  background-color: #ededed;
  min-height: 100vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
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

const Content = styled.div`
  margin-top: 10px;
  background-color: #ededed;
  min-height: 100vh;
  height: 100%;
  font-size: 15px;
  resize: none;
  border: none;
  width: 90%;
`;
