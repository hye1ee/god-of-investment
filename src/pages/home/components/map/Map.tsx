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
    const { kakao } = window;
    //generate map
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.529, 127),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);

    axios.get("http://143.248.90.184:443/constructions").then((res) => {
      res.data.forEach((data: any) => {
        //[TODO] type
        console.log(data);
        const {
          ZONE_NM: name,
          reprsnt_coord_lat: lat,
          reprsnt_coord_lng: lng,
          id,
        } = data;

        const marker = Marker(
          {
            lat,
            lng,
            name,
            id,
          },
          target.id !== id,
          dispatch
        );
        marker.overlay.setMap(map);
        setMarkerInfos((prevMarkerInfos) => [
          ...prevMarkerInfos,
          marker.markerInfo,
        ]);
      });
    });
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
