import { useDispatch, useSelector } from "react-redux";
import { updateStep, initStep } from "../../../../states/searchSlice";
import { RootState } from "../../../../states/store";

import { stepNames } from "../../../../utils/constants";

import { RegularText } from "../../../components/Text";
import CheckButton from "../../../components/CheckButton";
import { AbsoluteWrapper, Wrapper } from "../../../components/Wrapper";
import { BorderRow } from "../../../components/Border";

export default () => {
  const step = useSelector((state: RootState) => state.search.step);

  return (
    <Wrapper direction="column" width="full" height={311}>
      <Wrapper
        direction="row"
        width="full"
        height={50}
        color="purpleBright"
        center={true}
      >
        <RegularText size={14} absolute={true} left={30}>
          사업 진행 단계
        </RegularText>
        {/* {<AbsoluteWrapper direction="row" right={30}>
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
        </AbsoluteWrapper>} */}
        {step.filter((val) => val).length == 0 && (
          <AbsoluteWrapper direction="row" right={26}>
            <RegularText size={10} color="gray">
              한가지 이상의 사업 단계를 선택하세요
            </RegularText>
          </AbsoluteWrapper>
        )}
      </Wrapper>
      <Wrapper direction="row" width="full" height={260}>
        <FilterBody step={step} />
      </Wrapper>
      <BorderRow width={1} color="grayLight" />
    </Wrapper>
  );
};

const FilterBody = ({ step }: { step: boolean[] }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper direction="row" width="full" height="full" center={true} gap={15}>
      <Wrapper direction="column" center={true} gap={13}>
        {step.slice(0, 7).map((value, idx) => (
          <Wrapper
            direction="row"
            center={true}
            key={idx}
            gap={12}
            onClick={() => dispatch(updateStep({ index: idx }))}
          >
            <CheckButton check={value} onCheck={() => {}} size={17} />
            <Wrapper direction="row" width={145}>
              <RegularText size={13} color="gray">
                {`${idx + 1}. ${stepNames[idx]}`}
              </RegularText>
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
      <Wrapper direction="column" center={true} gap={13}>
        {step.slice(7).map((value, idx) => (
          <Wrapper
            direction="row"
            center={true}
            key={idx}
            gap={12}
            onClick={() => dispatch(updateStep({ index: idx + 7 }))}
          >
            <CheckButton check={value} onCheck={() => {}} size={17} />
            <Wrapper direction="row" width={100}>
              <RegularText size={13} color="gray">
                {`${idx + 8}. ${stepNames[idx + 7]}`}
              </RegularText>
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </Wrapper>
  );
};
