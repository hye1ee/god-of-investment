import React from "react";
import { useSelector } from "react-redux";
import { TextBox } from "../../components/Text";
import { AbsoluteWrapper, Wrapper } from "../../components/Wrapper";
import BoxLayout from "../../detail/components/BoxLayout";
import { useEffect, useState } from "react";
import { RootState } from "../../../states/store";
import { getConstructionKeywords } from "../../../apis/detail";
import Tag from "../../components/Tag";
import Input from "../../components/Input";
import styled from "styled-components";
import { width_size } from "../../../utils/style";

import AddIcon from "../../../assets/add.svg";

const RelateBox = () => {
  const [relateNames, setRelateNames] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const consId = useSelector((state: RootState) => state.target.id);

  const asyncWrapper = async () => {
    if (consId == null) return;
    setRelateNames(await getConstructionKeywords(consId));
  };

  const asyncCreateWrapper = async () => {
    console.log(keyword);
    //[TODO] add keyword api
    setKeyword("");
  };

  useEffect(() => {
    asyncWrapper();
  }, []);

  return (
    <BoxLayout width={1202} color="white" title="키워드">
      <Wrapper direction="row" gap={10} width={1100} wrap={true}>
        {relateNames.map((name, idx) => (
          <Tag
            key={idx}
            textOption={{
              text: name,
              weight: "regular",
              color: "black",
              size: 13,
            }}
            radius={17}
            paddingOption={{ width: 20, height: 8 }}
            color="redLight"
          />
        ))}
        <Wrapper direction="row" gap={15} center={true}>
          <Input
            width={200}
            height={35}
            color="whiteSmoky"
            radiusOption={{ radius: 15 }}
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            placeholder="키워드 추가하기"
            padding={10}
            fontOption={{ size: 13, weight: "medium", color: "black" }}
          />
          <AbsoluteWrapper
            direction="row"
            right={10}
            center={true}
            onClick={asyncCreateWrapper}
          >
            <IconWrapper src={AddIcon} />
          </AbsoluteWrapper>
        </Wrapper>
      </Wrapper>
    </BoxLayout>
  );
};

export default RelateBox;

const RelateTag = ({ title }: { title: string }) => {
  return (
    <TextBox
      width={322}
      height={34}
      textOption={{
        text: title,
        weight: "regular",
        color: "black",
        size: 13,
      }}
      color="redLight"
      radius={17}
    />
  );
};

const IconWrapper = styled.img`
  width: ${width_size(25)};
  cursor: pointer;
`;
