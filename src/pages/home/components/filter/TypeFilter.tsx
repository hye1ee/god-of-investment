import { useDispatch, useSelector } from "react-redux";

import { RegularText } from "../../../components/Text";
import { AbsoluteWrapper, Wrapper } from "../../../components/Wrapper";
import { BorderRow } from "../../../components/Border";

import SelectTag from "./SelectTag";
import { RootState } from "../../../../states/store";
import { updateType } from "../../../../states/searchSlice";

export default () => {
  const dispatch = useDispatch();
  const type = useSelector((state: RootState) => state.search.type);

  return (
    <Wrapper direction="column" width="full" height={120}>
      <Wrapper
        direction="row"
        width="full"
        height={50}
        color="purpleBright"
        center={true}
      >
        <RegularText size={14} absolute={true} left={30}>
          사업 유형
        </RegularText>
        {!type.reconstruct && !type.redevelop && (
          <AbsoluteWrapper direction="row" right={26}>
            <RegularText size={10} color="gray">
              한가지 이상의 사업 유형을 선택하세요
            </RegularText>
          </AbsoluteWrapper>
        )}
      </Wrapper>
      <Wrapper direction="row" width="full" height={69} gap={13} center={true}>
        <AbsoluteWrapper direction="row" gap={13} left={30}>
          <SelectTag
            title="재건축 사업"
            active={type.reconstruct}
            onClick={() => dispatch(updateType({ type: "reconstruct" }))}
          />
          <SelectTag
            title="재개발 사업"
            active={type.redevelop}
            onClick={() => dispatch(updateType({ type: "redevelop" }))}
          />
        </AbsoluteWrapper>
      </Wrapper>
      <BorderRow width={1} color="grayLight" />
    </Wrapper>
  );
};
