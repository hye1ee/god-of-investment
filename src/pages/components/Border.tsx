import styled from "styled-components";
import { appColor, height_size, width_size } from "../../utils/style";

interface BorderProps {
  width: number;
  length?: number;
  color: string;
}

export const BorderRow = styled.div<BorderProps>`
  width: ${(props) => (props.length ? width_size(props.length) : "100%")};
  height: ${(props) => height_size(props.width)};

  background-color: ${(props) => appColor[props.color]};
`;

export const BorderColumn = styled.div<BorderProps>`
  width: ${(props) => width_size(props.width)};
  height: ${(props) => (props.length ? height_size(props.length) : "100%")};

  background-color: ${(props) => appColor[props.color]};
`;
