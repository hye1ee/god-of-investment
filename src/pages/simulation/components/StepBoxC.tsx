import { RegularText } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import {
  PostpriceInfo,
  PrepriceInfo,
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

const StepBoxC = ({ id, step }: { id: string; step: string }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState<boolean>(step == "C");
  const [preprice, setPreprice] = useState<PrepriceInfo | null>(null);
  const [postprice, setPostprice] = useState<PostpriceInfo | null>(null);

  const asyncWrapper = async () => {
    setPreprice(await getPrepriceInfo());
    setPostprice(await getPostpriceInfo(id));
  };

  useEffect(() => {
    asyncWrapper();
    setActive(step == "C");
  }, [step]);

  return (
    <Wrapper direction="column">
      {preprice !== null && postprice !== null && (
        <>
          <StepBoxLayout
            step={3}
            active={active}
            onClick={() => dispatch(updateStep({ step: "C" }))}
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
                active={active}
              />
              {active && (
                <ListTable
                  title="보유 아파트와 유사 부동산 목록"
                  prices={preprice.list.prices}
                  years={preprice.list.years}
                />
              )}
            </Wrapper>
          </StepBoxLayout>
          {active && (
            <>
              <StepBoxLayout
                step={0}
                active={active}
                onClick={() => dispatch(updateStep({ step: "C" }))}
                title={{
                  text: ["감정평가액", "의 AI 예측 기간별 변화"],
                  weight: "medium",
                  size: 17,
                  color: ["purple", "black"],
                }}
              >
                <DataTable
                  title="분석 기간별 예측 감정평가액 변화"
                  data={preprice.change.data}
                  labels={preprice.change.labels}
                />
              </StepBoxLayout>
              <StepBoxLayout
                step={0}
                active={active}
                onClick={() => dispatch(updateStep({ step: "C" }))}
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
                    active={active}
                  ></PriceBox>
                  {active && (
                    <ListTable
                      title="희망 아파트와 유사 부동산 목록"
                      prices={postprice.list.prices}
                      years={postprice.list.years}
                    />
                  )}
                </Wrapper>
              </StepBoxLayout>
              <StepBoxLayout
                step={0}
                active={active}
                onClick={() => dispatch(updateStep({ step: "C" }))}
                title={{
                  text: ["준공 후 예상시세", "의 AI 예측 상세보기"],
                  weight: "medium",
                  size: 17,
                  color: ["purple", "black"],
                }}
              >
                <DataTable
                  title="향후 준공 후 예상시세 예측"
                  data={postprice.change.data2.slice(-5) as number[]}
                  labels={postprice.change.labels.slice(-5)}
                />
              </StepBoxLayout>
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};
export default StepBoxC;
