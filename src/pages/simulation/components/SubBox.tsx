import styled from "styled-components";
import { appColor, height_size, width_size } from "../../../utils/style";

export const SubBoxShortWrapper = styled.div`
  width: ${width_size(420)};
  height: ${height_size(56)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  background-color: ${appColor.purpleBright};
  border-radius: ${height_size(10)};
  border: 1px solid ${appColor.purpleLight};

  padding: ${height_size(15)} ${width_size(20)};
`;

export const SubBoxWrapper = styled.div<{ long?: boolean }>`
  width: ${width_size(420)};
  height: ${height_size(83)};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  box-sizing: border-box;
  background-color: ${appColor.purpleBright};
  border-radius: ${height_size(10)};
  border: 1px solid ${appColor.purpleLight};

  padding: ${height_size(15)} ${width_size(20)};
`;

export const SubBoxLongWrapper = styled.div<{ active: boolean }>`
  width: ${width_size(420)};
  height: ${height_size(181)};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${height_size(30)};

  box-sizing: border-box;
  background-color: ${({ active }) =>
    active ? appColor.purple : appColor.purpleBright};

  ${({ active }) => !active && `border: 1px solid ${appColor.purpleLight};`}
  border-radius: ${height_size(10)};

  padding: ${height_size(15)} ${width_size(20)};
`;
