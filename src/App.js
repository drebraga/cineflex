import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import MainPage from "./components/MainPage";
import SessionPage from "./components/SessionPage";
import TickesPage from "./components/TickesPage";
import Sucess from "./components/Sucess";
import { useState } from "react";

function App() {
  const [seatsPicks, setSeatsPicks] = useState([]);
  const [seatsPicksIDS, setSeatsPicksIDS] = useState([]);
  const [userName, setUserName] = useState("");
  const [userCPF, setUserCPF] = useState("");
  const [movie, setMovie] = useState("");
  const [session, setSession] = useState("");

  function restart() {
    setSeatsPicks([]);
    setUserName("");
    setUserCPF("");
    setMovie("");
    setSession("");
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header>CINEFLEX</Header>
      <Routes>
        <Route path="/" element={
          <MainPage
            restart={restart}
          />} />
        <Route path="/sessoes/:idFilme" element={<SessionPage />} />
        <Route path="/assentos/:idSessao" element={
          <TickesPage
            seatsPicks={seatsPicks}
            userName={userName}
            setUserName={setUserName}
            userCPF={userCPF}
            setUserCPF={setUserCPF}
            setMovie={setMovie}
            setSession={setSession}
            setSeatsPicks={setSeatsPicks}
            seatsPicksIDS={seatsPicksIDS}
            setSeatsPicksIDS={setSeatsPicksIDS}
          />}
        />
        <Route path="/sucesso" element={
          <Sucess
            movie={movie}
            session={session}
            seatsPicks={seatsPicks}
            userName={userName}
            userCPF={userCPF}
            seatsPicksIDS={seatsPicksIDS}
          />} />
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
`;