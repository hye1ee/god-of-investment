import { useEffect, useState } from "react";
import Tag from "../../components/Tag";
import { Wrapper } from "../../components/Wrapper";
import BoxLayout from "./BoxLayout";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/store";
import { getConstructionKeywords } from "../../../apis/detail";

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
    <BoxLayout width={390} color="white" title="유사사업">
      <Wrapper direction="row" width={"full"} wrap={true} gap={10}>
        {relateNames.map((relate) => (
          <Tag
            textOption={{
              text: relate,
              weight: "regular",
              color: "black",
              size: 12,
            }}
            radius={15}
            color="redLight"
            paddingOption={{ width: 20, height: 5 }}
          />
        ))}
      </Wrapper>
    </BoxLayout>
  );
};
export default RelateBox;
