import styled from "styled-components";
import { width_size, height_size } from "../../../../utils/style";

import LocationFilter from "./LocationFilter";
import StepFilter from "./StepFilter";
import DetailFIlter from "./DetailFIlter";

export default () => {
  return (
    <FilterWrapper>
      <LocationFilter />
      <StepFilter />
      <DetailFIlter />
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  width: ${width_size(380)};
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow-y: scroll;
`;
