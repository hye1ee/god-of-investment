import styled from "styled-components";
import { appColor, height_size, width_size } from "../../../../utils/style";

import { ProjectInfo } from "./type";
import {
  BoldText,
  MediumText,
  MixedText,
  RegularText,
} from "../../../components/Text";
import { useState } from "react";
import ProjectButtons from "./ProjectButtons";

interface ProjectProps {
  type: "list" | "pop";
  info: ProjectInfo;
}

const ProjectItem = (props: ProjectProps) => {
  const [hover, setHover] = useState(false);

  return (
    <ProjectItemWrapper
      type={props.type}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <BoldText color="black">{props.info.title}</BoldText>
      <MediumText color="purple">{props.info.price}</MediumText>
      <DetailInfo {...props.info} />
      {hover && <ProjectButtons id={props.info.id} />}
    </ProjectItemWrapper>
  );
};

export default ProjectItem;

const ProjectItemWrapper = styled.div<{ type: "list" | "pop" }>`
  width: ${width_size(300)};
  height: ${height_size(158)};

  padding: ${height_size(25)} ${width_size(30)};
  position: relative;

  box-sizing: border-box;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background-color: ${appColor.white};
  ${(props) =>
    props.type === "list" && `border-bottom: 1px solid ${appColor.grayLight};`}
  ${(props) =>
    props.type === "pop" &&
    `border: 1px solid ${appColor.grayLight}; border-radius: 13px;`}
`;

const DetailInfo = (props: ProjectInfo) => {
  return (
    <DetailInfoWrapper>
      <MixedText
        text={[props.type, " · ", props.detail]}
        weight={["bold", "bold", "regular"]}
        size={12}
        color="black"
        gap={5}
      />
      <RegularText size={12} color="black">
        {props.state}
      </RegularText>
    </DetailInfoWrapper>
  );
};

const DetailInfoWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: ${width_size(4)};
`;
