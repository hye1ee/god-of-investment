import { RegularText } from "../../../components/Text";
import CheckButton from "../../../components/CheckButton";
import { Wrapper } from "../../../components/Wrapper";
import { useState } from "react";
import Button from "../../../components/Button";
import { BorderRow } from "../../../components/Border";
import { stepNames } from "../../../../utils/constants";

export default () => {
  const [step, setStep] = useState(new Array(10).fill(false) as boolean[]);

  const onStepFilter = () => {
    console.log("stepFilter clicked");
  };

  return (
    <Wrapper direction="column" width="full">
      <Wrapper
        direction="row"
        width="full"
        height={59}
        color="purpleBright"
        center={true}
      >
        <RegularText size={14} absolute={true} left={38}>
          사업 진행 단계
        </RegularText>
      </Wrapper>
      <BorderRow width={1} color="grayLight" />
      <Wrapper direction="row" width="full" height={180}>
        <FilterBody step={step} setStep={setStep} />
      </Wrapper>
      <BorderRow width={1} color="grayLight" />
      <Wrapper direction="row" width="full" height={75} center={true}>
        <Button
          onClick={onStepFilter}
          textOption={{
            text: "해당 단계로 필터링하기",
            weight: "regular",
            size: 14,
            color: "white",
          }}
          color="purple"
          width={320}
          height={40}
          radius={10}
        />
      </Wrapper>
    </Wrapper>
  );
};

const FilterBody = ({
  step,
  setStep,
}: {
  step: boolean[];
  setStep: React.Dispatch<React.SetStateAction<boolean[]>>;
}) => {
  const onCheck = (idx: number) => (val: boolean) => {
    const newStep = [...step];
    newStep[idx] = val;
    setStep(newStep);
  };

  return (
    <Wrapper
      direction="column"
      wrap={true}
      width="full"
      height="full"
      center={true}
    >
      {step.map((value, idx) => (
        <Wrapper
          direction="row"
          center={true}
          height={32}
          width={160}
          key={idx}
          gap={12}
        >
          <CheckButton check={value} onCheck={onCheck(idx)} size={18} />
          <Wrapper direction="row" width={100}>
            <RegularText size={13} color="gray">
              {stepNames[idx]}
            </RegularText>
          </Wrapper>
        </Wrapper>
      ))}
    </Wrapper>
  );
};
