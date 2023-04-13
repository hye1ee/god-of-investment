import styled from "styled-components";
import { AbsoluteWrapper, Wrapper } from "../../components/Wrapper";
import {
  appColor,
  height_size,
  shadowStyle,
  width_size,
} from "../../../utils/style";
import { MediumText } from "../../components/Text";

import DropImg from "../../../assets/downArrow.svg";
import { useState } from "react";

interface DropDownProps {
  value: string;
  onSelect: (val: string) => void;
  list: string[];
  active: boolean;
}

const DropDown = (props: DropDownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper
      direction="column"
      onClick={() => {
        if (props.active) setOpen((val) => !val);
      }}
    >
      <DropDownContainer>
        <MediumText>{props.value}</MediumText>
        <DropIcon src={DropImg} />
      </DropDownContainer>
      {open && <DropList {...props} />}
    </Wrapper>
  );
};
export default DropDown;

const DropList = (props: DropDownProps) => {
  return (
    <DropListWrapper>
      {props.list.map((val) => (
        <DropItem
          value={val}
          active={props.value === val}
          onSelect={props.onSelect}
        />
      ))}
    </DropListWrapper>
  );
};

const DropListWrapper = styled.div`
  position: absolute;
  top: ${height_size(40)};

  display: flex;
  flex-direction: column;
  border-radius: ${height_size(6)};
  overflow: hidden;

  z-index: 999999;
  ${shadowStyle}
`;

interface DropItemProps {
  value: string;
  active: boolean;
  onSelect: (val: string) => void;
}

const DropItem = (props: DropItemProps) => {
  return (
    <DropItemWrapper
      active={props.active}
      onClick={() => props.onSelect(props.value)}
    >
      <MediumText size={15} color="gray">
        {props.value}
      </MediumText>
    </DropItemWrapper>
  );
};

const DropItemWrapper = styled.div<{ active: boolean }>`
  width: ${width_size(86)};
  height: ${height_size(36)};

  background-color: ${(props) =>
    props.active ? appColor.grayLight : appColor.white};
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const DropDownContainer = styled.div`
  width: ${width_size(86)};
  height: ${height_size(36)};

  box-sizing: border-box;
  border: 1px solid ${appColor.grayLight};
  border-radius: ${height_size(6)};
  padding-right: ${width_size(10)};

  background-color: ${appColor.white};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: ${width_size(10)};

  cursor: pointer;
`;
const DropIcon = styled.img``;
