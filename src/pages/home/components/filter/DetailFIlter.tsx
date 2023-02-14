import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../../components/Button";
import { ImgWrapper, Wrapper } from "../../../components/Wrapper";
import { appColor, height_size } from "../../../../utils/style";
import { BorderRow } from "../../../components/Border";
import { RegularText } from "../../../components/Text";
import SelectButton from "../../../components/SelectButton";
import UpArrow from "../../../../assets/upArrow.svg";
import DownArrow from "../../../../assets/downArrow.svg";

interface DetailFilterState {
  type: "재개발" | "재건축";
  priceAverage: {
    standard: "매물 가격" | "국토교통부 실거래가";
    min: number;
    max: number;
  };
  priceEstimate: {
    standard: "매물 가격" | "국토교통부 실거래가";
    min: number;
    max: number;
  };
}

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper direction="column" width="full">
      <Wrapper
        onClick={() => setOpen((val) => !val)}
        direction="column"
        center={true}
        width="full"
        height={60}
      >
        <BorderRow width={1} color="grayLight" />
        <Wrapper direction="row" height={58} center={true} gap={5}>
          <Button
            textOption={{
              text: "상세 검색",
              color: "gray",
              size: 14,
              weight: "regular",
            }}
          />
          <ImgWrapper
            src={open ? UpArrow : DownArrow}
            width={12}
            height={8}
            direction="row"
          />
        </Wrapper>
        <BorderRow width={1} color="grayLight" />
      </Wrapper>
      {open && <FilterBody />}
    </Wrapper>
  );
};

const FilterBody = () => {
  return (
    <Wrapper
      direction="column"
      width="full"
      height={539}
      gap={15}
      center={true}
    >
      <Wrapper direction="column" width={327} height={54} gap={7}>
        <RegularText size={14}>{"사업 유형"}</RegularText>
      </Wrapper>
      <Wrapper direction="column" width={327} height={208} gap={12}>
        <RegularText size={14}>{"지역 내 아파트 평균 시세"}</RegularText>
      </Wrapper>
      <Wrapper direction="column" width={327} height={208} gap={12}>
        <RegularText size={14}>{"공사비 예정 금액"}</RegularText>
        <Wrapper direction="row" width="full" height={16} gap={16}>
          <Wrapper direction="row" height="full" gap={8}></Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
