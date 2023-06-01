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
    level: 1,
  };
  return new kakao.maps.Map(container, options);
};

export const getMarker = ({ lat, lon }: { lat: number; lon: number }) => {
  const position = new kakao.maps.LatLng(lat, lon);
  const overlay = new kakao.maps.CustomOverlay({
    zIndex: 1,
    position: position,
  });

  const marker = document.createElement("div");
  marker.className = "marker";

  const markerBody = document.createElement("div");
  markerBody.className = "markerBody green";
  markerBody.innerText = "대표지번";
  const markerTail = document.createElement("img");
  markerTail.src = "/src/assets/greenTriangle.png";

  marker.append(markerBody, markerTail);
  overlay.setContent(marker);
  return overlay;
};
