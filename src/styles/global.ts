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
    max-width: 100%;
    margin: 0 auto;
}

button {
    cursor: pointer;
}
`;
