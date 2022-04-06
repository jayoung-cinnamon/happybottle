import React from "react";
import GlobalStyle from "styles/GlobalStyle";
import { Mobile, PC } from "./styles/Mediaquery";
import Login from "./components/Login";
import Main from "./components/Main";
function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
      <Login />
      {/* <Mobile>
        <div>
          <h1>모바일</h1>
        </div>
      </Mobile>
      <PC>
        <div>
          <h1>PC</h1>
        </div>
      </PC> */}
    </>
  );
}

export default App;
