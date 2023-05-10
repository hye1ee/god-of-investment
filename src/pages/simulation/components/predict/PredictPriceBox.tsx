import styled from "styled-components";
import { appColor, height_size, width_size } from "../../../../utils/style";
import { BoldText, MediumText } from "../../../components/Text";
import { Wrapper } from "../../../components/Wrapper";
import { OperationIcon } from "./OperationIcon";

import BuildPriceIcon from "../../../../assets/simulate/buildPrice.svg";
import ContributePriceIcon from "../../../../assets/simulate/contributePrice.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../../states/store";

export const PredictPriceBox = ({ active }: { active: boolean }) => {
  const price = useSelector((state: RootState) => state.simulation.price);

  return (
    <PredictPriceBoxWrapper active={active}>
      <MediumText size={16} color={active ? "white" : "grayLight"}>
        예상 분담금
      </MediumText>
      <PredictPriceBodyWrapper>
        {active && (
          <Wrapper direction="row" height="full" gap={6} center={true}>
            <PredictPriceTag tag="build" />
            <OperationIcon operation="subtract" />
            <PredictPriceTag tag="contribute" />
            <OperationIcon operation="equal" />
          </Wrapper>
        )}
        <Wrapper
          direction="row"
          width={224}
          height="full"
          center={true}
          gap={5}
        >
          <BoldText size={30} color={active ? "white" : "grayLight"}>
            {active
              ? ((price.build ?? 0) - (price.contribute ?? 0)).toLocaleString()
              : "-"}
          </BoldText>
          <BoldText size={20} color={active ? "white" : "grayLight"}>
            만원
          </BoldText>
        </Wrapper>
      </PredictPriceBodyWrapper>
    </PredictPriceBoxWrapper>
  );
};

const PredictPriceBoxWrapper = styled.div<{ active: boolean }>`
  width: ${width_size(860)};
  height: ${height_size(103)};

  box-sizing: border-box;
  position: relative;
  padding: ${height_size(15)} ${width_size(20)};

  background-color: ${(props) =>
    props.active ? appColor.purple : appColor.purpleBright};
  border-radius: ${width_size(10)};
  ${(props) =>
    !props.active && `border: ${width_size(1)} solid ${appColor.grayLight};`}
`;

const PredictPriceBodyWrapper = styled.div`
  position: absolute;

  right: 0%;
  top: 50%;
  transform: translate(0%, -50%);

  display: flex;
  flex-direction: row;
  align-items: center;
`;

type Tag = "build" | "contribute";
const PredictPriceTag = ({ tag }: { tag: Tag }) => {
  let src;
  if (tag == "build") src = BuildPriceIcon;
  else if (tag == "contribute") src = ContributePriceIcon;

  return (
    <PredictPriceTagWrapper>
      <PredicPriceTagIcon src={src} />
      <MediumText size={14} color="white">
        {tag == "build" ? "조합원 건축원가" : "일반분양 기여금액"}
      </MediumText>
    </PredictPriceTagWrapper>
  );
};

const PredictPriceTagWrapper = styled.div`
  width: ${width_size(149)};
  height: ${height_size(36)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${width_size(6)};

  box-sizing: border-box;
  border: ${width_size(1)} solid ${appColor.purpleSoft};
  border-radius: ${width_size(6)};
`;

const PredicPriceTagIcon = styled.img`
  height: ${height_size(17)};
`;
