import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { APP_COLOR, height_size } from "../../utils/style";
import { MediumText } from "./Text";
import Button from "./Button";

export default () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHomeActive, setIsHomeActive] = useState(
    location.pathname === "/home"
  );

  const homeOnClick = () => {
    navigate("/home");
    setIsHomeActive(true);
  };
  const searchOnClick = () => {
    navigate("/search");
    setIsHomeActive(false);
  };

  return (
    <HeaderWrapper>
      <Button onClick={homeOnClick} transparent={true}>
        <MediumText color={isHomeActive ? "purple" : "black"} size={16}>
          재개발/재건축 구역 정보
        </MediumText>
      </Button>
      <Button onClick={searchOnClick} transparent={true}>
        <MediumText color={isHomeActive ? "black" : "purple"} size={16}>
          유사도 검색
        </MediumText>
      </Button>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: ${height_size(80)};

  background-color: ${APP_COLOR.white};
  border-bottom: 1px solid ${APP_COLOR["gray-light"]};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3vw;
`;
