import styled from "styled-components";
import { height_size, width_size } from "../../../utils/style";
import { MediumText, RegularText } from "../../components/Text";
import GroundIcon from "../../../assets/lot/ground.svg";
import CurrentIcon from "../../../assets/lot/current.svg";
import RegionIcon from "../../../assets/lot/region.svg";
import AreaIcon from "../../../assets/lot/area.svg";
import RoadIcon from "../../../assets/lot/road.svg";
import ShapeIcon from "../../../assets/lot/shape.svg";
import GradientIcon from "../../../assets/lot/gradient.svg";
import PriceIcon from "../../../assets/lot/price.svg";
import PlanIcon from "../../../assets/lot/plan.svg";

const Icons: { [index: string]: string } = {
  지목: GroundIcon,
  이용상황: CurrentIcon,
  용도지역: RegionIcon,
  "면적(㎡)": AreaIcon,
  도로: RoadIcon,
  형상: ShapeIcon,
  지세: GradientIcon,
  "공시지가(원/㎡)": PriceIcon,
  토지이용계획: PlanIcon,
};

const IconPair = ({ title, value }: { title: string; value: string }) => {
  return (
    <IconPairWrapper>
      <IconWrapper src={Icons[title]} />
      <PairWrapper>
        <MediumText size={12} color="black">
          {title}
        </MediumText>
        <RegularText size={11} color="black">
          {value}
        </RegularText>
      </PairWrapper>
    </IconPairWrapper>
  );
};
export default IconPair;

const IconPairWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  min-width: ${width_size(110)};
  min-height: ${height_size(32)};

  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${width_size(12)};
`;

const IconWrapper = styled.img`
  width: ${width_size(26)};
  height: ${height_size(26)};

  padding: ${width_size(2)};
`;

const PairWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  min-width: ${width_size(70)};
  max-width: ${width_size(430)};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
