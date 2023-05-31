import styled from "styled-components";
import BoxLayout from "./BoxLayout";
import { useEffect, useState } from "react";
import { Wrapper } from "../../components/Wrapper";
import Tag from "../../components/Tag";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/store";
import { getConstructionStat } from "../../../apis/detail";
import { appColor, height_size, width_size } from "../../../utils/style";
import { MediumText } from "../../components/Text";
import { DoughnutChart } from "../../simulation/components/chart/PieChart";
import { LineChart } from "../../simulation/components/chart/LineChart";

type StatOption = "기본정보" | "지가변동" | "토지특성" | "이용용도" | "조합원";

const StatBox = () => {
  const [statOption, setStatOption] = useState<StatOption>("기본정보");
  const [statInfo, setStatInfo] = useState<any>(null);
  const consId = useSelector((state: RootState) => state.target.id);

  const asyncWrapper = async () => {
    if (consId == null) return;
    setStatInfo(await getConstructionStat(consId));
  };
  useEffect(() => {
    asyncWrapper();
  }, []);

  const getChartData = (type: "doughnut" | "line") => {
    console.log("stat", statInfo);
    if (statOption == "기본정보") {
      if (type == "doughnut") return statInfo.price_ranges;
      else return statInfo.area_ranges;
    } else if (statOption == "토지특성") {
      if (type == "doughnut") return statInfo.tpgrphFrmCodeNm_count;
      else return statInfo.roadSideCodeNm_count;
    } else if (statOption == "이용용도") {
      if (type == "doughnut") return statInfo.prposArea_count;
      else return statInfo.ladUseSittnNm_count;
    } else if (statOption == "지가변동") {
      if (type == "doughnut") return statInfo.price_change_count;
      else return statInfo.avgprice_by_years;
    } else {
      if (type == "doughnut") return null;
      else return null;
    }
  };

  const getChartTitle = (type: "doughnut" | "line") => {
    if (statOption == "기본정보") {
      if (type == "doughnut") return "공시지가 별 필지수";
      else return "토지면적 별 필지수";
    } else if (statOption == "토지특성") {
      if (type == "doughnut") return "토지형상 별 필지수";
      else return "도로접면 별 필지수";
    } else if (statOption == "이용용도") {
      if (type == "doughnut") return "지구지정 별 필지수";
      else return "이용상황 별 필지수";
    } else if (statOption == "지가변동") {
      if (type == "doughnut") return "지가변동별 필지수";
      else return "연도별 지가변동";
    } else {
      if (type == "doughnut") return null;
      else return null;
    }
  };
  return (
    <BoxLayout width={800} color="white" title="구역 통계 조회">
      <StatOption statOption={statOption} setStatOption={setStatOption} />
      {statInfo !== null && (
        <Wrapper direction="row" gap={20}>
          <StatWrapper>
            <MediumText size={13}>
              {getChartTitle("doughnut") ?? `${statOption} 별 필지 수`}
            </MediumText>
            <ChartContainer>
              <DoughnutChart
                labels={Object.keys(getChartData("doughnut") ?? {})}
                data={Object.values(getChartData("doughnut") ?? {})}
              />
            </ChartContainer>
          </StatWrapper>
          <StatWrapper>
            <MediumText size={13}>
              {getChartTitle("line") ?? `연도별 ${statOption} 변동`}
            </MediumText>
            <ChartContainer>
              {statOption === "지가변동" ? (
                <LineChart
                  labels={Object.keys(getChartData("line") ?? {})}
                  data={Object.values(getChartData("line") ?? {})}
                />
              ) : (
                <DoughnutChart
                  labels={Object.keys(getChartData("line") ?? {})}
                  data={Object.values(getChartData("line") ?? {})}
                />
              )}
            </ChartContainer>
          </StatWrapper>
        </Wrapper>
      )}
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
        name="기본정보"
        active={statOption === "기본정보"}
        onActive={() => setStatOption("기본정보")}
      />
      <StatTag
        name="지가변동"
        active={statOption === "지가변동"}
        onActive={() => setStatOption("지가변동")}
      />
      <StatTag
        name="토지특성"
        active={statOption === "토지특성"}
        onActive={() => setStatOption("토지특성")}
      />
      <StatTag
        name="이용용도"
        active={statOption === "이용용도"}
        onActive={() => setStatOption("이용용도")}
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

const StatWrapper = styled.div`
  width: ${width_size(370)};
  height: fit-content;

  padding: ${width_size(20)};
  box-sizing: border-box;

  background-color: ${appColor.purpleBright};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: ${height_size(10)};
`;

const ChartContainer = styled.div`
  width: ${width_size(320)};
`;
