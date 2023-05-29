import { RegularText } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import { PostpriceInfo, PrepriceInfo } from "../utils";
import StepBoxLayout from "./StepBoxLayout";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { updateStep } from "../../../states/simulationSlice";
import { PredictPriceBox } from "./predict/PredictPriceBox";
import { BuildPriceBox } from "./predict/BuildPriceBox";
import { ContributePriceBox } from "./predict/ContributePriceBox";

const StepBoxC = ({ id, step }: { id: string; step: string }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState<boolean>(step == "C");
  const [preprice, setPreprice] = useState<PrepriceInfo | null>(null);
  const [postprice, setPostprice] = useState<PostpriceInfo | null>(null);

  const asyncWrapper = async () => {};

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
            {active && (
              <>
                <BuildPriceBox />
                <ContributePriceBox />
              </>
            )}
            <PredictPriceBox active={active} />
          </StepBoxLayout>
        </>
      )}
    </Wrapper>
  );
};
export default StepBoxC;
