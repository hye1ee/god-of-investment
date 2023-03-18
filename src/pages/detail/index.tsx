import React from "react";
import BodyLayout from "../components/BodyLayout";
import { Wrapper } from "../components/Wrapper";

export default () => {
  return (
    <BodyLayout title="정비 사업 상세 정보" padding={360} color="white">
      <Wrapper direction="row" gap={20}>
        <Wrapper direction="column" width={800}></Wrapper>
        <Wrapper direction="column" width={380}>
          Memo
        </Wrapper>
      </Wrapper>
    </BodyLayout>
  );
};
