const { kakao } = window;

import styled from "styled-components";
import BoxLayout from "./BoxLayout";
import { Wrapper } from "../../components/Wrapper";
import { height_size, width_size } from "../../../utils/style";
import Button from "../../components/Button";
import IconPair from "./IconPair";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/store";
import { getConstructionInfo, getConstructionLots } from "../../../apis/detail";
import { getLatLon, getKakaoMap, getMarker } from "../utils";

const LotBox = () => {
  const [info, setInfo] = useState<any>(null);
  const [lots, setLots] = useState<any>(null);
  const [polys, setPolys] = useState<any>(null);
  const [targetPoly, setTargetPoly] = useState<(string | null)[]>([null, null]); // pnu
  const consId = useSelector((state: RootState) => state.target.id);
  const [map, setMap] = useState<any>(null); // kakaomap obj

  const asyncWrapper = async () => {
    if (consId == null) return;
    setInfo(await getConstructionInfo(consId));
    setLots(await getConstructionLots(consId));
  };
  useEffect(() => {
    asyncWrapper();
  }, []);

  useEffect(() => {
    // draw map
    setMap(
      getKakaoMap({
        id: "lotmap",
        ...getLatLon(info?.reprsnt_coord),
      })
    );
  }, [info]);

  useEffect(() => {
    // draw pin
    getMarker(getLatLon(info?.reprsnt_coord)).setMap(map);
  }, [map]);

  useEffect(() => {
    if (targetPoly[0] !== null)
      polys[getPolyIndex(targetPoly[0])].setOptions({
        fillColor: "#A2FF99", // 채우기 색깔입니다
        fillOpacity: 0.3, // 채우기 불투명도 입니다
      });
    if (targetPoly[1] !== null)
      polys[getPolyIndex(targetPoly[1])].setOptions({
        fillColor: "#A2FF99", // 채우기 색깔입니다
        fillOpacity: 0.8, // 채우기 불투명도 입니다
      });
    console.log(targetPoly[1] && lots[getPolyIndex(targetPoly[1])]);
  }, [targetPoly]);

  const getPolyIndex = (pnu: string): number => {
    let index = 0;
    lots.forEach((lot: any, idx: number) => {
      if (lot.pnu == pnu) {
        index = idx;
      }
    });
    return index;
  };

  useEffect(() => {
    if (lots == null || polys !== null) return;

    const newPolys: any = [];
    lots.forEach((lot: any) => {
      const polyPath = lot.polygon
        .split("(")
        .pop()
        .split(")")[0]
        .split(",")
        .map(
          (coord: string) =>
            new kakao.maps.LatLng(
              parseFloat(coord.split(" ")[1]),
              parseFloat(coord.split(" ")[0])
            )
        );
      const polygon = new kakao.maps.Polygon({
        path: polyPath, // 그려질 다각형의 좌표 배열입니다
        strokeWeight: 2, // 선의 두께입니다
        strokeColor: "#39DE2A", // 선의 색깔입니다
        strokeOpacity: 0.5, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일입니다
        fillColor: "#A2FF99", // 채우기 색깔입니다
        fillOpacity: 0.3, // 채우기 불투명도 입니다
      });
      polygon.setMap(map);
      newPolys.push(polygon);

      kakao.maps.event.addListener(polygon, "mousedown", function () {
        setTargetPoly((prevTarget) => {
          return [prevTarget[1], lot.pnu];
        });
      });
    });
    setPolys(newPolys);
  }, [lots]);

  return (
    <BoxLayout width={800} color="white" title="필지 탐색">
      <Wrapper direction="row" id="lotmap" width="full" height={300} />

      {targetPoly[1] !== null && (
        <Wrapper direction="row" width={"full"} wrap={true} gap={15}>
          <IconPair
            title="지목"
            value={lots[getPolyIndex(targetPoly[1])].lndcgrCodeNm}
          />
          <IconPair
            title="이용상황"
            value={lots[getPolyIndex(targetPoly[1])].ladUseSittnNm}
          />
          <IconPair
            title="용도지역"
            value={lots[getPolyIndex(targetPoly[1])].prposArea2Nm}
          />
          <IconPair
            title="면적(㎡)"
            value={lots[getPolyIndex(targetPoly[1])].lndpclAr}
          />
          <IconPair
            title="도로"
            value={lots[getPolyIndex(targetPoly[1])].roadSideCodeNm}
          />
          <IconPair
            title="형상"
            value={lots[getPolyIndex(targetPoly[1])].tpgrphFrmCodeNm}
          />
          <IconPair
            title="지세"
            value={lots[getPolyIndex(targetPoly[1])].tpgrphHgCodeNm}
          />
          <IconPair
            title="공시지가(원/㎡)"
            value={parseFloat(
              lots[getPolyIndex(targetPoly[1])].pblntfPclnd
            ).toLocaleString()}
          />
          <IconPair
            title="토지이용계획"
            value={[
              lots[getPolyIndex(targetPoly[1])].prposArea1Nm,
              lots[getPolyIndex(targetPoly[1])].prposArea2Nm,
            ].join(" / ")}
          />
          <LotButtons pnu={targetPoly[1]} />
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

const LotButtons = ({ pnu }: { pnu: string }) => {
  const testUrl1 = `http://www.eum.go.kr/web/ar/lu/luLandDet.jsp?pnu=${pnu}&mode=search&[…]bn=umd&selSido=&selSgg=&selUmd=&selRi=&landGbn=187&bobn=&bubn=`;
  const testUrl2 = `http://www.eum.go.kr/web/cp/cv/cvUpisDet.jsp?pnu=${pnu}&mode=search&i[…]=script&selGbn=umd&selSido=&selSgg=&selUmd=&selRi=&landGbn=187`;

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
