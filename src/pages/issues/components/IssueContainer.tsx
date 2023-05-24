import styled from "styled-components";
import { appColor, height_size, width_size } from "../../../utils/style";
import { MediumText, RegularText } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";

interface IssueContainerProps {
  title: string;
  date: string;
  src: string;
  img: string;
  url: string;
}

export const IssueContainer = (props: IssueContainerProps) => {
  return (
    <IssueContainerWrapper onClick={() => window.open(props.url)}>
      <Wrapper direction="column" width="full" gap={3}>
        <IssueInfo date={props.date} src={props.src} />
        <MediumText size={15}>{props.title}</MediumText>
      </Wrapper>
    </IssueContainerWrapper>
  );
};

const IssueContainerWrapper = styled.div`
  width: ${width_size(322)};
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${height_size(7)};

  box-sizing: border-box;
  padding: ${height_size(15)} ${width_size(15)};

  background-color: ${appColor.white};
  border: ${width_size(1)} solid ${appColor.grayLight};
  border-radius: ${width_size(10)};

  cursor: pointer;
`;

const IssueImg = styled.img`
  width: ${width_size(220)};
  min-height: ${height_size(180)};
  object-fit: cover;

  border-radius: ${width_size(6)};
`;

const IssueInfo = ({ date, src }: { date: string; src: string }) => {
  return (
    <IssueInfoWrapper>
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
