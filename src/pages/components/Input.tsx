import styled from "styled-components";
import { AbsoluteWrapper, ImgWrapper, Wrapper } from "./Wrapper";
import {
  appColor,
  font_size,
  height_size,
  width_size,
} from "../../utils/style";
import { ChangeEvent } from "react";
import { RegularText } from "./Text";

interface InputProps {
  type?: string;
  width?: number;
  height?: number;
  color?: string;
  radiusOption?: {
    radius: number;
    position: "top" | "bottom" | "all";
  };
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  borderOption?: {
    width: number;
    color: string;
  };
  padding?: number;
  gap?: number;
  iconOption?: {
    icon: string;
    width: number;
    height: number;
  };
  highlightOption?: {
    width: number;
    color: string;
  };
  fontOption: {
    size: number;
    weight: "bold" | "medium";
    color: string;
  };
}

const Input = (props: InputProps) => {
  return (
    <Wrapper direction="row" center={true}>
      {props.iconOption && (
        <AbsoluteWrapper direction="row" left={props.padding ?? 0}>
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
      />
      {props.highlightOption && (
        <AbsoluteWrapper direction="row" right={props.padding ?? 0}>
          <RegularText size={16} color={props.highlightOption.color}>
            {"*"}
          </RegularText>
        </AbsoluteWrapper>
      )}
    </Wrapper>
  );
};
export default Input;

const InputContainer = styled.input<InputProps>`
  width: ${(props) => width_size(props.width ?? 440)};
  height: ${(props) => height_size(props.height ?? 50)};

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding-right: ${(props) => width_size(props.padding ?? 20)};
  padding-left: ${(props) =>
    width_size(
      (props.padding ?? 20) + (props.gap ?? 0) + (props.iconOption?.width ?? 0)
    )};

  background-color: ${(props) => appColor[props.color ?? "white"]};
  ${(props) =>
    props.borderOption &&
    `border: ${props.borderOption.width}px solid ${
      appColor[props.borderOption.color]
    };`};
  ${(props) =>
    props.highlightOption &&
    `border: ${props.highlightOption.width}px solid ${
      appColor[props.highlightOption.color]
    };`};
  ${(props) =>
    `border-radius: ${
      props.radiusOption?.position !== "bottom" ? props.radiusOption?.radius : 0
    }px ${
      props.radiusOption?.position !== "bottom" ? props.radiusOption?.radius : 0
    }px ${
      props.radiusOption?.position !== "top" ? props.radiusOption?.radius : 0
    }px ${
      props.radiusOption?.position !== "top" ? props.radiusOption?.radius : 0
    }px;`}

  &:focus {
    outline: none;
  }

  font-family: "Noto Sans KR", sans-serif;
  font-weight: ${(props) => props.fontOption.weight};
  font-size: ${(props) => font_size(props.fontOption.size)};
  color: ${(props) => appColor[props.fontOption.color]};
`;
