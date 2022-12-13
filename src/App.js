import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import MainPage from "./pages/MainPage";
import SessionPage from "./pages/SessionPage";
import TickesPage from "./pages/TickesPage";
import Sucess from "./pages/SucessPage";
import { useState } from "react";

function App() {
  const [seatsPicks, setSeatsPicks] = useState([]);
  const [seatsPicksIDS, setSeatsPicksIDS] = useState([]);
  const [movie, setMovie] = useState("");
  const [session, setSession] = useState("");
  const [compradores, setCompradores] = useState([]);


  function restart() {
    setSeatsPicks([]);
    setSeatsPicksIDS([]);
    setMovie("");
    setSession("");
    setCompradores([]);
  }


  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header>
        CINEFLEX
      </Header>
      <Routes>
        <Route path="/" element={
          <MainPage
            restart={restart}
          />} />
        <Route path="/sessoes/:idFilme" element={<SessionPage />} />
        <Route path="/assentos/:idSessao" element={
          <TickesPage
            seatsPicks={seatsPicks}
            setMovie={setMovie}
            setSession={setSession}
            setSeatsPicks={setSeatsPicks}
            seatsPicksIDS={seatsPicksIDS}
            setSeatsPicksIDS={setSeatsPicksIDS}
            compradores={compradores}
            setCompradores={setCompradores}
          />}
        />
        <Route path="/sucesso" element={
          <Sucess
            movie={movie}
            session={session}
            seatsPicks={seatsPicks}
            seatsPicksIDS={seatsPicksIDS}
            compradores={compradores}
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
  position: relative;
`;
