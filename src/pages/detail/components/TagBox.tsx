import React, { useState } from "react";
import styled from "styled-components";
import BoxLayout from "./BoxLayout";
import { appColor, height_size, width_size } from "../../../utils/style";
import { AbsoluteWrapper, Wrapper } from "../../components/Wrapper";
import { BoldText } from "../../components/Text";

import Input from "../../components/Input";
import AddIcon from "../../../assets/add.svg";
import Tag from "../../components/Tag";

const TagBox = () => {
  const [newTag, setNewTag] = useState("");

  return (
    <BoxLayout width={380} color="white" title="태그">
      <TagBlock title="김대희(사원)" tags={["서울시", "강남구", "재건축"]} />
      <TagBlock title="한동희(대리)" tags={["서울시", "강남구", "재건축"]} />
      <Wrapper direction="row" gap={15} center={true}>
        <Input
          width={340}
          height={40}
          color="whiteSmoky"
          radiusOption={{ radius: 15 }}
          onChange={(e) => setNewTag(e.target.value)}
          value={newTag}
          placeholder="태그 추가하기"
          padding={10}
          fontOption={{ size: 14, weight: "medium", color: "black" }}
        />
        <AbsoluteWrapper direction="row" right={10} center={true}>
          <IconWrapper src={AddIcon} />
        </AbsoluteWrapper>
      </Wrapper>
    </BoxLayout>
  );
};
export default TagBox;

interface MemoBlockProps {
  title: string;
  tags: string[];
}

const TagBlock = (props: MemoBlockProps) => {
  return (
    <TagBlockWrapper>
      <Wrapper direction="column" width="full">
        <BoldText size={14}>{props.title}</BoldText>
      </Wrapper>
      <Wrapper direction="row" wrap={true} width="full" gap={10}>
        {props.tags.map((tag) => (
          <Tag
            textOption={{
              text: tag,
              weight: "regular",
              size: 14,
              color: "black",
            }}
            radius={5}
            color="redLight"
            paddingOption={{ width: 15, height: 3 }}
          />
        ))}
      </Wrapper>
    </TagBlockWrapper>
  );
};
const TagBlockWrapper = styled.div`
  width: ${width_size(340)};
  height: fit-content;

  padding: ${height_size(20)} ${width_size(22)};
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${height_size(25)};

  background-color: ${appColor.purpleBright};
  border-radius: ${height_size(10)};
`;

const IconWrapper = styled.img`
  width: ${width_size(25)};
  cursor: pointer;
`;
