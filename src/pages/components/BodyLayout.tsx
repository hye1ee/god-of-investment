import React, { ReactNode } from "react";
import styled from "styled-components";

import Title from "./Title";
import { appColor, height_size, width_size } from "../../utils/style";

interface BodyLayoutProps {
  title: string;
  color: string;
  padding: number;
  children: ReactNode;
}

const BodyLayout = (props: BodyLayoutProps) => {
  return (
    <BodyLayoutWrapper {...props}>
      <Title title={props.title} />
      {props.children}
    </BodyLayoutWrapper>
  );
};
export default BodyLayout;

const BodyLayoutWrapper = styled.div<BodyLayoutProps>`
  width: 100%;
  height: fit-content;

  min-height: ${height_size(1000)};
  padding: ${(props) =>
    `${height_size(50)} ${width_size(props.padding)} ${height_size(100)}
    ${width_size(props.padding)}`};

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${height_size(25)};

  background-color: ${(props) => appColor[props.color]};
`;
