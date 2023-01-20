import styled from "styled-components";
import { APP_COLOR, height_size, width_size } from "../../../../utils/style";

const FilterHeader = styled.div`
  width: 100%;
  height: ${height_size(60)};
  padding-left: ${width_size(37)};

  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: ${APP_COLOR["purple-bright"]};
  border: 1px solid ${APP_COLOR["gray-light"]};
`;
export default FilterHeader;
