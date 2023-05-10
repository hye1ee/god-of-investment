import styled from "styled-components";
import { AbsoluteWrapper, Wrapper } from "../../components/Wrapper";
import { appColor, height_size, width_size } from "../../../utils/style";
import { BoldText, MediumText } from "../../components/Text";

interface PriceBoxProps {
  title: string;
  price: number;
}

const PriceBox = (props: PriceBoxProps) => {
  return (
    <PriceBoxWrapper>
      <MediumText size={16} color="white">
        {props.title}
      </MediumText>
      <PriceWrapper>
        <BoldText size={30} color="white">
          {props.price.toLocaleString()}
        </BoldText>
        <BoldText size={20} color="purpleLight">
          만원
        </BoldText>
      </PriceWrapper>
    </PriceBoxWrapper>
  );
};
export default PriceBox;

const PriceBoxWrapper = styled.div`
  width: ${width_size(420)};
  height: fit-content;
  min-height: ${height_size(221)};

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  position: relative;
  padding: ${height_size(15)} ${width_size(20)};

  background-color: ${appColor.purple};
  border-radius: ${width_size(10)};
`;

const PriceWrapper = styled.div`
  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${width_size(8)};
`;
