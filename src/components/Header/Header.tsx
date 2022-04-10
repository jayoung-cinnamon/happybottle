import React from "react";
import styled from "styled-components";
import { signOut } from "service/auth";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    try {
      let data = signOut();
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <HeaderContainer>
      <TextContainer>
        <Hello>Hello</Hello>
        <UserName> user</UserName>
      </TextContainer>
      <Clover />
      <LogoutBtn onSubmit={logout} />
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

const LogoutBtn = styled.button`
  border: 1px solid red;
  width: 30px;
  height: 30px;
`;
