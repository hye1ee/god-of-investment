import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { appColor, height_size } from "../../utils/style";
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
      <Button
        onClick={homeOnClick}
        transparent={true}
        textOption={{
          text: "재개발/재건축 구역 정보",
          color: isHomeActive ? "purple" : "black",
          size: 16,
          weight: "medium",
        }}
      />
      <Button
        onClick={searchOnClick}
        transparent={true}
        textOption={{
          text: "유사도 검색",
          color: isHomeActive ? "black" : "purple",
          size: 16,
          weight: "medium",
        }}
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: ${height_size(80)};

  background-color: ${appColor.white};
  border-bottom: 1px solid ${appColor.grayLight};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3vw;
`;
