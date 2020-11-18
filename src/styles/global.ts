import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    // Box Shadow
    --box-shadow: #00000030;
    --hover-shadow: #00000080;

    // Color
    --primary-color: #2E8BC0;
    --light-color: #fff;
    --dark-color: #333;
    --muted-color: #656565;
    --row-color: #cccccc30;

    // Buttons
    --button-primary: #145DA0;
    --hover-primary: #0e4171;
    --button-secondary: #2E8BC0;
    --hover-secondary: #145DA0;
  }

  .post {
    text-decoration: none;
  }
`;

export default GlobalStyle;
