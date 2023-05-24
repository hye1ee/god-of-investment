import Tag from "../../components/Tag";
import { Wrapper } from "../../components/Wrapper";
import BoxLayout from "../../detail/components/BoxLayout";
import { IssueContainer } from "./IssueContainer";

const testProps = {
  title: "잠실·개포 아파트 석달새 2억 껑충…강남 전셋값 바닥쳤나",
  date: "2023.05.11",
  src: "중앙 일보",
  url: "https://www.joongang.co.kr/article/25161726",
};

const IssueBox = () => {
  return (
    <BoxLayout width={362} color="white" title="사업 연관 이슈">
      <Wrapper direction="column" gap={10}>
        <Tag
          textOption={{
            text: "3월",
            weight: "regular",
            color: "black",
            size: 13,
          }}
          radius={17}
          paddingOption={{ width: 20, height: 5 }}
          color="blueLight"
        />

        <IssueContainer {...testProps} />
        <IssueContainer {...testProps} />
      </Wrapper>
      <Wrapper direction="column" gap={10}>
        <Tag
          textOption={{
            text: "4월",
            weight: "regular",
            color: "black",
            size: 13,
          }}
          radius={17}
          paddingOption={{ width: 20, height: 5 }}
          color="blueLight"
        />

        <IssueContainer {...testProps} />
        <IssueContainer {...testProps} />
      </Wrapper>
      <Wrapper direction="column" gap={10}>
        <Tag
          textOption={{
            text: "5월",
            weight: "regular",
            color: "black",
            size: 13,
          }}
          radius={17}
          paddingOption={{ width: 20, height: 5 }}
          color="blueLight"
        />

        <IssueContainer {...testProps} />
        <IssueContainer {...testProps} />
      </Wrapper>
    </BoxLayout>
  );
};

export default IssueBox;
