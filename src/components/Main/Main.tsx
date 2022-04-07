import React, { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import useTimeout from "../../hooks/useTimeout";

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
          </SplashLogoContainer>
        </>
      )}
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  height: 100vh;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SplashLogoContainer = styled.div`
  width: 50%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SplashLogo = styled.div`
  width: 84px;
  height: 81px;
  background-image: url("images/main/SmileLogo.png");
  background-size: 100% 100%;
`;
