import Button from "../../../components/Button";
import { ImgWrapper, Wrapper } from "../../../components/Wrapper";
import { BorderRow } from "../../../components/Border";
import { RegularText } from "../../../components/Text";
import SelectButton from "../../../components/SelectButton";
import UpArrow from "../../../../assets/upArrow.svg";
import DownArrow from "../../../../assets/downArrow.svg";

import { standardNames } from "../../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../states/store";
import {
  updateDetail,
  updateDetailType,
  updatePriceAverageStandard,
  updatePriceEstimateStandard,
} from "../../../../states/searchSlice";

type ProjectType = "재개발" | "재건축";

interface DetailFilterState {
  type: {
    redevelop: boolean;
    reconstruct: boolean;
  };
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

const defaultFilter: DetailFilterState = {
  type: {
    redevelop: true,
    reconstruct: true,
  },
  priceAverage: {
    standard: "매물 가격",
    min: Number.NEGATIVE_INFINITY,
    max: Number.POSITIVE_INFINITY,
  },
  priceEstimate: {
    standard: "매물 가격",
    min: Number.NEGATIVE_INFINITY,
    max: Number.POSITIVE_INFINITY,
  },
};

export default () => {
  const detail = useSelector((state: RootState) => state.search.detail);
  const dispatch = useDispatch();

  return (
    <Wrapper direction="column" width="full">
      <Wrapper
        onClick={() => dispatch(updateDetail({}))}
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
            src={detail.active ? UpArrow : DownArrow}
            width={12}
            height={8}
            direction="row"
          />
        </Wrapper>
        <BorderRow width={1} color="grayLight" />
      </Wrapper>
      {detail.active && <FilterBody />}
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
      <Wrapper direction="column" width={327} height={54} gap={4}>
        <RegularText size={14}>{"사업 유형"}</RegularText>
        <TypeSelector />
      </Wrapper>
      <Wrapper direction="column" width={327} height={208} gap={12}>
        <RegularText size={14}>{"지역 내 아파트 평균 시세"}</RegularText>
        <PriceAverageSelector />
      </Wrapper>
      <Wrapper direction="column" width={327} height={208} gap={12}>
        <RegularText size={14}>{"공사비 예정 금액"}</RegularText>
        <PriceEstimateSelector />
      </Wrapper>
    </Wrapper>
  );
};

const TypeSelector = () => {
  const type = useSelector((state: RootState) => state.search.detail.type);
  const dispatch = useDispatch();

  return (
    <Wrapper direction="row" gap={13}>
      <Button
        textOption={{
          text: "재개발 사업",
          weight: "regular",
          size: 14,
          color: type.redevelop ? "purple" : "gray",
        }}
        width={92}
        height={30}
        radius={15}
        color={type.redevelop ? "purpleLight" : "grayLight"}
        onClick={() => dispatch(updateDetailType({ key: "redevelop" }))}
      />
      <Button
        textOption={{
          text: "재건축 사업",
          weight: "regular",
          size: 14,
          color: type.reconstruct ? "purple" : "gray",
        }}
        width={92}
        height={30}
        radius={15}
        color={type.reconstruct ? "purpleLight" : "grayLight"}
        onClick={() => dispatch(updateDetailType({ key: "reconstruct" }))}
      />
    </Wrapper>
  );
};

const PriceAverageSelector = () => {
  const priceAverage = useSelector(
    (state: RootState) => state.search.detail.priceAverage
  );
  const dispatch = useDispatch();

  return (
    <Wrapper direction="column" gap={11}>
      <Wrapper direction="row" gap={15}>
        {standardNames.map((name) => (
          <Wrapper
            direction="row"
            center={true}
            gap={8}
            onClick={() =>
              dispatch(updatePriceAverageStandard({ value: name }))
            }
          >
            <SelectButton
              check={priceAverage.standard === name}
              onCheck={() => {}}
              size={16}
            />
            <RegularText
              size={13}
              color={priceAverage.standard === name ? "black" : "gray"}
            >
              {name}
            </RegularText>
          </Wrapper>
        ))}
      </Wrapper>
      <Wrapper direction="row"></Wrapper>
      <Wrapper direction="row"></Wrapper>
    </Wrapper>
  );
};

const PriceEstimateSelector = () => {
  const priceAverage = useSelector(
    (state: RootState) => state.search.detail.priceEstimate
  );
  const dispatch = useDispatch();

  return (
    <Wrapper direction="column" gap={11}>
      <Wrapper direction="row" gap={15}>
        {standardNames.map((name) => (
          <Wrapper
            direction="row"
            center={true}
            gap={8}
            onClick={() =>
              dispatch(updatePriceEstimateStandard({ value: name }))
            }
          >
            <SelectButton
              check={priceAverage.standard === name}
              onCheck={() => {}}
              size={16}
            />
            <RegularText
              size={13}
              color={priceAverage.standard === name ? "black" : "gray"}
            >
              {name}
            </RegularText>
          </Wrapper>
        ))}
      </Wrapper>
      <Wrapper direction="row"></Wrapper>
      <Wrapper direction="row"></Wrapper>
    </Wrapper>
  );
};
