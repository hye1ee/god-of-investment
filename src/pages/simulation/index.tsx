import { useState } from "react";
import BodyLayout from "../components/BodyLayout";
import { Wrapper } from "../components/Wrapper";
import StepBoxA from "./components/StepBoxA";
import StepBoxLayout from "./components/StepBoxLayout";
import { Step } from "./utils";
import StepBoxB from "./components/StepBoxB";

export default () => {
  const [step, setStep] = useState<Step>("A");

  return (
    <BodyLayout
      title="분담금 시뮬레이션"
      padding={460}
      color="purpleGrayBright"
    >
      <Wrapper direction="column" width="full">
        <StepBoxA step={step} setStep={setStep} />
        <StepBoxB step={step} setStep={setStep} />
      </Wrapper>
    </BodyLayout>
  );
};
