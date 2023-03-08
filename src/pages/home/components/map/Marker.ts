const { kakao } = window;


const Marker = () => {
  const position = new kakao.maps.LatLng(33.450701, 126.570667);
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


  const markerInfo = MarkerInfo();

  marker.addEventListener('click', () => { // show and hide marker info modal
    if (markerInfo.classList.contains('hide')) {

      markerInfo.classList.remove('hide');
    }
    else {
      markerInfo.classList.add('hide');
    }
  })
  marker.append(markerBody, markerTail);
  markerWrapper.append(marker, markerInfo);
  overlay.setContent(markerWrapper);

  return overlay;
};
export default Marker;


const MarkerInfo = () => {
  // generate markerInfo
  const markerInfo = document.createElement('div');
  markerInfo.className = 'markerInfo';

  const infoName = document.createElement('div');
  infoName.className = 'infoName';
  infoName.innerText = '청학 A동';

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