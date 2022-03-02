import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway');
    
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: "Noto Sans", sans-serif;
    }

    main {
        width: 1280px;
        margin: 0 auto;
        padding: 0 20px;
        background-color: #f5f5f5;
    }
 `;

export default GlobalStyle;
