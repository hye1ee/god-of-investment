import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../../components/Button";
import { RegularText } from "../../../components/Text";
import { appColor, height_size } from "../../../../utils/style";

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <FilterWrapper>
      {open && <FilterBodyWrapper />}
      <FilterButtonWrapper onClick={() => setOpen((val) => !val)}>
        <Button
          textOption={{
            text: "상세 검색",
            color: "gray",
            size: 14,
            weight: "regular",
          }}
        />
      </FilterButtonWrapper>
    </FilterWrapper>
  );
};
const FilterWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  transition: all 0.2s;
`;

const FilterBodyWrapper = styled.div`
  width: 100%;
  height: ${height_size(537)};

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  background-color: ${appColor.gray};
`;

const FilterButtonWrapper = styled.div`
  width: 100%;
  height: ${height_size(60)};

  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${appColor.white};
  border: 1px solid ${appColor.grayLight};

  cursor: pointer;
`;
