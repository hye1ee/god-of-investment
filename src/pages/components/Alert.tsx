import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { appColor, height_size, width_size } from "../../utils/style";
import { MediumText } from "./Text";

export const Alert = (props: { offAlert: () => void; text: string }) => {
  useEffect(() => {
    setTimeout(() => {
      props.offAlert();
    }, 3000);
  });

  return (
    <AlertWrapper>
      <MediumText color="purpleSoft" size={13}>
        {props.text}
      </MediumText>
    </AlertWrapper>
  );
};

const AlertWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  position: absolute;
  left: 50%;
  top: 5%;
  transform: translate(-50%, 0%);

  box-sizing: border-box;
  padding: ${height_size(5)} ${width_size(15)};
  background-color: ${appColor.white};
  border: ${width_size(1)} solid ${appColor.purpleSoft};
  border-radius: ${width_size(10)};
`;
