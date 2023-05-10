import styled from "styled-components";
import { appColor, height_size, width_size } from "../../../../utils/style";
import { MediumText, RegularText } from "../../../components/Text";
import { Wrapper } from "../../../components/Wrapper";

interface PriceInputProps {
  value: string;
  onChange: (val: string) => void;
  active: boolean;
  unit: string;
  title: string;
  width: number;
}

export const PriceInput = (props: PriceInputProps) => {
  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    let val = evt.target.value;
    if (val.length == 0) val = "0";
    const isValid = /^[+-]?((\.\d+)|(\d+(\.\d+)?)|(\d+\.))$/.test(val);
    console.log(val, isValid);
    if (!isValid) return;

    console.log(parseFloat(val), val);

    props.onChange(val);
  };

  return (
    <Wrapper direction="column" gap={3}>
      <MediumText size={14} color="gray">
        {props.title}
      </MediumText>
      <PriceInputWrapper width={props.width}>
        <PriceInputField onChange={onChange} value={props.value} />
        <RegularText size={16} color="grayLight">
          {props.unit}
        </RegularText>
      </PriceInputWrapper>
    </Wrapper>
  );
};

const PriceInputWrapper = styled.div<{ width: number }>`
  width: ${(props) => width_size(props.width)};
  height: ${height_size(35)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 0 ${width_size(12)};

  background-color: ${appColor.white};
  border: ${width_size(1)} solid ${appColor.grayLight};
  border-radius: ${width_size(6)};
`;

const PriceInputField = styled.input`
  width: 60%;
  border: none;

  &:focus {
    outline: none;
  }
`;
