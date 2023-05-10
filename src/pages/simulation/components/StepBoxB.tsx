import styled from "styled-components";
import { height_size, width_size } from "../../../utils/style";
import { BoldText, MediumText, RegularText } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import { SetStep, Step, StepBoxBText } from "../utils";
import StepBoxLayout from "./StepBoxLayout";
import { useEffect, useState } from "react";
import RetryImg from "../../../assets/retry.svg";
import TestImgA from "../../../assets/test1.png";
import TestImgB from "../../../assets/test2.png";
import PriceBox from "./PriceBox";
import ListTable from "./ListTable";

const StepBoxB = ({ step, setStep }: { step: Step; setStep: SetStep }) => {
  const [active, setActive] = useState<boolean>(step === "B");

  useEffect(() => {
    setActive(step == "B");
  }, [step]);

  return (
    <Wrapper direction="column">
      <StepBoxLayout
        step={2}
        active={active}
        onClick={() => setStep("B")}
        title={{
          text: ["AI 예상 감정평가액", "을 확인해보세요!"],
          weight: "medium",
          size: 17,
          color: ["purple", "black"],
        }}
      >
        <Wrapper direction="row" gap={20}>
          <PriceBox title="AI 예상 감정평가액" price={25290} />
          <ListTable
            title="보유 아파트와 유사 부동산 목록"
            prices={[176000, 182000, 191000, 177000, 175000]}
            years={[1991, 1992, 1991, 1992, 1993]}
          />
        </Wrapper>
        <RegularText size={14} color="gray">
          {StepBoxBText.evaluate}
        </RegularText>
      </StepBoxLayout>
      <StepBoxLayout
        step={0}
        active={active}
        onClick={() => setStep("B")}
        title={{
          text: ["감정평가액", "의 AI 예측 기간별 변화"],
          weight: "medium",
          size: 17,
          color: ["purple", "black"],
        }}
      >
        <TestBox src={TestImgA} />
      </StepBoxLayout>
      <StepBoxLayout
        step={0}
        active={active}
        onClick={() => setStep("B")}
        title={{
          text: ["AI 예상 준공 후 예상시세", "을 확인해보세요!"],
          weight: "medium",
          size: 17,
          color: ["purple", "black"],
        }}
      >
        <Wrapper direction="row" gap={20}>
          <PriceBox title="AI 예상 준공 후 예상시세" price={25290}></PriceBox>
        </Wrapper>
        <RegularText size={14} color="gray">
          {StepBoxBText.predict}
        </RegularText>
      </StepBoxLayout>
      <StepBoxLayout
        step={0}
        active={active}
        onClick={() => setStep("B")}
        title={{
          text: ["준공 후 예상시세", "의 AI 예측 상세보기"],
          weight: "medium",
          size: 17,
          color: ["purple", "black"],
        }}
      >
        <TestBox src={TestImgB} />
      </StepBoxLayout>
    </Wrapper>
  );
};
export default StepBoxB;

const TestBox = styled.img`
  width: ${width_size(860)};
`;
