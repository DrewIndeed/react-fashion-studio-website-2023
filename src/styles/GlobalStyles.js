import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";

const GlobalStyles = createGlobalStyle`
    *,*::before, *::after{
        margin: 0;
        padding: 0;
    }
    body{
        font-family: "Sirin Stencil";
        overflow-x: hidden;
    }
    h1, h2, h3, h4, h5, h6{
        margin: 0;
        padding: 0;
    }
    a {
        color: inherit;
        text-decoration : none
    }
    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome, Edge, Opera and Firefox */
    }
`;

export default GlobalStyles;
