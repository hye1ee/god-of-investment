import styled from "styled-components";

import { APP_COLOR, height_size, width_size } from "../../../../utils/style";
import { RegularText } from "../../../components/Text";
import FilterHeader from "./FilterHeader";

export default () => {
  return (
    <FilterWrapper>
      <FilterHeader>
        <RegularText size={14}>사업 진행 단계</RegularText>
      </FilterHeader>
    </FilterWrapper>
  );
};
const FilterWrapper = styled.div`
  width: 100%;
  height: ${height_size(241)};

  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;
