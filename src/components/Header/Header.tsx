import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <Hello>Hello</Hello>
        <UserName>UserName :)</UserName>
      </TextContainer>
      <Clover />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid black;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
`;

const Hello = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`;

const UserName = styled.div`
  font-size: 25px;
`;

const Clover = styled.div`
  width: 90px;
  height: 80px;
  background-image: url("images/main/Clover.png");
  background-size: 100% 100%;
`;
