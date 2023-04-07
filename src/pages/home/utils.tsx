import { useSelector } from "react-redux";
import { RootState } from "../../states/store";
import axios from "axios";
import { districtInfo } from "../../utils/constants";

declare global {
  interface Window {
    kakao: any;
  }
}

export const typeNames = {
  redevelop: { display: "재개발 사업", name: "재개발" },
  reconstruct: { display: "재건축 사업", name: "재건축" },
};

export const getConstructions = async (districtName: string) => {
  let result: any;
  await axios.get("http://143.248.90.184:443/constructions").then((res) => {
    result = res.data.filter((data: any) => data.GU_NM === districtName);
  });
  return result.sort(
    (a: any, b: any) => b.reprsnt_coord_lng - a.reprsnt_coord_lng
  );
};

interface getKakaoMapProps {
  id: string;
  lat: number;
  lon: number;
}
export const getKakaoMap = (props: getKakaoMapProps) => {
  const { kakao } = window;
  const container = document.getElementById(props.id);
  const options = {
    center: new kakao.maps.LatLng(props.lat, props.lon),
    level: 6,
  };
  return new kakao.maps.Map(container, options);
};

export const getLatLon = (districtName: string) => {
  return {
    lat: districtInfo[districtName].LAT,
    lon: districtInfo[districtName].LON,
  };
};
