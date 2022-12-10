import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

export default function ReturnButton() {
    const navigate = useNavigate();
    return <ButtonRet data-test="go-home-header-btn" onClick={() => navigate("/")}><BiArrowBack /></ButtonRet>
}

  const ButtonRet = styled.div`
  position: fixed;
  top: 18px;
  left: 18px;
  font-size: 34px;
  color: black;
`;