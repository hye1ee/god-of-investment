import React from "react";
import styled from "styled-components";
import { AbsoluteWrapper, ImgWrapper, Wrapper } from "../../components/Wrapper";
import {
  appColor,
  font_size,
  height_size,
  width_size,
} from "../../../utils/style";
import { ChangeEvent } from "react";
import { RegularText } from "../../components/Text";
import { BorderRow } from "../../components/Border";

interface InputProps {
  type?: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  iconOption?: {
    icon: string;
    width: number;
    height: number;
  };
  highlightOption?: {
    width: number;
    color: string;
  };
  active?: boolean;
  onClick?: () => void;
}

const SignupInput = (props: InputProps) => {
  return (
    <Wrapper
      direction="column"
      center={true}
      width={440}
      height={50}
      onClick={props.onClick}
    >
      {props.iconOption && (
        <AbsoluteWrapper direction="row" left={20}>
          <ImgWrapper
            direction="row"
            src={props.iconOption.icon}
            width={props.iconOption.width}
            height={props.iconOption.height}
          />
        </AbsoluteWrapper>
      )}
      <InputContainer
        {...props}
        onChange={props.onChange}
        placeholder={props.placeholder ?? ""}
        value={props.value}
        disabled={props?.active == false ? true : false}
      />
      {props.highlightOption && (
        <AbsoluteWrapper direction="row" right={20}>
          <RegularText size={16} color={props.highlightOption.color}>
            {"*"}
          </RegularText>
        </AbsoluteWrapper>
      )}
      <BorderRow
        width={2}
        color={props.value.length == 0 ? "purpleLight" : "grayLight"}
      />
    </Wrapper>
  );
};
export default SignupInput;

const InputContainer = styled.input<InputProps>`
  width: ${width_size(440)};
  height: ${height_size(50)};

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding-right: ${width_size(20)};
  padding-left: ${(props) =>
    width_size(20 + 15 + (props.iconOption?.width ?? 0))};

  background-color: ${appColor.whiteSmoky};

  &:focus {
    outline: none;
  }
  border: none;

  font-family: "Noto Sans KR", sans-serif;
  font-weight: medium;
  font-size: ${font_size(16)};
  color: ${appColor.black};
`;
