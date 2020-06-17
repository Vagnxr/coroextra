import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    greys: {
      primary: string;
      secondary: string;
    };
  }
}
