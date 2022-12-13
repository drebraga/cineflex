import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Load from "../styles/LoadingStyle";
import ReturnButton from "../components/ReturnButton";

const TickesPage = ({
    seatsPicks,
    setMovie,
    setSession,
    setSeatsPicks,
    seatsPicksIDS,
    setSeatsPicksIDS,
    compradores,
    setCompradores
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
            const buyers = [...compradores, {
                idAssento: seatId,
                nome: '',
                cpf: ''
            }]
            setCompradores(buyers);
        } else {
            if (compradores.filter(e => e.idAssento === seatId)) {
                if (window.confirm("Deseja realmente retirar o assento?")) {
                    const seatsSelected = seatsPicks.filter((e) => e !== seat);
                    setSeatsPicks(seatsSelected);
                    const seatsSelectedIDS = seatsPicksIDS.filter((e) => e !== seatId);
                    setSeatsPicksIDS(seatsSelectedIDS);
                    const compradoresSelected = compradores.filter((e) => e.idAssento !== seatId);
                    setCompradores(compradoresSelected);
                }
            }
        }
    }

    const handleForm = (e, idAssento) => {
        e.preventDefault();
        const buyers = compradores.map(a =>
            a.idAssento === idAssento ? { ...a, [e.target.name]: e.target.value, } : a)
        setCompradores(buyers);
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
            <form onSubmit={() => navigate("/sucesso")}>
                {compradores.map((e, i) =>
                    <InputBox key={e.idAssento}>
                        <p>Nome do comprador:</p>
                        <input
                            data-test="client-name"
                            type="text"
                            placeholder="Digite seu nome..."
                            name="nome"
                            value={e.nome}
                            onChange={(event) => handleForm(event, e.idAssento)}
                            required
                        />
                        <p>CPF do comprador:</p>
                        <input
                            data-test="client-cpf"
                            type="text"
                            placeholder="Digite seu CPF..."
                            name="cpf"
                            value={e.cpf}
                            onChange={(event) => handleForm(event, e.idAssento)}
                            required
                        />
                    </InputBox>
                )}
                <Button
                    data-test="book-seat-btn"
                    type="submit"
                    value="Reservar assento(s)"
                />
            </form>
            <Footer data-test="footer">
                <img src={ticketsSession.movie.posterURL} alt={ticketsSession.movie.title} />
                {ticketsSession.movie.title}<br />
                {ticketsSession.day.weekday} - {ticketsSession.name}
            </Footer>
        </SessionPageStyle>
    )
}

export default TickesPage;

const SessionPageStyle = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    h1 {
        height: 100px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`;
const ListEx = styled.ul`
    width: 70%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;
    margin-bottom: 7%;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
const Seat = styled.input`
    width: 25px;
    height: 25px;
    background-color: ${props => (props.isAvailable === "selected") ? "#1AAE9E" :
        (props.isAvailable) ? "#C3CFD9" : "#FBE192"};
    border: 1px solid ${props => (props.isAvailable === "selected") ? "#0E7D71" :
        (props.isAvailable) ? "#7B8B99" : "#F7C52B"};;
    border-radius: 17px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
`;
const SeatList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 5%;
`;
const InputBox = styled.div`
    width: 85%;
    p {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #293845;
    }
    input {
        width: 100%;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin: 2% 0 2% 0;
    }
    input::placeholder {
        font-family: 'Roboto', sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #AFAFAF;
    }
`;
const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90px;
    display: flex;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #293845;
    img {
        height: 70px;
        margin: 10px;
    }
`;
const Button = styled.input`
    margin: 40px 0 140px 0;
    max-width: 225px;
    width: 100%;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
`;