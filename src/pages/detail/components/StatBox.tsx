import styled from "styled-components";
import BoxLayout from "./BoxLayout";
import { useState } from "react";
import { Wrapper } from "../../components/Wrapper";
import Tag from "../../components/Tag";

type StatOption = "공시지가" | "지목" | "지구지정" | "토지정보" | "조합원";

const StatBox = () => {
  const [statOption, setStatOption] = useState<StatOption>("공시지가");

  return (
    <BoxLayout width={800} color="white" title="구역 통계 조회">
      <StatOption statOption={statOption} setStatOption={setStatOption} />
    </BoxLayout>
  );
};
export default StatBox;

const StatOption = ({
  statOption,
  setStatOption,
}: {
  statOption: StatOption;
  setStatOption: React.Dispatch<React.SetStateAction<StatOption>>;
}) => {
  return (
    <Wrapper direction="row" gap={15}>
      <StatTag
        name="공시지가"
        active={statOption === "공시지가"}
        onActive={() => setStatOption("공시지가")}
      />
      <StatTag
        name="지목"
        active={statOption === "지목"}
        onActive={() => setStatOption("지목")}
      />
      <StatTag
        name="지구지정"
        active={statOption === "지구지정"}
        onActive={() => setStatOption("지구지정")}
      />
      <StatTag
        name="토지정보"
        active={statOption === "토지정보"}
        onActive={() => setStatOption("토지정보")}
      />
      <StatTag
        name="조합원"
        active={statOption === "조합원"}
        onActive={() => setStatOption("조합원")}
      />
    </Wrapper>
  );
};

const StatTag = ({
  name,
  active,
  onActive,
}: {
  name: string;
  active: boolean;
  onActive: () => void;
}) => {
  return (
    <Tag
      textOption={{
        text: name,
        weight: "medium",
        color: active ? "white" : "gray",
        size: 12,
      }}
      radius={15}
      color={active ? "purple" : "purpleBright"}
      paddingOption={{ width: 25, height: 5 }}
      onClick={onActive}
    />
  );
};
