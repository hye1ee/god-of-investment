import styled from "styled-components";
import { height_size, width_size } from "../../../utils/style";
import { MediumText, RegularText } from "../../components/Text";

const IconName: { [index: string]: string } = {
  지목: "ground",
  이용상황: "current",
  용도지역: "region",
  "면적(㎡)": "area",
  도로: "road",
  형상: "shape",
  지세: "gradient",
  "공시지가(원/㎡)": "price",
  토지이용계획: "plan",
};

const IconPair = ({ title, value }: { title: string; value: string }) => {
  return (
    <IconPairWrapper>
      <IconWrapper src={`/src/assets/lot/${IconName[title] ?? "ground"}.svg`} />
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
