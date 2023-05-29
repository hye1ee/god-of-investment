import styled from "styled-components";
import { appColor, height_size, width_size } from "../../../utils/style";
import { MediumText, RegularText } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import Tag from "../../components/Tag";
import { scoreColor } from "../utils";

interface IssueContainerProps {
  title: string;
  date: string;
  src: string;
  url: string;
  active: boolean;
  score: string;
  onClick: () => void;
}

export const IssueContainer = (props: IssueContainerProps) => {
  return (
    <IssueContainerWrapper {...props}>
      <Wrapper direction="column" width="full" gap={3}>
        <IssueInfo
          date={props.date}
          src={props.src}
          score={props.score}
          onClick={() => window.open(props.url)}
        />
        <MediumText size={15}>{props.title}</MediumText>
      </Wrapper>
    </IssueContainerWrapper>
  );
};

const IssueContainerWrapper = styled.div<IssueContainerProps>`
  width: ${width_size(322)};
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${height_size(7)};

  box-sizing: border-box;
  padding: ${height_size(15)} ${width_size(15)};

  background-color: ${(props) =>
    props.active ? appColor.blueBright : appColor.white};
  border: ${width_size(1)} solid ${appColor.grayLight};
  border-radius: ${width_size(10)};

  cursor: pointer;
`;

const IssueInfo = ({
  date,
  src,
  score,
  onClick,
}: {
  date: string;
  src: string;
  score: string;
  onClick: () => void;
}) => {
  return (
    <IssueInfoWrapper onClick={onClick}>
      <Wrapper direction="row" gap={5}>
        <Tag
          textOption={{
            text: "----",
            weight: "medium",
            color: scoreColor(score),
            size: 11,
          }}
          radius={10}
          color={scoreColor(score)}
          paddingOption={{ width: 0, height: 0 }}
        />
        <RegularText color="gray" size={12}>
          {date}
        </RegularText>
      </Wrapper>

      <RegularText color="gray" size={12}>
        {src}
      </RegularText>
    </IssueInfoWrapper>
  );
};
const IssueInfoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
