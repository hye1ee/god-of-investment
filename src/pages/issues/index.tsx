import React from "react";
import BodyLayout from "../components/BodyLayout";
import { Wrapper } from "../components/Wrapper";
import GraphBox from "./components/IssueBox";
import IssueBox from "./components/SummaryBox";
import RelateBox from "./components/RelateBox";

export default () => {
  return (
    <BodyLayout title="연관 이슈 모니터링" padding={360} color="white">
      <Wrapper direction="column" gap={22}>
        <RelateBox />

        <Wrapper direction="row" gap={22}>
          <GraphBox />
          <IssueBox />
        </Wrapper>
      </Wrapper>
    </BodyLayout>
  );
};
