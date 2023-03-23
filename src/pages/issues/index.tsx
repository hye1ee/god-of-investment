import BodyLayout from "../components/BodyLayout";
import { Wrapper } from "../components/Wrapper";
import GraphBox from "./components/GraphBox";
import IssueBox from "./components/IssueBox";
import RelateBox from "./components/RelateBox";

export default () => {
  return (
    <BodyLayout title="연관 이슈 모니터링" padding={360} color="purpleBright">
      <Wrapper direction="row" gap={22}>
        <IssueBox />
        <Wrapper direction="column" gap={22}>
          <GraphBox />
          <RelateBox />
        </Wrapper>
      </Wrapper>
    </BodyLayout>
  );
};
