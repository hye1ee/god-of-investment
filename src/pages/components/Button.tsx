import styled from "styled-components";

import { width_size, height_size, APP_COLOR } from "../../utils/style";

interface ButtonProps {
  width?: number;
  height?: number;
  radius?: number;
  color?: string;
  onClick?: () => void;
  transparent?: boolean;
  children: JSX.Element;
}

const Button = (props: ButtonProps) => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
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
      ? APP_COLOR[props.color]
      : props.transparent ?? false
      ? "none"
      : APP_COLOR["purple"]};
  border-radius: ${(props) => (props.radius ? height_size(props.radius) : "")};

  cursor: pointer;
`;

export default Button;
