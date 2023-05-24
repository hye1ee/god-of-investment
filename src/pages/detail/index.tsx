import React, { memo, useState } from "react";
import BodyLayout from "../components/BodyLayout";
import { Wrapper } from "../components/Wrapper";
import InfoBox from "./components/InfoBox";
import LotBox from "./components/LotBox";
import SheetBox from "./components/SheetBox";
import StatBox from "./components/StatBox";
import RelateBox from "./components/RelateBox";
import IssueBox from "./components/IssueBox";
import MemoBox from "./components/MemoBox";
import TagBox from "./components/TagBox";

export default () => {
  return (
    <BodyLayout title="정비 사업 상세 정보" padding={360} color="white">
      <Wrapper direction="row" gap={20}>
        <Wrapper direction="column" width={800} gap={20}>
          <InfoBox />
          <LotBox />
          <SheetBox />
          <StatBox />
          <Wrapper direction="row" width={800} gap={20}>
            <RelateBox />
            <IssueBox />
          </Wrapper>
        </Wrapper>
        <Wrapper direction="column" width={380} gap={20}>
          <MemoBox />
        </Wrapper>
      </Wrapper>
    </BodyLayout>
  );
};
