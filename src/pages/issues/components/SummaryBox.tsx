import React, { useEffect, useState } from "react";
import BoxLayout from "../../detail/components/BoxLayout";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/store";
import { getIssueStat } from "../../../apis/issue";
import { Wrapper } from "../../components/Wrapper";
import { RegularText } from "../../components/Text";

const SummaryBox = () => {
  const [stat, setStat] = useState([]);
  const summary = useSelector((state: RootState) => state.issue.summary);
  const consId = useSelector((state: RootState) => state.target.id);

  const asyncWrapper = async () => {
    if (!consId) return;
    console.log(await getIssueStat(consId));
    setStat(await getIssueStat(consId));
  };

  useEffect(() => {
    asyncWrapper();
  }, []);

  return (
    <Wrapper direction="column" gap={15}>
      <BoxLayout width={820} color="white" title="이슈 요약">
        {summary == null ? (
          <RegularText color="gray">연관 이슈를 선택해주세요</RegularText>
        ) : (
          <RegularText>{summary}</RegularText>
        )}
      </BoxLayout>{" "}
      <BoxLayout width={820} color="purpleBright" title="사업 연관 이슈 통계">
        {" "}
      </BoxLayout>
    </Wrapper>
  );
};

export default SummaryBox;
