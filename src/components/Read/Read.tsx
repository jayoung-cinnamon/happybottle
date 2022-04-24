//@ts-nocheck

import React from "react";
import styled from "styled-components";
import Header from "components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useObject } from "react-firebase-hooks/database";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
function Read() {
  const { bottleUid, memoUid } = useParams();
  console.log("{bottleUid}: ", bottleUid);
  console.log("{memoUid}: ", memoUid);
  const navigate = useNavigate();
  const db = getDatabase();
  const auth = getAuth();
  const userUid = auth.currentUser?.uid;
  const memoRef = ref(db, `${userUid}/${bottleUid}/${memoUid}`);
  const [snapshot, loading, error] = useObject(memoRef);
  let memo;
  if (snapshot) {
    console.log("memo.val(): ", snapshot.val());
    const data = snapshot.val();
    if (data !== null) {
      memo = Object.values(data)[0];
    }
  }
  if (!loading) {
    return (
      <MainContainer>
        <Container>
          <Header></Header>
          <PaperWrapper>
            <Paper>
              <Title>{memo.title} </Title>
              <DateContainer>{memo.writtenDate}</DateContainer>
              <Content>{memo.contents}</Content>
            </Paper>
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
