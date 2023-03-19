import React from "react";
import BodyLayout from "../components/BodyLayout";
import { Wrapper } from "../components/Wrapper";
import InfoBox from "./components/InfoBox";
import LotBox from "./components/LotBox";
import SheetBox from "./components/SheetBox";
import StatBox from "./components/StatBox";

export default () => {
  return (
    <BodyLayout title="정비 사업 상세 정보" padding={360} color="white">
      <Wrapper direction="row" gap={20}>
        <Wrapper direction="column" width={800} gap={20}>
          <InfoBox />
          <LotBox />
          <LotBox />
          <SheetBox />
          <StatBox />
        </Wrapper>
        <Wrapper direction="column" width={380}>
          Memo
        </Wrapper>
      </Wrapper>
    </BodyLayout>
  );
};
