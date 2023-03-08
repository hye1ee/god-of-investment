import styled from "styled-components";
import Filter from "./components/filter/Filter";

import Map from "./components/map/Map";

export default () => {
  return (
    <Page>
      <Filter />
      <Map />
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
