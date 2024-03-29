import React from "react";
import { BorderRow } from "./Border";
import { Wrapper } from "./Wrapper";
import { BoldText, RegularText } from "./Text";
import Tag from "./Tag";
import { useSelector } from "react-redux";
import { RootState } from "../../states/store";

interface TitleProps {
  title: string;
}

const Title = (props: TitleProps) => {
  const location = useSelector((state: RootState) => state.target.location);

  return (
    <Wrapper direction="column" width="full" gap={15}>
      <Wrapper direction="row" center={true} gap={18}>
        <BoldText size={24}>{props.title}</BoldText>
        <Tag
          textOption={{
            text: location ?? "",
            weight: "regular",
            size: 14,
            color: "gray",
          }}
          radius={12}
          paddingOption={{ width: 16, height: 6 }}
          color="blueBright"
        />
      </Wrapper>
      <BorderRow width={1} color="grayLight" />
    </Wrapper>
  );
};
export default Title;
