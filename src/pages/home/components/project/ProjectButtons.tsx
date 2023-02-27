import Button from "../../../components/Button";
import { AbsoluteWrapper } from "../../../components/Wrapper";

const ProjectButtons = ({ id }: { id: string }) => {
  const onDetail = () => {
    console.log("detail button clicked", id);
  };
  const onSimulation = () => {
    console.log("simulation button clicked", id);
  };

  return (
    <AbsoluteWrapper direction="column" gap={4} top={20} right={20}>
      <Button
        onClick={onDetail}
        width={80}
        height={30}
        radius={5}
        color="purpleLight"
        textOption={{
          text: "상세보기",
          size: 12,
          color: "black",
          weight: "medium",
        }}
      />
      <Button
        onClick={onSimulation}
        width={80}
        height={30}
        radius={5}
        color="purpleLight"
        textOption={{
          text: "분담금 조회",
          size: 12,
          color: "black",
          weight: "medium",
        }}
      />
    </AbsoluteWrapper>
  );
};
export default ProjectButtons;
