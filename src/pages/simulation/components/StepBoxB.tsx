import styled from "styled-components";
import { height_size, width_size } from "../../../utils/style";
import { BoldText, MediumText } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import { SetStep, Step } from "../utils";
import StepBoxLayout from "./StepBoxLayout";
import { useEffect, useState } from "react";
import RetryImg from "../../../assets/retry.svg";
import TestImgA from "../../../assets/test1.png";
import TestImgB from "../../../assets/test2.png";
import { SubBoxLongWrapper, SubBoxShortWrapper, SubBoxWrapper } from "./SubBox";
import ValueTag from "./ValueTag";
import InputBox from "./InputBox";

const StepBoxB = ({ step, setStep }: { step: Step; setStep: SetStep }) => {
  const [active, setActive] = useState<boolean>(step === "B");
  const [price, setPrice] = useState(180000);

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
          text: [
            "감정평가액",
            "과 ",
            "준공 후 예상시세",
            "를 입력해 ",
            "예상분담금",
            "을 계산해보세요!",
          ],
          weight: "medium",
          size: 17,
          color: ["purple", "black", "purple", "black", "purple", "black"],
        }}
        subtitle="AI기반 예측값 또는 직접 입력한 값을 이용할 수 있습니다."
      >
        <Wrapper direction="row" gap={20}>
          <Wrapper direction="column" gap={15}>
            <InputBox title="감정평가액" active={active} />
            <InputBox title="준공 후 예상시세" active={active} />
          </Wrapper>
          <SubBoxLongWrapper active={active}>
            <Wrapper direction="row" center={true} gap={5}>
              <MediumText size={16} color={active ? "white" : "grayLight"}>
                {"예상 분담금"}
              </MediumText>
              <RetryIcon
                src={RetryImg}
                onClick={() => setPrice(Math.round(Math.random() * 1000000))}
              />
            </Wrapper>
            <Wrapper direction="row" width="full" center={true} gap={5}>
              <BoldText color={active ? "white" : "grayLight"} size={30}>
                {active ? price : "-"}
              </BoldText>
              <BoldText color={active ? "white" : "grayLight"} size={20}>
                만원
              </BoldText>
            </Wrapper>
          </SubBoxLongWrapper>
        </Wrapper>
      </StepBoxLayout>
      {active && (
        <>
          <StepBoxLayout
            step={0}
            active={active}
            onClick={() => setStep("B")}
            title={{
              text: ["감정평가액", "의 AI 예측 상세보기"],
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
              text: ["예상 비례율", "의 AI 예측 상세보기"],
              weight: "medium",
              size: 17,
              color: ["purple", "black"],
            }}
            short={true}
          >
            <SubBoxShortWrapper>
              <MediumText size={16}>{"예상 비례율"}</MediumText>
              <ValueTag value="140%" />
            </SubBoxShortWrapper>
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
        </>
      )}
    </Wrapper>
  );
};
export default StepBoxB;

const RetryIcon = styled.img`
  width: ${height_size(18)};
  cursor: pointer;
`;

const TestBox = styled.img`
  width: ${width_size(860)};
`;
