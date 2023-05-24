import styled from "styled-components";
import { Wrapper } from "../../../components/Wrapper";
import { appColor, height_size, width_size } from "../../../../utils/style";
import { RegularText } from "../../../components/Text";
import CheckIcon from "../../../../assets/check.svg";

interface SelectTagProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

export default (props: SelectTagProps) => {
  return (
    <SelectTagWrapper {...props}>
      {props.active && <CheckIconWrapper src={CheckIcon} />}
      <RegularText size={13} color={props.active ? "purple" : "gray"}>
        {props.title}
      </RegularText>
    </SelectTagWrapper>
  );
};

const SelectTagWrapper = styled.div<SelectTagProps>`
  width: fit-content;
  height: fit-content;

  box-sizing: border-box;
  padding: ${height_size(5)} ${width_size(10)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${width_size(4)};

  background-color: ${(props) =>
    props.active ? appColor.purpleLight : appColor.blueBright};
  border-radius: ${height_size(12)};

  cursor: pointer;
`;

const CheckIconWrapper = styled.img`
  width: ${width_size(14)};
`;
