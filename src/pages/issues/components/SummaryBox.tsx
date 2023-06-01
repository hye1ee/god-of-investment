import React, { useEffect, useState } from "react";
import BoxLayout from "../../detail/components/BoxLayout";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/store";
import { getIssueStat } from "../../../apis/issue";
import { Wrapper } from "../../components/Wrapper";
import { RegularText } from "../../components/Text";
import Tag from "../../components/Tag";
import { scoreColor } from "../utils";
import { LineChart } from "../../simulation/components/chart/LineChart";

const SummaryBox = () => {
  const [stat, setStat] = useState<any>(null);
  const summary = useSelector((state: RootState) => state.issue.summary);
  const score = useSelector((state: RootState) => state.issue.score);
  const consId = useSelector((state: RootState) => state.target.id);

  const asyncWrapper = async () => {
    if (!consId) return;
    //[TODO] 여기서 console에 찍히는 값은 변수 stat에 저장됩니다. 각각 data와 label분리하여 아래 line component부분에 넣어주세요!
    setStat(await getIssueStat(consId));
  };

  useEffect(() => {
    asyncWrapper();
  }, []);

  return (
    <Wrapper direction="column" gap={15}>
      <BoxLayout width={820} color="white" title="이슈 요약">
        {summary == null || score == null ? (
          <RegularText color="gray">연관 이슈를 선택해주세요</RegularText>
        ) : (
          <Wrapper direction="column" gap={5}>
            <Tag
              textOption={{
                text: score,
                weight: "medium",
                color: "white",
                size: 13,
              }}
              radius={10}
              color={scoreColor(score)}
              paddingOption={{ width: 8, height: 2 }}
            />
            <RegularText>{summary}</RegularText>
          </Wrapper>
        )}
      </BoxLayout>{" "}
      <BoxLayout width={820} color="purpleBright" title="사업 전망 예측">
        <Wrapper direction="row" width={780}>
          {/* line chart use stat's issue_count. label as dict's keys, data as dict's value*/}
          <LineChart
              labels={Object.keys(stat?.gpt_score ?? {})}
              data={Object.values(stat?.gpt_score ?? {})}
            />
        </Wrapper>
      </BoxLayout>
      <BoxLayout width={820} color="purpleBright" title="사업 관심도">
        <Wrapper direction="row" width={780}>
         <LineChart
                labels={Object.keys(stat?.issue_count ?? {})}
                data={Object.values(stat?.issue_count ?? {})}
              />
        </Wrapper>
      </BoxLayout>
    </Wrapper>
  );
};



export default SummaryBox;
