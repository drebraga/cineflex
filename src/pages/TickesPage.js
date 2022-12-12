import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Load from "../styles/LoadingStyle";
import ReturnButton from "../components/ReturnButton";

const TickesPage = ({
    seatsPicks,
    userName,
    setUserName,
    userCPF,
    setUserCPF,
    setMovie,
    setSession,
    setSeatsPicks,
    seatsPicksIDS,
    setSeatsPicksIDS
}) => {
    const { idSessao } = useParams();
    const [ticketsSession, setTicketSession] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
        promise.then((res) => {
            setTicketSession(res.data);
            setMovie(res.data.movie.title);
            setSession(`${res.data.day.date} ${res.data.name}`);
        });
        promise.catch((err) => console.log(err.response.data));
    }, []);

    if (ticketsSession === null) {
        return <Load />
    }

    const selectSeat = (seat, isAvailable, seatId) => {
        if (!isAvailable) {
            alert("Esse assento está indisponível");
        } else if (!seatsPicks.includes(seat)) {
            const seatsSelected = [...seatsPicks, seat];
            const seatsSelectedIDS = [...seatsPicksIDS, seatId];
            setSeatsPicks(seatsSelected);
            setSeatsPicksIDS(seatsSelectedIDS);
        } else {
            const seatsSelected = seatsPicks.filter((e) => e !== seat);
            setSeatsPicks(seatsSelected);
            const seatsSelectedIDS = seatsPicksIDS.filter((e) => e !== seatId);
            setSeatsPicks(seatsSelectedIDS);
        }
    }

    return (
        <SessionPageStyle>
            <ReturnButton />
            <h1>Selecione o(s) assento(s)</h1>
            <SeatList>
                {ticketsSession.seats.map(e =>
                    <li key={e.id}>
                        <Seat
                            data-test="seat"
                            onClick={() => selectSeat(e.name, e.isAvailable, e.id)}
                            type="button"
                            isAvailable={(seatsPicks.includes(e.name)) ? "selected" : e.isAvailable}
                            value={e.name}
                        />
                    </li>
                )}
            </SeatList>
            <ListEx>
                <li>
                    <Seat isAvailable="selected"></Seat>
                    Selecionado
                </li>
                <li>
                    <Seat isAvailable={true}></Seat>
                    Disponível
                </li>
                <li>
                    <Seat isAvailable={false}></Seat>
                    Indisponível
                </li>
            </ListEx>
            <InputBox>
                <p>Nome do comprador:</p>
                <input
                    data-test="client-name"
                    type="text"
                    placeholder="Digite seu nome..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <p>CPF do comprador:</p>
                <input
                    data-test="client-cpf"
                    type="text"
                    placeholder="Digite seu CPF..."
                    value={userCPF}
                    onChange={(e) => setUserCPF(e.target.value)}
                />
            </InputBox>
            <Button
                data-test="book-seat-btn"
                type="button"
                value="Reservar assento(s)"
                onClick={() => navigate("/sucesso")}
            />
            <Footer data-test="footer">
                <img src={ticketsSession.movie.posterURL} alt={ticketsSession.movie.title} />
                {ticketsSession.movie.title}<br />
                {ticketsSession.day.weekday} - {ticketsSession.name}
            </Footer>
        </SessionPageStyle>
    )
}

export default TickesPage;
