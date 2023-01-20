import styled from "styled-components";

import { APP_COLOR } from "../../utils/constants";
import { font_size } from "../../utils/size";

interface TextProps {
  size?: number;
  color?: string;
}

export const BoldText = styled.div<TextProps>`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  font-size: ${(props) => (props.size ? font_size(props.size) : font_size(15))};
  color: ${(props) =>
    props.color ? APP_COLOR[props.color] : APP_COLOR["black"]};
`;

export const MediumText = styled.div<TextProps>`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: medium;
  font-size: ${(props) => (props.size ? font_size(props.size) : font_size(15))};
  color: ${(props) =>
    props.color ? APP_COLOR[props.color] : APP_COLOR["black"]};
`;
