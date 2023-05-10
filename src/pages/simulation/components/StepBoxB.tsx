import { MediumText, RegularText } from "../../components/Text";
import { AbsoluteWrapper, Wrapper } from "../../components/Wrapper";
import {
  PostpriceInfo,
  PrepriceInfo,
  StepBoxBText,
  getPostpriceInfo,
  getPrepriceInfo,
} from "../utils";
import StepBoxLayout from "./StepBoxLayout";
import { useEffect, useState } from "react";
import PriceBox from "./PriceBox";
import ListTable from "./ListTable";
import { useDispatch } from "react-redux";
import { updateStep } from "../../../states/simulationSlice";
import DataTable from "./DataTable";
import { DoughnutContainer } from "./chart/PieChart";
import { LineChart } from "./chart/LineChart";
import { DoubleLineChart } from "./chart/DoubleLineChart";

const StepBoxB = ({ id, step }: { id: string; step: string }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState<boolean>(step == "B");
  const [show, setShow] = useState<boolean>(step !== "A");
  const [preprice, setPreprice] = useState<PrepriceInfo | null>(null);
  const [postprice, setPostprice] = useState<PostpriceInfo | null>(null);

  const asyncWrapper = async () => {
    setPreprice(await getPrepriceInfo());
    setPostprice(await getPostpriceInfo(id));
  };

  useEffect(() => {
    asyncWrapper();
    setActive(step == "B");
    setShow(step !== "A");
  }, [step]);

  return (
    <Wrapper direction="column">
      {preprice !== null && postprice !== null && (
        <>
          <StepBoxLayout
            step={2}
            active={active}
            onClick={() => dispatch(updateStep({ step: "B" }))}
            title={{
              text: ["AI 예상 감정평가액", "을 확인해보세요!"],
              weight: "medium",
              size: 17,
              color: ["purple", "black"],
            }}
          >
            <Wrapper direction="row" gap={20}>
              <PriceBox
                title="AI 예상 감정평가액"
                price={preprice.price}
                active={show}
              />
              {show && (
                <ListTable
                  title="보유 아파트와 유사 부동산 목록"
                  prices={preprice.list.prices}
                  years={preprice.list.years}
                />
              )}
            </Wrapper>
            {show && (
              <RegularText size={14} color="gray">
                {StepBoxBText.evaluate}
              </RegularText>
            )}
          </StepBoxLayout>
          {show && (
            <>
              <StepBoxLayout
                step={0}
                active={active}
                onClick={() => dispatch(updateStep({ step: "B" }))}
                title={{
                  text: ["감정평가액", "의 AI 예측 기간별 변화"],
                  weight: "medium",
                  size: 17,
                  color: ["purple", "black"],
                }}
              >
                <Wrapper direction="row" width={860} height={200}>
                  <LineChart
                    data={preprice.change.data}
                    labels={preprice.change.labels}
                  />
                </Wrapper>

                <DataTable
                  title="분석 기간별 예측 감정평가액 변화"
                  data={preprice.change.data}
                  labels={preprice.change.labels}
                />
              </StepBoxLayout>
              <StepBoxLayout
                step={0}
                active={active}
                onClick={() => dispatch(updateStep({ step: "B" }))}
                title={{
                  text: ["AI 예상 준공 후 예상시세", "을 확인해보세요!"],
                  weight: "medium",
                  size: 17,
                  color: ["purple", "black"],
                }}
              >
                <Wrapper direction="row" gap={20}>
                  <PriceBox
                    title="AI 예상 준공 후 예상시세"
                    price={postprice.price}
                    active={show}
                  ></PriceBox>
                  {show && (
                    <ListTable
                      title="희망 아파트와 유사 부동산 목록"
                      prices={postprice.list.prices}
                      years={postprice.list.years}
                    />
                  )}
                </Wrapper>
                <RegularText size={14} color="gray">
                  {StepBoxBText.predict}
                </RegularText>
              </StepBoxLayout>
              <StepBoxLayout
                step={0}
                active={active}
                onClick={() => dispatch(updateStep({ step: "B" }))}
                title={{
                  text: ["준공 후 예상시세", "의 AI 예측 상세보기"],
                  weight: "medium",
                  size: 17,
                  color: ["purple", "black"],
                }}
              >
                <Wrapper direction="row" width={860} height={250}>
                  <DoubleLineChart
                    data1={postprice.change.data1}
                    data2={postprice.change.data2}
                    labels={postprice.change.labels}
                  />
                </Wrapper>
                <DataTable
                  title="향후 준공 후 예상시세 예측"
                  data={
                    postprice.change.data2.filter(
                      (val) => val !== null
                    ) as number[]
                  }
                  labels={postprice.change.labels.slice(
                    postprice.change.data2.filter((val) => val !== null)
                      .length * -1
                  )}
                />
                <DoughnutContainer
                  labels={postprice.model.labels}
                  data={postprice.model.data}
                />
              </StepBoxLayout>
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};
export default StepBoxB;
