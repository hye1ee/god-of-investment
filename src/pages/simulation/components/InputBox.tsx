import styled from "styled-components";
import { MediumText, RegularText } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import Helper from "./Helper";
import { SubBoxWrapper } from "./SubBox";
import {
  appColor,
  font_size,
  height_size,
  width_size,
} from "../../../utils/style";
import { ChangeEvent, useEffect, useState } from "react";

import CheckTrueImg from "../../../assets/checkTrue_circle.svg";
import CheckFalseImg from "../../../assets/checkFalse_circle.svg";

const InputBox = ({
  title,
  active,
}: {
  title: "감정평가액" | "준공 후 예상시세";
  active: boolean;
}) => {
  const defaultVal = "180000";
  const [disable, setDisable] = useState(true);
  const [value, setValue] = useState(defaultVal);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!disable) setValue(e.target.value);
  };

  useEffect(() => {
    if (disable) setValue(defaultVal);
  }, [disable]);

  return (
    <SubBoxWrapper>
      <Wrapper direction="row" center={true} gap={5}>
        <MediumText size={16}>{title}</MediumText>
        <Helper title={title} />
      </Wrapper>
      <InputRowWrapper>
        <Wrapper direction="row" gap={15}>
          <Wrapper direction="row" gap={8} center={true}>
            <InputIcon
              src={
                !active ? CheckFalseImg : disable ? CheckTrueImg : CheckFalseImg
              }
              onClick={() => setDisable(true)}
            />
            <MediumText size={12}>AI기반 예상</MediumText>
          </Wrapper>
          <Wrapper direction="row" gap={8} center={true}>
            <InputIcon
              src={
                !active ? CheckFalseImg : disable ? CheckFalseImg : CheckTrueImg
              }
              onClick={() => setDisable(false)}
            />
            <MediumText size={12}>직접 입력</MediumText>
          </Wrapper>
        </Wrapper>
        <InputTag
          disable={disable}
          value={value}
          onChange={onChange}
          active={active}
        />
      </InputRowWrapper>
    </SubBoxWrapper>
  );
};
export default InputBox;

interface InputTagProps {
  disable: boolean;
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  active: boolean;
}

const InputTag = (props: InputTagProps) => {
  return (
    <InputTagWrapper>
      <InputContainer
        disabled={props.disable || !props.active}
        value={props.active ? props.value : ""}
        onChange={props.onChange}
      />
      <MediumText size={16} color="grayLight">
        만 원
      </MediumText>
    </InputTagWrapper>
  );
};
const InputTagWrapper = styled.div`
  width: ${width_size(150)};
  height: ${height_size(36)};

  box-sizing: border-box;
  padding: 0 ${width_size(12)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: ${width_size(9)};

  background-color: ${appColor.white};
  border: 1px solid ${appColor.grayLight};
  border-radius: ${height_size(6)};
`;

const InputContainer = styled.input`
  width: ${width_size(70)};

  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  font-size: ${font_size(16)};
  color: ${appColor.black};

  background-color: ${appColor.white};
  border: none;
  direction: rtl;
`;

const InputIcon = styled.img`
  width: ${width_size(16)};
  cursor: pointer;
`;

const InputRowWrapper = styled.div`
  width: 100%;
  height: ${height_size(36)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
