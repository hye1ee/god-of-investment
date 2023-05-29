import styled from "styled-components";
import { appColor, height_size, width_size } from "../../../utils/style";
import { MediumText, RegularText } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";

interface IssueContainerProps {
  title: string;
  date: string;
  src: string;
  url: string;
  active: boolean;
  onClick: () => void;
}

export const IssueContainer = (props: IssueContainerProps) => {
  return (
    <IssueContainerWrapper {...props}>
      <Wrapper direction="column" width="full" gap={3}>
        <IssueInfo
          date={props.date}
          src={props.src}
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
  onClick,
}: {
  date: string;
  src: string;
  onClick: () => void;
}) => {
  return (
    <IssueInfoWrapper onClick={onClick}>
      <RegularText color="gray" size={12}>
        {date}
      </RegularText>
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
