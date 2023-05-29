import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../states/store";
import { updateFilter } from "../../../../states/searchSlice";

import { Wrapper } from "../../../components/Wrapper";
import {
  getConstructions,
  getKakaoMap,
  getLatLon,
  isConFilter,
} from "../../utils";
import Marker from "./Marker";
import "./marker.css";
import SearchBar from "../search/SearchBar";
import SearchModal from "../search/SearchModal";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const target = useSelector((state: RootState) => state.target);
  const search = useSelector((state: RootState) => state.search);

  const [map, setMap] = useState<any>(null); // kakaomap obj
  const [cons, setCons] = useState<any>([]);
  const [markers, setMarkers] = useState<ReturnType<typeof Marker>[]>([]);

  const [modal, setModal] = useState<number | null>(null);

  const setConstructions = async () => {
    // init map
    if (map != null) {
      const { lat, lon } = getLatLon(search.location.district);
      map.setCenter(new kakao.maps.LatLng(lat, lon));
      const newCons = await getConstructions();
      setCons(newCons);
    }
  };

  const moveCenter = () => {
    if (map != null) {
      const { lat, lon } = getLatLon(search.location.district);
      map.setCenter(new kakao.maps.LatLng(lat, lon));
    }
  };

  const filterConstructions = () => {
    // const and markers have same index
    const index = new Set();
    const num = new Set();
    cons.forEach((con: any, idx: number) => {
      if (isConFilter({ con, step: search.step, type: search.type })) {
        index.add(idx);
        if (con.GU_NM == search.location.district) num.add(idx);
      }
    });

    markers.forEach((marker, idx) => {
      if (index.has(idx)) marker.overlay.setMap(map);
      else marker.overlay.setMap(null);
    });
    setModal(num.size);
  };

  // first rendering -> map changed -> cons changed -> markers changed
  useEffect(() => {
    setMap(
      getKakaoMap({
        id: "map",
        ...getLatLon(search.location.district),
      })
    );
  }, []);

  useEffect(() => {
    setConstructions();
  }, [map]);

  useEffect(() => {
    filterConstructions();
  }, [cons]);

  useEffect(() => {
    filterConstructions();
  }, [cons]);

  useEffect(() => {
    // update construction by every location search
    if (search.location.filter) {
      if (cons.length > 0 && cons[0].GU_NM === search.location.district) {
        filterConstructions();
      } else {
        // if cons are empty or location changed
        filterConstructions();
        moveCenter();
      }
      dispatch(updateFilter({ value: false }));
    }
  }, [search.location.filter]);

  useEffect(() => {
    if (modal !== null) {
      setTimeout(() => {
        setModal(null);
      }, 1500);
    }
  }, [modal]);

  useEffect(() => {
    // draw map marker for every changes
    // [1] cut reference with map for old markers
    markers.forEach((marker: ReturnType<typeof Marker>) =>
      marker.overlay.setMap(null)
    );

    // [2] draw new markers
    setMarkers(
      cons.map((data: any) => {
        const {
          ZONE_NM,
          CAFE_NM,
          GU_NM: gu,
          BJDON_NM: dong,
          REPRSNT_JIBUN: jibun,
          BTYP_NM: type,
          PROGRS_STTUS: step,
          reprsnt_coord: coord,
          id,
        } = data;

        const lat = parseFloat(coord.split(" ")[1].split("(")[0]);
        const lng = parseFloat(coord.split("(")[1].split(" ")[0]);

        const marker = Marker(
          {
            lat,
            lng,
            info: {
              name: ZONE_NM ?? CAFE_NM,
              gu,
              dong,
              jibun,
              type,
              step,
            },
            id,
          },
          target.id !== id,
          dispatch,
          navigate
        );
        marker.overlay.setMap(map);
        return marker;
      })
    );
  }, [cons]);

  useEffect(() => {
    // if target changes show only target marker info
    markers.forEach((marker) => {
      if ("marker" + target.id === marker.markerInfo.id) {
        marker.markerInfo.classList.remove("hide");
      } else marker.markerInfo.classList.add("hide");
    });
  }, [target]);

  return (
    <Wrapper direction="row" height={"full"} width={1540}>
      <Wrapper direction="row" id="map" height={"full"} width={1540} />
      <SearchBar />
      {modal != null && <SearchModal num={modal} />}
    </Wrapper>
  );
};
export default Map;
