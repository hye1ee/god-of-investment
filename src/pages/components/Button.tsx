import styled from "styled-components";

import { width_size, height_size, appColor } from "../../utils/style";
import { BoldText, FontWeight, MixedText } from "./Text";
import { ImgWrapper } from "./Wrapper";

interface ButtonProps {
  width?: number;
  height?: number;
  radius?: number;
  color?: string;
  onClick?: () => void;
  transparent?: boolean;
  textOption: {
    text: string;
    weight: FontWeight;
    color: string;
    size: number;
  };
  iconOption?: {
    icon: string;
    width: number;
    height: number;
  };
  borderOption?: {
    width: number;
    color: string;
  };
  gap?: number;
}

const Button = (props: ButtonProps) => {
  const { text, weight, color, size } = props.textOption;

  return (
    <ButtonWrapper {...props}>
      {props.iconOption && (
        <ImgWrapper
          direction="row"
          src={props.iconOption.icon}
          width={props.iconOption.width}
          height={props.iconOption.height}
        />
      )}
      <MixedText text={[text]} weight={[weight]} color={color} size={size} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div<ButtonProps>`
  width: ${(props) => (props.width ? width_size(props.width) : "fit-content")};
  height: ${(props) =>
    props.height ? height_size(props.height) : "fit-content"};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${(props) => width_size(props.gap ?? 0)};

  background-color: ${(props) =>
    props.color
      ? appColor[props.color]
      : props.transparent ?? false
      ? "none"
      : appColor.white};
  border-radius: ${(props) => (props.radius ? height_size(props.radius) : "")};
  ${(props) =>
    props.borderOption &&
    `border: ${props.borderOption.width}px solid ${
      appColor[props.borderOption.color]
    };`}

  cursor: pointer;
`;

export default Button;
