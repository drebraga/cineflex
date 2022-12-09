import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Sucess = ({ movie, session, seatsPicks, userName, userCPF, seatsPicksIDS }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const objAssentos = { ids: seatsPicksIDS, name: userName, cpf: userCPF }
        const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", objAssentos);
        promise.then((res) => console.log("Pedido enviado com sucesso"));
        promise.catch((err) => console.log(err.response.data));
    }, []);

    return (
        <Container>
            <Titulo>Pedido feito<br />com sucesso!</Titulo>
            <ListaFinal>
                <li data-test="movie-info">
                    <SubTitulo>Filme e sessão</SubTitulo>
                    <Texto>{movie}</Texto>
                    <Texto>{session.weekday} {session.day}</Texto>
                </li>
                <li data-test="seats-info">
                    <SubTitulo>Ingressos</SubTitulo>
                    {seatsPicks.map(e => <Texto key={e}>Assento {e}</Texto>)}
                </li>
                <li data-test="client-info">
                    <SubTitulo>Comprador</SubTitulo>
                    <Texto>Nome: {userName}</Texto>
                    <Texto>CPF: {userCPF}</Texto>
                </li>
            </ListaFinal>
            <Button
                data-test="go-home-btn"
                type="button"
                value="Voltar pra Home"
                onClick={() => navigate("/")}
            />
        </Container>
    )
}

export default Sucess;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ListaFinal = styled.ul`
    width: 80%;
    li {
        margin: 0 0 50px 0;
    }
`;
const Texto = styled.p`
    margin: 0 0 10px 0;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
`;
const SubTitulo = styled.h2`
    margin: 0 0 10px 0;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
`;
const Titulo = styled.h1`
    height: 110px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
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