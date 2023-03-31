import { useEffect, useState } from "react";
import { Wrapper } from "../../../components/Wrapper";
import "./marker.css";
import axios from "axios";
import Marker from "./Marker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../states/store";
import { updateTarget } from "../../../../states/targetSlice";
import { getConstructions } from "../../utils";
import { districtInfo } from "../../../../utils/constants";
import { updateFilter } from "../../../../states/searchSlice";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const dispatch = useDispatch();
  const target = useSelector((state: RootState) => state.target);
  const search = useSelector((state: RootState) => state.search);
  const [map, setMap] = useState();
  const [cons, setCons] = useState([]);
  const [markerInfos, setMarkerInfos] = useState<HTMLDivElement[]>([]);

  const setConstructions = async () => {
    const { kakao } = window;
    //generate map
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(
        districtInfo[search.location.district].LAT,
        districtInfo[search.location.district].LON
      ),
      level: 6,
    };
    const map = new kakao.maps.Map(container, options);
    setMap(map);
    setCons(await getConstructions(search.location.district));
  };

  useEffect(() => {
    // update construction for first rendering
    setConstructions();
  }, []);

  useEffect(() => {
    // update construction by every location search
    if (search.location.filter) {
      setConstructions();
      dispatch(updateFilter({ value: false }));
    }
  }, [search.location.filter]);

  useEffect(() => {
    // draw map marker for every changes
    cons.forEach((data: any) => {
      //[TODO] type
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
  }, [cons]);

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
