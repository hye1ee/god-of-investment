import { ReactNode } from "react";
import styled from "styled-components";
import { MediumText } from "../../components/Text";
import { appColor, height_size, width_size } from "../../../utils/style";

interface BoxLayoutProps {
  width: number;
  color: string;
  title: string;
  children: ReactNode;
}

const BoxLayout = (props: BoxLayoutProps) => {
  return (
    <BoxLayoutWrapper {...props}>
      <MediumText size={15}>{props.title}</MediumText>
      {props.children}
    </BoxLayoutWrapper>
  );
};
export default BoxLayout;

const BoxLayoutWrapper = styled.div<BoxLayoutProps>`
  width: ${(props) => width_size(props.width)};
  height: fit-content;

  padding: ${width_size(19)};
  box-sizing: border-box;

  background-color: ${(props) => appColor[props.color]};
  border: 1px solid ${(props) => appColor.grayLight};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: ${height_size(15)};
`;
