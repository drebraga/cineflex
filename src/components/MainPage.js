import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MainPage = () => {
    const [movieList, setMovieList] = useState(null);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promise.then((res) => setMovieList(res.data));
        promise.catch((err) => console.log(err));
    }, []);

    if (movieList === null) {
        return <div>Carregando...</div>
    }

    return (
        <MainPageStyle>
            <h1>Selecione o filme</h1>
            <ul>
                {movieList.map((e) =>
                    <Link key={e.id} to={`/sessoes/${e.id}`} >
                        <Image src={e.posterURL} alt={e.title} />
                    </Link>
                )}
            </ul>
        </MainPageStyle>
    )
}

export default MainPage;

const MainPageStyle = styled.main`
    width: 100%;
    h1 {
        height: 100px;
        font-family: 'Roboto';
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
`

const Image = styled.img`
    width: 40%;
    margin: 5%;
`