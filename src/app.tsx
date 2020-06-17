import React, { useState } from "react";
import TagManager from "react-gtm-module";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Routers } from "routes/router";

import light from "styles/themes/light";
import dark from "styles/themes/dark";

import Header from "./layout/Header";

export const App: React.FunctionComponent = () => {
  const tagManagerArgs = {
    gtmId: `${process.env.REACT_APP_GTM_ID}`,
  };
  TagManager.initialize(tagManagerArgs);

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header toggleTheme={toggleTheme} />
          <Routers />
        </Router>
      </ThemeProvider>
    </>
  );
};
