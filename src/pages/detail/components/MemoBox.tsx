import styled from "styled-components";
import BoxLayout from "./BoxLayout";
import { appColor, height_size, width_size } from "../../../utils/style";
import { Wrapper } from "../../components/Wrapper";
import { BoldText, RegularText } from "../../components/Text";
import Tag from "../../components/Tag";

const MemoBox = () => {
  return (
    <BoxLayout width={380} color="white" title="메모 / 태그">
      <MemoBlock
        title="김대희(사원)"
        text="규모가 크지 않지만, 강남구라는 점에서 우선적으로 고려할 대상이라고 생각합니다. 규모가 크지 않지만, 강남구라는 점에서 우선적으로 고려할 대상이라고 생각합니다."
        tags={["서울시", "강남구", "재건축"]}
      />
      <MemoBlock
        title="한동희(대리)"
        text="수주2팀 이관 예정."
        tags={["서울시", "강남구", "재건축"]}
      />
    </BoxLayout>
  );
};
export default MemoBox;

interface MemoBlockProps {
  title: string;
  text: string;
  tags: string[];
}

const MemoBlock = (props: MemoBlockProps) => {
  return (
    <MemoBlockWrapper>
      <Wrapper direction="column" width="full">
        <BoldText size={14}>{props.title}</BoldText>
        <RegularText size={14}>{props.text}</RegularText>
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
    </MemoBlockWrapper>
  );
};
const MemoBlockWrapper = styled.div`
  width: ${width_size(340)};
  min-height: ${height_size(180)};

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
