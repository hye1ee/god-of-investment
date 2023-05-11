import { Wrapper } from "../../components/Wrapper";
import BoxLayout from "../../detail/components/BoxLayout";
import { IssueContainer } from "./IssueContainer";

const testProps = {
  title: "잠실·개포 아파트 석달새 2억 껑충…강남 전셋값 바닥쳤나",
  date: "2023.05.11",
  src: "중앙 일보",
  img: "https://imgnews.pstatic.net/image/025/2023/05/11/0003279347_001_20230511163103992.jpg?type=w647",
  url: "https://www.joongang.co.kr/article/25161726",
};

const testProps2 = {
  title: "서울 집값 하락폭 또 줄었다... 하락 멈췄던 용산도 상승세",
  date: "2023.05.11",
  src: "파이낸셜 뉴스",
  img: "https://imgnews.pstatic.net/image/014/2023/05/11/0005010855_001_20230511162004218.png?type=w647",
  url: "https://www.fnnews.com/news/202305111538240378",
};

const IssueBox = () => {
  return (
    <BoxLayout width={820} color="purpleBright" title="사업 연관 이슈">
      <Wrapper direction="row" width="full" gap={15}>
        <Wrapper direction="column" gap={15}>
          <IssueContainer {...testProps} />
          <IssueContainer {...testProps2} />
        </Wrapper>
        <Wrapper direction="column" gap={15}>
          <IssueContainer {...testProps2} />
          <IssueContainer {...testProps} />
          <IssueContainer {...testProps2} />
        </Wrapper>
        <Wrapper direction="column" gap={15}>
          <IssueContainer {...testProps} />
          <IssueContainer {...testProps} />
          <IssueContainer {...testProps2} />
        </Wrapper>
      </Wrapper>
    </BoxLayout>
  );
};

export default IssueBox;
