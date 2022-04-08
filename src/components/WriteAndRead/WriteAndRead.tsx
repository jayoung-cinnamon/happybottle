import React from "react";
import styled from "styled-components";
function WriteAndRead() {
  return (
    <Container>
      <WriteLogo />
      <ReadLogo />
    </Container>
  );
}

export default WriteAndRead;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 35px;
  border: 1px solid red;
  margin-bottom: 35px;
`;

const WriteLogo = styled.div`
  width: 95px;
  height: 120px;
  background-image: url("images/main/Write.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const ReadLogo = styled.div`
  width: 100px;
  height: 100px;
  background-image: url("images/main/Read.png");
`;
