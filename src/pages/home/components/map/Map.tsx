import { useEffect } from "react";
import { Wrapper } from "../../../components/Wrapper";
import "./marker.css";
import axios from "axios";
import Marker from "./Marker";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  useEffect(() => {
    axios.get("http://143.248.90.184:443/constructions").then((res) => {
      console.log(res, res.data);
    });

    const { kakao } = window;
    //generate map
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);

    const overlay = Marker();
    overlay.setMap(map);
  }, []);

  return (
    <Wrapper direction="row" id="map" height={"full"} width={1540}></Wrapper>
  );
};
export default Map;
