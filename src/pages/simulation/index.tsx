import BodyLayout from "../components/BodyLayout";
import { Wrapper } from "../components/Wrapper";
import StepBoxA from "./components/StepBoxA";
import StepBoxB from "./components/StepBoxB";
import StepBoxC from "./components/StepBoxC";
import { useSelector } from "react-redux";
import { RootState } from "../../states/store";
import { getLastSimulationDate } from "./utils";

export default () => {
  const id = useSelector((state: RootState) => state.target.id);
  const name = useSelector((state: RootState) => state.target.name);
  const step = useSelector((state: RootState) => state.simulation.step);

  return (
    <BodyLayout
      title="분담금 시뮬레이션"
      padding={460}
      color="purpleGrayBright"
    >
      <Wrapper direction="column" width="full">
        {id !== null && (
          <>
            <StepBoxA id={id} name={name} step={step} />
            <StepBoxB id={id} step={step} />
            <StepBoxC id={id} step={step} />
          </>
        )}
      </Wrapper>
    </BodyLayout>
  );
};
