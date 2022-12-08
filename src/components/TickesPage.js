import styled from "styled-components";

const FILME = {
    id: 1,
    name: "15:00",
    day: {
        id: 24062021,
        weekday: "Quinta-feira",
        date: "24/06/2021",
    },
    movie: {
        id: 1,
        title: "2067",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        releaseDate: "2020-10-01T00:00:00.000Z",
    },
    seats: [
        {
            id: 1,
            name: "1",
            isAvailable: false,
        },
        {
            id: 2,
            name: "2",
            isAvailable: true,
        },
        {
            id: 3,
            name: "3",
            isAvailable: true,
        },
        {
            id: 4,
            name: "4",
            isAvailable: true,
        },
        {
            id: 5,
            name: "5",
            isAvailable: true,
        },
        {
            id: 6,
            name: "6",
            isAvailable: true,
        },
        {
            id: 7,
            name: "7",
            isAvailable: true,
        },
        {
            id: 8,
            name: "8",
            isAvailable: true,
        },
        {
            id: 9,
            name: "9",
            isAvailable: true,
        },
        {
            id: 10,
            name: "10",
            isAvailable: true,
        },
        {
            id: 11,
            name: "11",
            isAvailable: true,
        },
        {
            id: 12,
            name: "12",
            isAvailable: true,
        },
        {
            id: 13,
            name: "13",
            isAvailable: true,
        },
        {
            id: 14,
            name: "14",
            isAvailable: true,
        },
        {
            id: 15,
            name: "15",
            isAvailable: true,
        },
        {
            id: 16,
            name: "16",
            isAvailable: true,
        },
        {
            id: 17,
            name: "17",
            isAvailable: true,
        },
        {
            id: 18,
            name: "18",
            isAvailable: true,
        },
        {
            id: 19,
            name: "19",
            isAvailable: true,
        },
        {
            id: 20,
            name: "20",
            isAvailable: true,
        },
        {
            id: 21,
            name: "21",
            isAvailable: true,
        },
        {
            id: 22,
            name: "22",
            isAvailable: true,
        },
        {
            id: 23,
            name: "23",
            isAvailable: true,
        },
        {
            id: 24,
            name: "24",
            isAvailable: true,
        },
        {
            id: 25,
            name: "25",
            isAvailable: true,
        },
        {
            id: 26,
            name: "26",
            isAvailable: true,
        },
        {
            id: 27,
            name: "27",
            isAvailable: true,
        },
        {
            id: 28,
            name: "28",
            isAvailable: true,
        },
        {
            id: 29,
            name: "29",
            isAvailable: true,
        },
        {
            id: 30,
            name: "30",
            isAvailable: true,
        },
        {
            id: 31,
            name: "31",
            isAvailable: true,
        },
        {
            id: 32,
            name: "32",
            isAvailable: true,
        },
        {
            id: 33,
            name: "33",
            isAvailable: true,
        },
        {
            id: 34,
            name: "34",
            isAvailable: true,
        },
        {
            id: 35,
            name: "35",
            isAvailable: true,
        },
        {
            id: 36,
            name: "36",
            isAvailable: true,
        },
        {
            id: 37,
            name: "37",
            isAvailable: true,
        },
        {
            id: 38,
            name: "38",
            isAvailable: true,
        },
        {
            id: 39,
            name: "39",
            isAvailable: true,
        },
        {
            id: 40,
            name: "40",
            isAvailable: true,
        },
        {
            id: 41,
            name: "41",
            isAvailable: true,
        },
        {
            id: 42,
            name: "42",
            isAvailable: true,
        },
        {
            id: 43,
            name: "43",
            isAvailable: true,
        },
        {
            id: 44,
            name: "44",
            isAvailable: true,
        },
        {
            id: 45,
            name: "45",
            isAvailable: true,
        },
        {
            id: 46,
            name: "46",
            isAvailable: true,
        },
        {
            id: 47,
            name: "47",
            isAvailable: true,
        },
        {
            id: 48,
            name: "48",
            isAvailable: true,
        },
        {
            id: 49,
            name: "49",
            isAvailable: true,
        },
        {
            id: 50,
            name: "50",
            isAvailable: true,
        },
    ]
}

const TickesPage = () => {
    return (
        <SessionPageStyle>
            <h1>Selecione o(s) assento(s)</h1>
            <ul>

            </ul>
            <ListEx>
                <li>
                    <Seat color="selected"></Seat>
                    Selecionado
                </li>
                <li>
                    <Seat color="available"></Seat>
                    Disponível
                </li>
                <li>
                    <Seat color="unavailable"></Seat>
                    Indisponível
                </li>
            </ListEx>
            <Footer>
                <img src={FILME.movie.posterURL} alt={FILME.movie.title} />
                {FILME.movie.title}<br />
                {FILME.day.weekday} - {FILME.name}
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
`

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
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Seat = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props => (props.color === "select") ? "#1AAE9E" : ""};
    border: 1px solid #0E7D71;
    border-radius: 17px;
    margin-bottom: 10px;
`

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
`