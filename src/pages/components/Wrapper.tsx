import styled from "styled-components";
import { height_size, width_size } from "../../utils/style";

interface WrapperProps {
  direction: "row" | "column";
  gap?: number;
}
interface AbsoluteWrapperProps extends WrapperProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export const Wrapper = styled.div<WrapperProps>`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  ${(props) =>
    props.direction === "row" &&
    `flex-direction: row; gap: ${width_size(props.gap ?? 0)};`};
  ${(props) =>
    props.direction === "column" &&
    `flex-direction: column; gap: ${height_size(props.gap ?? 0)};`};
`;

export const AbsoluteWrapper = styled.div<AbsoluteWrapperProps>`
  width: fit-content;
  height: fit-content;

  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  ${(props) =>
    props.direction === "row" &&
    `flex-direction: row; gap: ${width_size(props.gap ?? 0)};`};
  ${(props) =>
    props.direction === "column" &&
    `flex-direction: column; gap: ${height_size(props.gap ?? 0)};`};
  ${(props) => props.top && `top: ${height_size(props.top)};`};
  ${(props) => props.left && `left: ${width_size(props.left)};`};
  ${(props) => props.right && `right: ${width_size(props.right)};`};
  ${(props) => props.bottom && `bottom: ${height_size(props.bottom)};`};
`;
