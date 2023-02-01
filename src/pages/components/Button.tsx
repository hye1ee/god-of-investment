import styled from "styled-components";

import { width_size, height_size, appColor } from "../../utils/style";
import { BoldText, FontWeight, MixedText } from "./Text";

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
}

const Button = (props: ButtonProps) => {
  const { text, weight, color, size } = props.textOption;

  return (
    <ButtonWrapper {...props}>
      <MixedText text={[text]} weight={[weight]} color={color} size={size} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div<ButtonProps>`
  width: ${(props) => (props.width ? width_size(props.width) : "fit-content")};
  height: ${(props) =>
    props.height ? height_size(props.height) : "fit-content"};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.color
      ? appColor[props.color]
      : props.transparent ?? false
      ? "none"
      : appColor.purple};
  border-radius: ${(props) => (props.radius ? height_size(props.radius) : "")};

  cursor: pointer;
`;

export default Button;
