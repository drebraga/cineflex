import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Load from "../styles/LoadingStyle";

const SessionPage = () => {
    const { idFilme } = useParams();
    const [movieSessions, setMovieSessions] = useState(null);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
        promise.then((res) => setMovieSessions(res.data));
        promise.catch((err) => console.log(err.response.data));
    }, []);

    if (movieSessions === null) {
        return <Load />
    }

    return (
        <SessionPageStyle>
            <h1>Selecione o horário</h1>
            <SessionList>
                {movieSessions.days.map(e =>
                    <ul data-test="movie-day" key={e.id}>
                        <p>{e.weekday} {e.date}</p>
                        <Session>
                            {e.showtimes.map(e =>
                                <Link data-test="showtime" key={e.id} to={`/assentos/${e.id}`}>
                                    <SessionBox>{e.name}</SessionBox>
                                </Link>
                            )}
                        </Session>
                    </ul>
                )}
            </SessionList>
            <Footer data-test="footer">
                <img src={movieSessions.posterURL} alt={movieSessions.title} />
                {movieSessions.title}
            </Footer>
        </SessionPageStyle>
    )
}

export default SessionPage;


const SessionPageStyle = styled.main`
    width: 100%;
    a{
        text-decoration: none;
        margin: 0 -4% 0 7%;
    }
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
    p {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #293845;
        margin: 0 0 7% 7%;
    }
`;

const SessionList = styled.ul`
    padding-bottom: 80px;
`;

const Session = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10%;
`;

const SessionBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    
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