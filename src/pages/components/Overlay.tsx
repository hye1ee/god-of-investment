import React, { ReactNode } from "react";
import styled from "styled-components";

export const Overlay = (props: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <OverlayWrapper onClick={props.onClick}>
      <OverlayBackground />
      <OverlayContainer>{props.children}</OverlayContainer>
    </OverlayWrapper>
  );
};

const OverlayWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  z-index: 99;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const OverlayBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: black;
  opacity: 0.3;
`;
