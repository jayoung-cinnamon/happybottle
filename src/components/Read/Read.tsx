import React from "react";
import styled from "styled-components";
import Header from "components/Header";
function Read() {
  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <PaperWrapper>
          <Paper>
            <Title>꺼내읽기 제목 </Title>
            <DateContainer>날짜</DateContainer>
            <Content>꺼내읽기 내용 </Content>
          </Paper>
        </PaperWrapper>
      </Container>
    </MainContainer>
  );
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
