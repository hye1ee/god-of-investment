import styled from "styled-components";
import { width_size, height_size } from "../../../../utils/style";

import LocationFilter from "./LocationFilter";
import StepFilter from "./StepFilter";
import DetailFIlter from "./DetailFIlter";
import { Wrapper } from "../../../components/Wrapper";

export default () => {
  return (
    <Wrapper direction="column" width={380} height="full">
      <LocationFilter />
      <StepFilter />
      <DetailFIlter />
    </Wrapper>
  );
};
