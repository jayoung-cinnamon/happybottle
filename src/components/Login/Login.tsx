import React, { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";

function Login() {
  return <LoginContainer></LoginContainer>;
}

export default Login;
// TODO: 컨테이너 위치 조정 필요 - 세로 중앙 정렬
const LoginContainer = styled.div`
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  min-height: 50vh;
  background-color: blue;
`;
