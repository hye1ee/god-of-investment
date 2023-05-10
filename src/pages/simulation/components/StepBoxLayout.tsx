import styled from "styled-components";
import { BorderColumn } from "../../components/Border";
import { Wrapper } from "../../components/Wrapper";
import NumberTag from "./NumberTag";
import {
  appColor,
  height_size,
  shadowStyle,
  width_size,
} from "../../../utils/style";
import { FontWeight, MediumText, MixedText } from "../../components/Text";
import { ReactNode } from "react";

interface StepBoxLayoutProps {
  step: number;
  active: boolean;
  onClick: () => void;
  title: {
    text: string[];
    weight: FontWeight;
    size: number;
    color: string[];
  };
  subtitle?: string;
  children: ReactNode;
  short?: boolean;
}

const StepBoxLayout = (props: StepBoxLayoutProps) => {
  return (
    <StepBoxLayoutWrapper>
      <StepBoxLeftWrapper active={props.active} onClick={props.onClick}>
        {props.step > 0 && (
          <NumberTag number={props.step} active={props.active} />
        )}
        <BorderColumn
          width={1}
          color={props.active ? "purpleSoft" : "grayLight"}
        />
      </StepBoxLeftWrapper>
      <Wrapper direction="column" width={934}>
        <MixedText
          text={props.title.text}
          weight={new Array(props.title.text.length).fill(props.title.weight)}
          size={props.title.size}
          color={
            props.active
              ? props.title.color
              : new Array(props.title.text.length).fill("grayLight")
          }
        ></MixedText>
        {props.subtitle && (
          <MediumText color={props.active ? "gray" : "grayLight"} size={12}>
            {props.subtitle}
          </MediumText>
        )}
        <StepBoxContentWrapper short={props.short ?? false}>
          {props.children}
        </StepBoxContentWrapper>
      </Wrapper>
    </StepBoxLayoutWrapper>
  );
};
export default StepBoxLayout;

const StepBoxLayoutWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const StepBoxLeftWrapper = styled.div<{ active: boolean }>`
  width: ${width_size(66)};

  display: flex;
  flex-direction: column;

  align-items: center;
  ${(props) => !props.active && `cursor: pointer;`}
`;

const StepBoxContentWrapper = styled.div<{ short: boolean }>`
  width: ${(props) => width_size(props.short ? 455 : 900)};
  height: fit-content;

  box-sizing: border-box;
  padding: ${height_size(20)} ${width_size(20)};
  margin-top: ${height_size(15)};
  margin-bottom: ${height_size(30)};

  background-color: ${appColor.white};
  border-radius: ${height_size(10)};

  display: flex;
  flex-direction: column;
  gap: ${height_size(15)};

  ${shadowStyle}
`;
