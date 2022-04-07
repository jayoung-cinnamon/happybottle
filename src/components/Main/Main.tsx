import React, { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import useTimeout from "../../hooks/useTimeout";
function Main() {
  const [splashScreen, SetSplashScreen] = useState(true);
  useTimeout(() => {
    SetSplashScreen(false);
  }, 1000);

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
