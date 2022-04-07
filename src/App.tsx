import React, { useEffect } from "react";
import GlobalStyle from "styles/GlobalStyle";
import { Mobile, PC } from "./styles/Mediaquery";
import Login from "./components/Login";
import Main from "./components/Main";
import { app, auth, database, dbRef } from "./service/firebase";
import { set, push, ref as fireRef } from "firebase/database";
function App() {
  console.log("app: ", app);
  console.log("auth: ", auth);
  console.log("database: ", database);
  console.log("dbRef: ", dbRef);
  useEffect(() => {
    set(push(fireRef(database, "/test")), "declan");
  }, []);

  return (
    <>
      <GlobalStyle />
      <Main />
      {/* <Login /> */}
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
