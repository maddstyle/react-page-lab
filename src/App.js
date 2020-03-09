import React from "react";
import Home from "./pages/Home/index";
import NavBar from "./pages/Top/index";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <>
      <NavBar />
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
