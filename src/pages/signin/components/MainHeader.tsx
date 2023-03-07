import MainIcon from "../../../assets/main.svg";
import { BoldText, RegularText } from "../../components/Text";
import { ImgWrapper, Wrapper } from "../../components/Wrapper";

export default () => {
  return (
    <Wrapper direction="column" center={true} gap={4}>
      <ImgWrapper direction="row" width={57} src={MainIcon} />
      <Wrapper direction="column" center={true}>
        <BoldText size={36} color="black">
          {"투자의 신"}
        </BoldText>
        <RegularText size={12} color="gray">
          {"Project by KIRC"}
        </RegularText>
      </Wrapper>
    </Wrapper>
  );
};
