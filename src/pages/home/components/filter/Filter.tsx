import LocationFilter from "./LocationFilter";
import StepFilter from "./StepFilter";
import DetailFIlter from "./DetailFIlter";
import { Wrapper } from "../../../components/Wrapper";
import TypeFilter from "./TypeFilter";

export default () => {
  return (
    <Wrapper direction="column" width={380} height="full">
      <LocationFilter />
      <TypeFilter />
      <StepFilter />
      <DetailFIlter />
    </Wrapper>
  );
};
