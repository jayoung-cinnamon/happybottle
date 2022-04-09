import React, { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import useTimeout from "../../hooks/useTimeout";
import Login from "components/Login";
import HbMain from "components/HbMain";
import Register from "components/Register";
import NickName from "components/NickName";
function Main() {
  const [splashScreen, SetSplashScreen] = useState(true);

  useTimeout(() => {
    SetSplashScreen(false);
  }, 5000);

  return (
    <MainContainer>
      {splashScreen && (
        <>
          <SplashLogoContainer>
            <SplashLogo />
            <Title>HAPPY BOTTLE</Title>
          </SplashLogoContainer>
        </>
      )}
      {/* {!splashScreen && <Login></Login>} */}
      {/* {!splashScreen && <NickName></NickName>} */}
      {!splashScreen && <Register></Register>}
      {/* {!splashScreen && <HbMain></HbMain>} */}
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const SplashLogoContainer = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 25px;
  font-size: 25px;
  font-weight: 500;
`;

const SplashLogo = styled.div`
  width: 90px;
  height: 90px;
  background-image: url("images/main/SmileLogo.png");
  background-size: 100% 100%;
`;
