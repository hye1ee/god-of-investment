import { useDispatch, useSelector } from "react-redux";
import { updateStep, initStep } from "../../../../states/searchSlice";
import { RootState } from "../../../../states/store";

import { stepNames } from "../../../../utils/constants";

import { MediumText, RegularText } from "../../../components/Text";
import CheckButton from "../../../components/CheckButton";
import { AbsoluteWrapper, Wrapper } from "../../../components/Wrapper";
import { BorderRow } from "../../../components/Border";
import Button from "../../../components/Button";
import ReturnIcon from "../../../../assets/return.svg";

export default () => {
  const dispatch = useDispatch();

  return (
    <Wrapper direction="column" width="full" height={118}>
      <Wrapper
        direction="row"
        width="full"
        height={55}
        color="purpleBright"
        center={true}
      >
        <RegularText size={14} absolute={true} left={30}>
          사업 유형
        </RegularText>
      </Wrapper>
      <Wrapper direction="row" width="full" height={62}></Wrapper>
      <BorderRow width={1} color="grayLight" />
    </Wrapper>
  );
};
