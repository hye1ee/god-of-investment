import styled from "styled-components";
import { appColor, height_size, width_size } from "../../utils/style";

interface WrapperProps {
  direction: "row" | "column";
  center?: boolean;
  gap?: number;
  width?: number | "full";
  height?: number | "full";
  wrap?: boolean;
  color?: string;
  stretch?: boolean;
  scroll?: boolean;
  onClick?: () => void;
}
interface AbsoluteWrapperProps extends WrapperProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${(props) =>
    props.width
      ? props.width === "full"
        ? "100%"
        : width_size(props.width)
      : "fit-content"};
  height: ${(props) =>
    props.height
      ? props.height === "full"
        ? "100%"
        : height_size(props.height)
      : "fit-content"};
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: ${(props) => (props.center === true ? "center" : "flex-start")};
  justify-content: ${(props) =>
    props.center === true
      ? "center"
      : props.stretch === true
      ? "space-between"
      : "flex-start"};

  ${(props) =>
    props.direction === "row" &&
    `flex-direction: row; gap: ${width_size(props.gap ?? 0)};`}
  ${(props) =>
    props.direction === "column" &&
    `flex-direction: column; gap: ${height_size(props.gap ?? 0)};`}
  ${(props) => props.wrap === true && `flex-wrap: wrap;`}
  ${(props) => props.color && `background-color: ${appColor[props.color]};`}
  ${(props) => props.onClick && `cursor: pointer;`}
  ${(props) => props.scroll === true && `overflow: scroll;`}
`;

export const AbsoluteWrapper = styled.div<AbsoluteWrapperProps>`
  width: ${(props) =>
    props.width
      ? props.width === "full"
        ? "100%"
        : width_size(props.width)
      : "fit-content"};
  height: ${(props) =>
    props.height
      ? props.height === "full"
        ? "100%"
        : height_size(props.height)
      : "fit-content"};

  flex: 0 0 auto;
  position: absolute;
  display: flex;
  align-items: ${(props) => (props.center === true ? "center" : "flex-start")};
  justify-content: ${(props) =>
    props.center === true ? "center" : "flex-start"};

  ${(props) =>
    props.direction === "row" &&
    `flex-direction: row; gap: ${width_size(props.gap ?? 0)}`};
  ${(props) =>
    props.direction === "column" &&
    `flex-direction: column; gap: ${height_size(props.gap ?? 0)}`};
  ${(props) => props.top && `top: ${height_size(props.top)}`};
  ${(props) => props.left && `left: ${width_size(props.left)}`};
  ${(props) => props.right && `right: ${width_size(props.right)}`};
  ${(props) => props.bottom && `bottom: ${height_size(props.bottom)}`};

  ${(props) => props.wrap === true && `flex-wrap: wrap`};
  ${(props) => props.color && `background-color: ${appColor[props.color]}`};

  ${(props) => props.onClick && `cursor: pointer`};
`;

export const ImgWrapper = styled.img<WrapperProps>`
  width: ${(props) =>
    props.width
      ? props.width === "full"
        ? "100%"
        : width_size(props.width)
      : "fit-content"};
  height: ${(props) =>
    props.height
      ? props.height === "full"
        ? "100%"
        : height_size(props.height)
      : "fit-content"};
  flex: 0 0 auto;
  display: flex;
  align-items: ${(props) => (props.center === true ? "center" : "flex-start")};
  justify-content: ${(props) =>
    props.center === true ? "center" : "flex-start"};

  ${(props) =>
    props.direction === "row" &&
    `flex-direction: row; gap: ${width_size(props.gap ?? 0)}`};
  ${(props) =>
    props.direction === "column" &&
    `flex-direction: column; gap: ${height_size(props.gap ?? 0)}`};

  ${(props) => props.onClick && `cursor: pointer`};
  overflow: auto;
`;
