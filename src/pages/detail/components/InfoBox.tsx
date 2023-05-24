import styled from "styled-components";
import BoxLayout from "./BoxLayout";
import { appColor, width_size } from "../../../utils/style";
import { Wrapper } from "../../components/Wrapper";
import { TextBox } from "../../components/Text";
import { BorderColumn, BorderRow } from "../../components/Border";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/store";
import { getConstructionInfo } from "../../../apis/detail";

const InfoBox = () => {
  const [info, setInfo] = useState<any>(null);
  const consId = useSelector((state: RootState) => state.target.id);

  const asyncWrapper = async () => {
    if (consId == null) return;
    setInfo(await getConstructionInfo(consId));
  };
  useEffect(() => {
    asyncWrapper();
  }, []);

  return (
    <BoxLayout width={800} color="purpleBright" title="사업 기본 개요">
      {info && (
        <InfoTable>
          <InfoRow
            keys={["정비구역 명칭", "운영구분"]}
            values={[info.ZONE_NM ?? info.CAFE_NM, info.STEP_SE_NM]}
          />
          <BorderRow width={1} color="grayLight" />
          <InfoRow
            keys={["사업구분", "진행단계"]}
            values={[info.BTYP_NM, info.PROGRS_STTUS]}
          />
          <BorderRow width={1} color="grayLight" />
          <InfoRow
            keys={["정비구역 위치", "진행상태"]}
            values={[info.ZONE_ADRES, info.CAFE_STTUS]}
          />
          <BorderRow width={1} color="grayLight" />
          <InfoRow
            keys={["정비구역 면적(㎡)", "건축연면적(㎡)"]}
            values={[info.ZONE_AR, info.TOTAR]}
          />
        </InfoTable>
      )}
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
