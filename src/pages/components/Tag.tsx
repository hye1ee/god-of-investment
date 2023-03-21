import React from "react";
import { FontWeight, MixedText } from "./Text";
import styled from "styled-components";
import { appColor, height_size, width_size } from "../../utils/style";

interface TagProps {
  textOption: {
    text: string;
    weight: FontWeight;
    color: string;
    size: number;
  };
  radius: number;
  color: string;
  paddingOption: {
    width: number;
    height: number;
  };
  borderOption?: {
    width: number;
    color: string;
  };
  onClick?: () => void;
}

const Tag = (props: TagProps) => {
  return (
    <TagWrapper {...props}>
      <MixedText
        text={[props.textOption.text]}
        weight={[props.textOption.weight]}
        size={[props.textOption.size]}
        color={[props.textOption.color]}
      />
    </TagWrapper>
  );
};
export default Tag;

const TagWrapper = styled.div<TagProps>`
  width: fit-content;
  height: fit-content;

  box-sizing: border-box;
  padding: ${(props) =>
    `${height_size(props.paddingOption.height)} ${width_size(
      props.paddingOption.width
    )}`};
  background-color: ${(props) => appColor[props.color]};
  border-radius: ${(props) => height_size(props.radius)};

  ${(props) => props.onClick && `cursor: pointer;`}
`;
