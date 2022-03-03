import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: "Noto Sans", sans-serif;
    }

    main {
        width: 1280px;
        margin: 32px auto;
    }
 `;

export default GlobalStyle;
