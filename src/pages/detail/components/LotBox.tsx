import styled from "styled-components";
import BoxLayout from "./BoxLayout";
import { Wrapper } from "../../components/Wrapper";
import { height_size, width_size } from "../../../utils/style";
import Button from "../../components/Button";
import IconPair from "./IconPair";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/store";
import { getConstructionInfo } from "../../../apis/detail";
import { getLatLon, getKakaoMap } from "../utils";

const LotBox = () => {
  const [info, setInfo] = useState<any>(null);
  const consId = useSelector((state: RootState) => state.target.id);
  const [map, setMap] = useState<any>(null); // kakaomap obj

  const asyncWrapper = async () => {
    if (consId == null) return;
    setInfo(await getConstructionInfo(consId));
  };
  useEffect(() => {
    asyncWrapper();
  }, []);

  useEffect(() => {
    setMap(
      getKakaoMap({
        id: "lotmap",
        ...getLatLon(info?.reprsnt_coord),
      })
    );
  }, [info]);

  return (
    <BoxLayout width={800} color="white" title="필지 탐색">
      <Wrapper direction="row" id="lotmap" width="full" height={300} />

      {info && (
        <Wrapper direction="row" width={"full"} wrap={true} gap={15}>
          <IconPair title="지목" value="대" />
          <IconPair title="이용상황" value="상업용" />
          <IconPair title="용도지역" value="3종일주" />
          <IconPair title="면적(㎡)" value="7342" />
          <IconPair title="도로" value="광대한면" />
          <IconPair title="형상" value="역삼각형" />
          <IconPair title="지세" value="평지" />
          <IconPair title="공시지가(㎡)" value="24,750,000원" />
          <IconPair
            title="토지이용계획"
            value="가로구역벽 최고높이 제한지역(포함), 가로구역별 최고높이(저촉), 도로(접함), 대공방어협조구역(포함), 상대보호구역(포함), 도시지역(포함), 제3종일반주거지역(저촉), 일반상업지역(저초), 과밀억제권역(포함), 건축선(저촉)"
          />
        </Wrapper>
      )}
    </BoxLayout>
  );
};
export default LotBox;

const LotImg = styled.img`
  width: ${width_size(210)};
  height: ${height_size(210)};

  object-fit: cover;
`;

const LotButtons = () => {
  const testUrl1 = "https://www.kaist.ac.kr";
  const testUrl2 = "https://klms.kaist.ac.kr/login/ssologin.php";

  return (
    <Wrapper direction="row" gap={10}>
      <Button
        width={172}
        height={30}
        radius={10}
        color="purpleLight"
        textOption={{
          text: "토지이용계획 자세히보기",
          weight: "regular",
          size: 11,
          color: "black",
        }}
        onClick={() => window.open(testUrl1)}
      />
      <Button
        width={172}
        height={30}
        radius={10}
        color="purpleLight"
        textOption={{
          text: "도시계획도면 자세히보기",
          weight: "regular",
          size: 11,
          color: "black",
        }}
        onClick={() => window.open(testUrl2)}
      />
    </Wrapper>
  );
};
