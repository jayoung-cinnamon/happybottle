import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        /* 배경 테스트용도 */
        /* background-color: violet; */
        background-color:  #24A19C;
        box-sizing: border-box;
    };

    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };

    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
`;
export default GlobalStyle;
