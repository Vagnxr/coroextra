import { fonts } from "helper";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

${fonts("Nunito", "woff2")};

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font: 16px 'Nunito', sans-serif;
}

#root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
}

button {
    cursor: pointer;
}
`;
