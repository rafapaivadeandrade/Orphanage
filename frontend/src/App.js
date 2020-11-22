import React from "react";
import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/userPersistedState";
import "./styles/global.css";
import Routes from "./routes";
import ThemeSwitcher from "./components/ThemeSwitcher";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
    console.log(theme.title);
  };
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ThemeSwitcher toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
