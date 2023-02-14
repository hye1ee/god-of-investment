import CheckTrue from "../../assets/checkTrue.svg";
import CheckFalse from "../../assets/checkFalse.svg";
import { ImgWrapper, Wrapper } from "./Wrapper";

interface CheckButtonProps {
  check: boolean;
  onCheck: (val: boolean) => void;
  size: number;
}

const CheckButton = (props: CheckButtonProps) => {
  return (
    <Wrapper
      onClick={() => props.onCheck(!props.check)}
      center={true}
      direction="row"
    >
      <ImgWrapper
        src={props.check ? CheckTrue : CheckFalse}
        width={props.size ?? 18}
        height={props.size ?? 18}
        direction="row"
      />
    </Wrapper>
  );
};
export default CheckButton;
