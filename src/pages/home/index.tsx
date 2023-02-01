import styled from "styled-components";
import Filter from "./components/filter/Filter";

import { appColor, height_size, width_size } from "../../utils/style";
import ProjectList from "./components/project/ProjectList";

export default () => {
  return (
    <Page>
      <Filter />
      <Map />
      <ProjectList />
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Map = styled.div`
  width: ${width_size(1240)};
  height: 100%;

  background-color: ${appColor.grayLight};
`;
