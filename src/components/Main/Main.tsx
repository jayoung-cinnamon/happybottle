import React, { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";

function Main() {
  const [splashScreen, SetSplashScreen] = useState(true);
  useEffect(() => {
    //TODO: setTimeout hook으로 변경
    setTimeout(() => {
      SetSplashScreen(false);
    }, 3000);
  });

  return splashScreen ? <MainContainer /> : <></>;
}

export default Main;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  background-color: beige;
`;
