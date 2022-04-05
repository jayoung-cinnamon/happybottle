import React from "react";
import GlobalStyle from "styles/GlobalStyle";
import { Mobile, PC } from "./styles/Mediaquery";
function App() {
  return (
    <>
      <GlobalStyle />
      <Mobile>
        <div>
          <h1>모바일</h1>
        </div>
      </Mobile>
      <PC>
        <div>
          <h1>PC</h1>
        </div>
      </PC>
    </>
  );
}

export default App;
