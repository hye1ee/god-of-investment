# God of Investment

본 시스템은 AI 와 빅데이터 기술을 기반으로 재건축/재개발 의사결정을 지원하는 시스템인 ABRED의 웹 서비스 제공 영역입니다.

본 시스템은 **React**를 이용하여 개발되었으며, 빌드 및 번들링 툴로 **Vite**를 사용하고 있습니다. 시스템 내에서 Kakao 지도 API (https://apis.map.kakao.com/web/guide/)를 사용하고 있기에, API key 발급 후 시스템 구동이 가능합니다. 발급 받은 key는 아래와 같이 VITE_KAKAOMAP_KEY 이름으로 등록하여 사용이 가능합니다.

```
#.env example
VITE_KAKAOMAP_KEY = 발급받은 키
```

Root 위치에서 아래의 커맨드를 순차적으로 입력하여 로컬 서버 구동이 가능합니다.

```
npm install // 최초 구동시에만 입력, node 설치 필요
npm run dev // 서버 구동 스크립트
```