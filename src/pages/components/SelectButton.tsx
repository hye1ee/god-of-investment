import SelectTrue from "../../assets/selectTrue.svg";
import SelectFalse from "../../assets/selectFalse.svg";
import { ImgWrapper, Wrapper } from "./Wrapper";

interface SelectButtonProps {
  check: boolean;
  onCheck: (val: boolean) => void;
  size: number;
}

const SelectButton = (props: SelectButtonProps) => {
  return (
    <Wrapper
      onClick={() => props.onCheck(!props.check)}
      center={true}
      direction="row"
    >
      <ImgWrapper
        src={props.check ? SelectTrue : SelectFalse}
        width={props.size ?? 18}
        height={18}
        direction="row"
      />
    </Wrapper>
  );
};
export default SelectButton;
