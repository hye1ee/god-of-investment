import styled from "styled-components";

import { appColor, width_size } from "../../../../utils/style";
import ProjectItem from "./ProjectItem";

import { ProjectInfo } from "./type";

const testInfo: ProjectInfo = {
  id: "abcdefg-12345",
  title: "청학 A동",
  price: "매매 17억 5,000만 원",
  type: "재건축",
  detail: "59A/55㎡, 8/12층, 남향",
  state: "조합설립인가, 조합원승계가능",
};

const ProjectList = () => {
  return (
    <ProjectListWrapper>
      <ProjectItem type="list" info={testInfo} />
      <ProjectItem type="list" info={testInfo} />
      <ProjectItem type="list" info={testInfo} />
      <ProjectItem type="list" info={testInfo} />
      <ProjectItem type="list" info={testInfo} />
      <ProjectItem type="list" info={testInfo} />
      <ProjectItem type="list" info={testInfo} />
      <ProjectItem type="list" info={testInfo} />
      <ProjectItem type="list" info={testInfo} />
    </ProjectListWrapper>
  );
};

export default ProjectList;

const ProjectListWrapper = styled.div`
  width: ${width_size(300)};
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${appColor.white};

  overflow-y: scroll;
`;
