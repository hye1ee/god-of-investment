import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { appColor, height_size, width_size } from "../../utils/style";
import Button from "./Button";
import MainIcon from "../../assets/main.svg";
import { Wrapper } from "./Wrapper";
import { BorderColumn } from "./Border";
import { MediumText } from "./Text";
import HeaderMenu from "./HeaderMenu";

export default () => {
  const navigate = useNavigate();

  // TODO: should be manage by redux
  const [target, setTarget] = useState<string | null>(null); //target real estate

  const testClick = () => {
    navigate("/home");
    setTarget((prevTarget) => (prevTarget ? null : "청학아파트재건축정비사업"));
  };

  return (
    <HeaderWrapper>
      <Wrapper direction="row" gap={28} center={true}>
        <Button
          onClick={testClick}
          transparent={true}
          textOption={{
            text: "",
            color: "black",
            size: 16,
            weight: "medium",
          }}
          iconOption={{ icon: MainIcon, width: 27, height: 27 }}
        />
        <BorderColumn width={1} length={47} color="grayLight" />
        <MediumText size={16} color={target ? "black" : "grayLight"}>
          {target ?? "사업을 선택하세요"}
        </MediumText>
      </Wrapper>

      {target && <HeaderMenu />}

      <Wrapper direction="row" width={135}>
        {"계정정보"}
      </Wrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: ${height_size(80)};

  background-color: ${appColor.white};
  border-bottom: 1px solid ${appColor.grayLight};

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 ${width_size(40)} 0 ${width_size(30)};
`;
