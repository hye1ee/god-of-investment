import React from "react";
import { useSelector } from "react-redux";
import { TextBox } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import BoxLayout from "../../detail/components/BoxLayout";
import { useEffect, useState } from "react";
import { RootState } from "../../../states/store";
import { getConstructionKeywords } from "../../../apis/detail";
import Tag from "../../components/Tag";

const RelateBox = () => {
  const [relateNames, setRelateNames] = useState<string[]>([]);
  const consId = useSelector((state: RootState) => state.target.id);

  const asyncWrapper = async () => {
    if (consId == null) return;
    setRelateNames(await getConstructionKeywords(consId));
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
            paddingOption={{ width: 20, height: 5 }}
            color="redLight"
          />
        ))}
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
