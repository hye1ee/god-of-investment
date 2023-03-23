import Tag from "../../components/Tag";
import { Wrapper } from "../../components/Wrapper";
import BoxLayout from "./BoxLayout";

const testRelates = [
  "개포주공3단지아파트 재건축정비사업",
  "개포우성6차아파트 재건축사업",
  "대치제2지구 재건축정비사업",
  "개포주공3단지아파트 재건축정비사업",
  "개포우성6차아파트 재건축사업",
  "대치제2지구 재건축정비사업",
];

const RelateBox = () => {
  return (
    <BoxLayout width={390} color="white" title="과거 유사사업">
      <Wrapper direction="row" width={"full"} wrap={true} gap={10}>
        {testRelates.map((relate) => (
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
