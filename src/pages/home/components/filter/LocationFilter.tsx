import styled from "styled-components";
import { height_size } from "../../../../utils/style";

export default () => {
  return <FilterWrapper>FilterWrapper</FilterWrapper>;
};
const FilterWrapper = styled.div`
  width: 100%;
  height: ${height_size(348)};

  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;
