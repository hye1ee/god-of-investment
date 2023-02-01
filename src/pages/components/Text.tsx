import styled from "styled-components";

import { font_size, appColor, width_size } from "../../utils/style";

interface TextProps {
  size?: number;
  color?: string;
}
export type FontWeight = "bold" | "medium" | "regular";

export const BoldText = styled.div<TextProps>`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  font-size: ${(props) => (props.size ? font_size(props.size) : font_size(15))};
  color: ${(props) => (props.color ? appColor[props.color] : appColor.black)};
`;

export const MediumText = styled.div<TextProps>`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: medium;
  font-size: ${(props) => (props.size ? font_size(props.size) : font_size(15))};
  color: ${(props) => (props.color ? appColor[props.color] : appColor.black)};
`;

export const RegularText = styled.div<TextProps>`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: regular;
  font-size: ${(props) => (props.size ? font_size(props.size) : font_size(15))};
  color: ${(props) => (props.color ? appColor[props.color] : appColor.black)};
`;

interface MixedTextProps {
  text: string[];
  weight: FontWeight[];
  size: number[] | number;
  color: string[] | string;
  gap?: number;
}
export const MixedText = (props: MixedTextProps) => {
  return (
    <MixedTextWrapper gap={props.gap ?? 2}>
      {props.weight.map((textWeight, idx) => {
        const size =
          typeof props.size === "number" ? props.size : props.size[idx];
        const color =
          typeof props.color === "string" ? props.color : props.color[idx];

        if (textWeight === "bold") {
          return (
            <BoldText size={size} color={color} key={idx}>
              {props.text[idx]}
            </BoldText>
          );
        } else if (textWeight === "medium") {
          return (
            <MediumText size={size} color={color} key={idx}>
              {props.text[idx]}
            </MediumText>
          );
        } else if (textWeight === "regular") {
          return (
            <RegularText size={size} color={color} key={idx}>
              {props.text[idx]}
            </RegularText>
          );
        }
      })}
    </MixedTextWrapper>
  );
};

const MixedTextWrapper = styled.div<{ gap: number }>`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  gap: ${(props) => width_size(props.gap)};
`;
