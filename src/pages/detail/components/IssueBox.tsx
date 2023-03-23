import Tag from "../../components/Tag";
import { Wrapper } from "../../components/Wrapper";
import BoxLayout from "./BoxLayout";

const testIssues = [
  "청담동",
  "강남구",
  "소규모",
  "논현동",
  "청학아파트",
  "가로주택정비사업",
];

const IssueBox = () => {
  return (
    <BoxLayout width={390} color="white" title="관련 이슈">
      <Wrapper direction="row" width={"full"} wrap={true} gap={10}>
        {testIssues.map((issue) => (
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
