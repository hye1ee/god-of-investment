export type Step = "A" | "B" | "C";
export type SetStep = React.Dispatch<React.SetStateAction<Step>>;

export const StepBoxBText = {
  evaluate:
    "감정평가사의 감정평가 방식에 AI 기술을 접목하여 개발한 롯데건설만의 독자적인 AI 기술입니다. 보유 아파트와 유사한 부동산 매물로 필터링된 정보와 부동산 경기 변화 정보를 통해 AI 예측을 진행합니다. 기타 변수들로 인한 오차가 존재할 수 있습니다.",
  predict:
    "재건축 계획을 토대로 현재 시점을 기준으로 준공 후 예상시세를 AI로 예측하는 롯데건설만의 독자적인 AI 기술입니다. 준공 예정 아파트와 유사한 부동산 매물로 필터링된 정보와 부동산 경기 변화 정보를 통해 향후 1년간의 가격변화까지 제공합니다. 기타 변수들로 인한 오차가 존재할 수 있습니다.",
};
