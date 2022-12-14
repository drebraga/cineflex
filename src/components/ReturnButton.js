import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

export default function ReturnButton() {
    const navigate = useNavigate();
    const previousPage = -1;
    return <ButtonRet data-test="go-home-header-btn" onClick={() => navigate(previousPage)}><BiArrowBack /></ButtonRet>;
}

  const ButtonRet = styled.div`
  position: absolute;
  top: 18px;
  left: 18px;
  font-size: 34px;
  color: black;
`;