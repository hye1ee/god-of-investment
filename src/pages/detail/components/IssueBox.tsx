import { useEffect, useState } from "react";
import Tag from "../../components/Tag";
import { Wrapper } from "../../components/Wrapper";
import BoxLayout from "./BoxLayout";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/store";
import { getConstructionKeywords } from "../../../apis/detail";

const IssueBox = () => {
  const [keywords, setKeywords] = useState<string[]>([]);
  const consId = useSelector((state: RootState) => state.target.id);

  const asyncWrapper = async () => {
    if (consId == null) return;
    const newKeywords: string[] = [];
    const names = await getConstructionKeywords(consId);
    names.forEach((name) => {
      const words = name.split(" ");
      if (words.length == 0) newKeywords.push(name);
      else newKeywords.push(...words.filter((word) => word.length > 0));
    });
    setKeywords(newKeywords.sort(() => Math.random() - 0.5));
  };
  useEffect(() => {
    asyncWrapper();
  }, []);

  return (
    <BoxLayout width={390} color="white" title="관련 키워드">
      <Wrapper direction="row" width={"full"} wrap={true} gap={10}>
        {keywords.map((issue) => (
          <Tag
            textOption={{
              text: issue,
              weight: "regular",
              color: "black",
              size: 12,
            }}
            radius={15}
            color="blueLight"
            paddingOption={{ width: 20, height: 5 }}
          />
        ))}
      </Wrapper>
    </BoxLayout>
  );
};
export default IssueBox;
