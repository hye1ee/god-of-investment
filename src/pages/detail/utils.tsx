export const getLatLon = (point: string | null) => {
  if (point == null) return { lat: 37.5519, lon: 126.9918 };

  const lat = parseFloat(point.split(" ")[1].split("(")[0]);
  const lon = parseFloat(point.split("(")[1].split(" ")[0]);

  return { lat, lon };
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
    level: 3,
  };
  return new kakao.maps.Map(container, options);
};
