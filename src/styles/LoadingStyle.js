import styled from "styled-components";

const Load = () => {
    return (
        <LoadingArea>
            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="Carregando..." />
        </LoadingArea>
    )
}

const LoadingArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    img{
        height: 5%;
    }
`;

export default Load;