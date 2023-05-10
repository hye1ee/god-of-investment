import { Doughnut } from "react-chartjs-2";

import { appColor, height_size, width_size } from "../../../../utils/style";
import { hexToRgb } from "./utils";
import { AbsoluteWrapper, Wrapper } from "../../../components/Wrapper";
import { MediumText } from "../../../components/Text";
import styled from "styled-components";

export const DoughnutContainer = ({
  labels,
  data,
}: {
  labels: string[];
  data: number[];
}) => {
  return (
    <DoughnutContainerWrapper>
      <AbsoluteWrapper direction="row" left={20} top={15}>
        <MediumText size={15}>AI 모델 변수 가중치</MediumText>
      </AbsoluteWrapper>
      <Wrapper direction="row" width={400} height={200}>
        <DoughnutChart data={data} labels={labels} />
      </Wrapper>
    </DoughnutContainerWrapper>
  );
};

const DoughnutContainerWrapper = styled.div`
  width: ${width_size(860)};
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  position: relative;
  padding: ${height_size(25)} ${width_size(20)};

  background-color: ${appColor.purpleBright};
  border-radius: ${width_size(10)};
  border: ${width_size(1)} solid ${appColor.grayLight};
`;

const DoughnutChart = ({
  labels,
  data,
}: {
  labels: string[];
  data: number[];
}) => {
  const DoughnutOption: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };
  const chartData = {
    labels,
    datasets: [
      {
        label: "AI 모델 변수 가중치",
        data,
        backgroundColor: [
          hexToRgb(appColor.purple),
          hexToRgb(appColor.purpleSoft),
          hexToRgb(appColor.purpleLight),
          hexToRgb(appColor.blue),
          hexToRgb(appColor.blueLight),
          hexToRgb(appColor.gray),
        ],
        borderWidth: 0,
      },
    ],
  };
  return <Doughnut options={DoughnutOption} data={chartData} />;
};
