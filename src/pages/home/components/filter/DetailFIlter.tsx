import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../../components/Button";
import { Wrapper } from "../../../components/Wrapper";
import { appColor, height_size } from "../../../../utils/style";
import { BorderRow } from "../../../components/Border";

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper direction="column" width="full">
      {open && <FilterBodyWrapper />}
      <Wrapper
        onClick={() => setOpen((val) => !val)}
        direction="column"
        center={true}
        width="full"
        height={60}
      >
        <BorderRow width={1} color="grayLight" />
        <Wrapper direction="row" height={58} center={true}>
          <Button
            textOption={{
              text: "상세 검색",
              color: "gray",
              size: 14,
              weight: "regular",
            }}
          />
        </Wrapper>
        <BorderRow width={1} color="grayLight" />
      </Wrapper>
    </Wrapper>
  );
};

const FilterBodyWrapper = styled.div`
  width: 100%;
  height: ${height_size(537)};

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  background-color: ${appColor.purpleBright};
`;
