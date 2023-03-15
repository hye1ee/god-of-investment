import { useEffect, useState } from "react";
import { Wrapper } from "../../../components/Wrapper";
import "./marker.css";
import axios from "axios";
import Marker from "./Marker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../states/store";
import { updateTarget } from "../../../../states/targetSlice";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const dispatch = useDispatch();
  const target = useSelector((state: RootState) => state.target);
  const [markerInfos, setMarkerInfos] = useState<HTMLDivElement[]>([]);

  useEffect(() => {
    axios.get("http://143.248.90.184:443/constructions").then((res) => {
      console.log(res, res.data);
    });

    const { kakao } = window;
    //generate map
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(36.37385958703074, 127.35933031057667),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);

    const marker1 = Marker(
      {
        lat: 36.3739,
        lng: 127.3593,
        name: "카이마루",
        id: "test1",
      },
      target.id !== "test1",
      dispatch
    );
    const marker2 = Marker(
      {
        lat: 36.3724,
        lng: 127.3614,
        name: "스포츠컴플렉스",
        id: "test2",
      },
      target.id !== "test2",
      dispatch
    );
    marker1.overlay.setMap(map);
    marker2.overlay.setMap(map);

    const newmarkerInfos = [marker1.markerInfo, marker2.markerInfo];
    setMarkerInfos(newmarkerInfos);
  }, []);

  useEffect(() => {
    console.log("target updated");
    // if target changes show only target marker info
    markerInfos.forEach((markerInfo) => {
      if ("marker" + target.id === markerInfo.id) {
        markerInfo.classList.remove("hide");
      } else markerInfo.classList.add("hide");
    });
  }, [target]);

  return (
    <Wrapper direction="row" id="map" height={"full"} width={1540}></Wrapper>
  );
};
export default Map;
