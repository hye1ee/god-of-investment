const { kakao } = window;

import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { updateTarget } from "../../../../states/targetSlice";

interface MarkerProps {
  lat: number;
  lng: number;
  id: string;
  info: MarkerInfoProps;
}

const Marker = (props: MarkerProps, hide: boolean, dispatch: Dispatch<AnyAction>) => {
  const position = new kakao.maps.LatLng(props.lat, props.lng);
  const overlay = new kakao.maps.CustomOverlay({
    zIndex: 1,
    position: position,
    disableAutoPan: false,
  });

  // generate marker
  const markerWrapper = document.createElement("div");
  markerWrapper.className = 'markerWrapper';

  const marker = document.createElement("div");
  marker.className = "marker";

  const markerBody = document.createElement("div");
  markerBody.className = "markerBody";
  markerBody.innerText = "재건축";

  const markerTail = document.createElement("img");
  markerTail.src = "/src/assets/blueTriangle.png";


  const markerInfo = MarkerInfo(props.info);
  markerInfo.id = 'marker' + props.id;
  if (hide) markerInfo.classList.add('hide');

  marker.addEventListener('click', () => { // show and hide marker info modal
    dispatch(updateTarget({ id: props.id, name: props.info.name }))
  })
  marker.append(markerBody, markerTail);
  markerWrapper.append(marker, markerInfo);
  overlay.setContent(markerWrapper);

  return {
    overlay,
    markerInfo,
  };
};
export default Marker;

interface MarkerInfoProps {
  name: string;
  gu: string;
  dong: string;
  jibun: string;
  type: string;
  step: string;
}

const MarkerInfo = (props: MarkerInfoProps) => {
  // generate markerInfo
  const markerInfo = document.createElement('div');
  markerInfo.className = 'markerInfo';

  const infoName = document.createElement('div');
  infoName.className = 'infoName';
  infoName.innerText = props.name;

  const infoWrapper = document.createElement('div');
  infoWrapper.className = 'infoWrapper';
  //---
  const infoPrice = document.createElement('div');
  infoPrice.className = 'infoPrice';
  infoPrice.innerText = ['서울시', props.gu, props.dong, props.jibun].join(' ');

  const infoSubWrapper = document.createElement('div');
  infoSubWrapper.className = 'infoSubWrapper';
  //---

  const infoRowWrapper = document.createElement('div');
  infoRowWrapper.className = 'infoRowWrapper';

  const infoType = document.createElement('div');
  infoType.className = 'infoType';
  infoType.innerText = props.type;

  //---
  const infoDetail = document.createElement('div');
  infoDetail.className = 'infoDetail';
  infoDetail.innerText = props.step;

  infoRowWrapper.append(infoType);
  infoSubWrapper.append(infoRowWrapper, infoDetail);
  infoWrapper.append(infoPrice, infoSubWrapper);
  markerInfo.append(infoName, infoWrapper);

  return markerInfo;
}