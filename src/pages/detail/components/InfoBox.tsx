import styled from "styled-components";
import BoxLayout from "./BoxLayout";
import { appColor, width_size } from "../../../utils/style";
import { Wrapper } from "../../components/Wrapper";
import { TextBox } from "../../components/Text";
import { BorderColumn, BorderRow } from "../../components/Border";

const InfoBox = () => {
  return (
    <BoxLayout width={800} color="purpleBright" title="사업 기본 개요">
      <InfoTable>
        <InfoRow
          keys={["정비구역 명칭", "사업유형"]}
          values={["논현청학아파트재건축정비사업", "일반"]}
        />
        <BorderRow width={1} color="grayLight" />
        <InfoRow
          keys={["사업구분", "추진위수행 여부"]}
          values={["재건축", "미수행"]}
        />
        <BorderRow width={1} color="grayLight" />
        <InfoRow
          keys={["정비구역 위치", "공공지원 대상여부"]}
          values={["강남구논현동 62-3 일대", "대상"]}
        />
        <BorderRow width={1} color="grayLight" />
        <InfoRow
          keys={["정비구역 면적(㎡)", "조합원 수"]}
          values={["-", "70명"]}
        />
        <BorderRow width={1} color="grayLight" />
        <InfoRow
          keys={["토지등 소유자 수", "세입자 수"]}
          values={["70명", "0명"]}
        />
      </InfoTable>
    </BoxLayout>
  );
};
export default InfoBox;

const InfoTable = styled.div`
  width: ${width_size(760)};
  height: fit-content;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  border: ${width_size(1)} solid ${appColor.grayLight};
`;

const InfoRow = ({ keys, values }: { keys: string[]; values: string[] }) => {
  return (
    <Wrapper direction="row" width={758} height={40}>
      <TextBox
        textOption={{
          text: keys[0],
          weight: "regular",
          size: 13,
          color: "black",
        }}
        width={130}
        height={40}
        color="pupleLight"
        center={true}
      />
      <BorderColumn width={1} color="grayLight" />
      <TextBox
        textOption={{
          text: values[0],
          weight: "regular",
          size: 13,
          color: "black",
        }}
        width={275}
        height={40}
        color="white"
      />
      <BorderColumn width={1} color="grayLight" />
      <TextBox
        textOption={{
          text: keys[1],
          weight: "regular",
          size: 13,
          color: "black",
        }}
        width={130}
        height={40}
        color="pupleLight"
        center={true}
      />
      <BorderColumn width={1} color="grayLight" />
      <TextBox
        textOption={{
          text: values[1],
          weight: "regular",
          size: 13,
          color: "black",
        }}
        width={220}
        height={40}
        color="white"
      />
    </Wrapper>
  );
};
