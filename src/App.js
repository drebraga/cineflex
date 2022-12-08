import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import MainPage from "./components/MainPage";
import SessionPage from "./components/SessionPage";
import TickesPage from "./components/TickesPage";
import QuitPage from "./components/QuitPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header>CINEFLEX</Header>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/sessoes/:idFilme" element={<SessionPage />}></Route>
        <Route path="/assentos/:idSessao" element={<TickesPage />}></Route>
        <Route path="/sucesso" element={<QuitPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Header = styled.header`
  background-color: #C3CFD9;
  width: 100%;
  height: 70px;
  color: #E8833A;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`