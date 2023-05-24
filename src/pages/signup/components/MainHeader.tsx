import React from "react";
import MainIcon from "../../../assets/main.svg";
import { ImgWrapper, Wrapper } from "../../components/Wrapper";

export default () => {
  return (
    <Wrapper direction="column" center={true} gap={4}>
      <ImgWrapper direction="row" width={57} src={MainIcon} />
      <Wrapper direction="column" center={true}></Wrapper>
    </Wrapper>
  );
};
