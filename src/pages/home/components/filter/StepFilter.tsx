import { useDispatch, useSelector } from "react-redux";
import { updateStep, initStep } from "../../../../states/searchSlice";
import { RootState } from "../../../../states/store";

import { stepNames } from "../../../../utils/constants";

import { RegularText } from "../../../components/Text";
import CheckButton from "../../../components/CheckButton";
import { AbsoluteWrapper, Wrapper } from "../../../components/Wrapper";
import { BorderRow } from "../../../components/Border";
import Button from "../../../components/Button";
import ReturnIcon from "../../../../assets/return.svg";

export default () => {
  const dispatch = useDispatch();

  return (
    <Wrapper direction="column" width="full">
      <Wrapper
        direction="row"
        width="full"
        height={59}
        color="purpleBright"
        center={true}
      >
        <RegularText size={14} absolute={true} left={38}>
          사업 진행 단계
        </RegularText>
        <AbsoluteWrapper direction="row" right={26}>
          <Button
            iconOption={{ icon: ReturnIcon, width: 11, height: 11 }}
            textOption={{
              text: "조건삭제",
              weight: "regular",
              color: "gray",
              size: 12,
            }}
            gap={5}
            width={82}
            height={24}
            borderOption={{ width: 1, color: "grayLight" }}
            radius={12}
            onClick={() => dispatch(initStep({}))}
          />
        </AbsoluteWrapper>
      </Wrapper>
      <BorderRow width={1} color="grayLight" />
      <Wrapper direction="row" width="full" height={180}>
        <FilterBody />
      </Wrapper>
    </Wrapper>
  );
};

const FilterBody = () => {
  const step = useSelector((state: RootState) => state.search.step);
  const dispatch = useDispatch();

  return (
    <Wrapper direction="row" width="full" height="full" center={true} gap={40}>
      <Wrapper direction="column" center={true} gap={13}>
        {step.slice(0, 5).map((value, idx) => (
          <Wrapper
            direction="row"
            center={true}
            key={idx}
            gap={12}
            onClick={() => dispatch(updateStep({ index: idx }))}
          >
            <CheckButton check={value} onCheck={() => {}} size={17} />
            <Wrapper direction="row" width={105}>
              <RegularText size={13} color="gray">
                {stepNames[idx]}
              </RegularText>
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
      <Wrapper direction="column" center={true} gap={13}>
        {step.slice(5).map((value, idx) => (
          <Wrapper
            direction="row"
            center={true}
            key={idx}
            gap={12}
            onClick={() => dispatch(updateStep({ index: idx + 5 }))}
          >
            <CheckButton check={value} onCheck={() => {}} size={17} />
            <Wrapper direction="row" width={105}>
              <RegularText size={13} color="gray">
                {stepNames[idx + 5]}
              </RegularText>
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </Wrapper>
  );
};
