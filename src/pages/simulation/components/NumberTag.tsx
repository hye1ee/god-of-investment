import styled from "styled-components";
import { MediumText } from "../../components/Text";
import { appColor, height_size, width_size } from "../../../utils/style";

interface NumberTagProps {
  number: number;
  active: boolean;
}

const NumberTag = (props: NumberTagProps) => {
  return (
    <NumberTagWrapper {...props}>
      <MediumText size={14} color="white">
        {props.number}
      </MediumText>
    </NumberTagWrapper>
  );
};
export default NumberTag;

const NumberTagWrapper = styled.div<NumberTagProps>`
  width: ${height_size(22)};
  height: ${height_size(22)};

  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: ${(props) =>
    props.active ? appColor.purple : appColor.grayLight};

  border-radius: ${height_size(4)};
`;
