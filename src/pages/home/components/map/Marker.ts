const { kakao } = window;

import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { updateTarget } from "../../../../states/targetSlice";

interface MarkerProps {
  lat: number;
  lng: number;
  name: string;
  id: string;
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


  const markerInfo = MarkerInfo({ name: props.name });
  markerInfo.id = 'marker' + props.id;
  if (hide) markerInfo.classList.add('hide');

  marker.addEventListener('click', () => { // show and hide marker info modal
    dispatch(updateTarget({ id: props.id, name: props.name }))
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
  name: string
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
  infoPrice.innerText = '매매 17억 5,000만 원';

  const infoSubWrapper = document.createElement('div');
  infoSubWrapper.className = 'infoSubWrapper';
  //---

  const infoRowWrapper = document.createElement('div');
  infoRowWrapper.className = 'infoRowWrapper';

  const infoType = document.createElement('div');
  infoType.className = 'infoType';
  infoType.innerText = '재건축';

  const infoSize = document.createElement('div');
  infoSize.className = 'infoDetail';
  infoSize.innerText = '59A/55㎡, 8/12층, 남향';

  //---
  const infoDetail = document.createElement('div');
  infoDetail.className = 'infoDetail';
  infoDetail.innerText = '조합설립인가, 조합원승계가능';

  infoRowWrapper.append(infoType, infoSize);
  infoSubWrapper.append(infoRowWrapper, infoDetail);
  infoWrapper.append(infoPrice, infoSubWrapper);
  markerInfo.append(infoName, infoWrapper);

  return markerInfo;
}