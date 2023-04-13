import { useState } from "react";

import { Wrapper } from "../../components/Wrapper";
import { MediumText } from "../../components/Text";
import StepBoxLayout from "./StepBoxLayout";
import { SubBoxShortWrapper, SubBoxWrapper } from "./SubBox";
import DropDown from "./DropDown";

import { SetStep, Step } from "../utils";

const StepBoxA = ({ step, setStep }: { step: Step; setStep: SetStep }) => {
  const [dong, setDong] = useState("101동");
  const [ho, setHo] = useState("102호");
  const [size, setSize] = useState("33평");

  return (
    <StepBoxLayout
      step={1}
      active={step == "A"}
      onClick={() => setStep("A")}
      title={{
        text: [
          "현재 보유 중인 아파트의 정보",
          "와 ",
          "희망하는 아파트의 정보",
          "를 입력해주세요!",
        ],
        weight: "medium",
        size: 17,
        color: ["purple", "black", "purple", "black"],
      }}
    >
      <Wrapper direction="row" gap={20}>
        <SubBoxShortWrapper>
          <MediumText size={16}>{"현재 보유 아파트 정보"}</MediumText>
          <Wrapper direction="row" gap={15}>
            <DropDown
              value={dong}
              list={["101동", "102동"]}
              onSelect={(val) => setDong(val)}
              active={step == "A"}
            />
            <DropDown
              value={ho}
              list={["101호", "102호", "201호", "202호"]}
              onSelect={(val) => setHo(val)}
              active={step == "A"}
            />
          </Wrapper>
        </SubBoxShortWrapper>
        <SubBoxShortWrapper>
          <MediumText size={16}>{"희망 아파트 정보"}</MediumText>
          <DropDown
            value={size}
            list={["33평", "38평", "42평", "45평"]}
            onSelect={(val) => setSize(val)}
            active={step == "A"}
          />
        </SubBoxShortWrapper>
      </Wrapper>
    </StepBoxLayout>
  );
};
export default StepBoxA;
