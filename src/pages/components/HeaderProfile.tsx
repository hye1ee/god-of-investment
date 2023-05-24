import React from "react";
import { Wrapper } from "./Wrapper";

import PersonIcon from "../../assets/profile.png";
import styled from "styled-components";
import { appColor, height_size, width_size } from "../../utils/style";
import { MediumText, RegularText } from "./Text";
import { useSelector } from "react-redux";
import { RootState } from "../../states/store";

export const HeaderProfile = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <HeaderProfileWrapper>
      <HeaderImg src={PersonIcon} />
      <Wrapper direction="column">
        <MediumText size={15}>{`${user.name} 님`}</MediumText>
        <RegularText size={6} color="gray">
          {user.email}
        </RegularText>
      </Wrapper>
    </HeaderProfileWrapper>
  );
};

const HeaderImg = styled.img`
  width: ${width_size(35)};
`;

const HeaderProfileWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  box-sizing: border-box;
  padding: ${height_size(5)} ${width_size(15)};
  background-color: ${appColor.white};
  border-radius: ${width_size(10)};

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${width_size(10)};
`;
