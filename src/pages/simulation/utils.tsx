import axios from "axios";

export const StepBoxBText = {
  evaluate:
    "감정평가사의 감정평가 방식에 AI 기술을 접목하여 개발한 롯데건설만의 독자적인 AI 기술입니다. 보유 아파트와 유사한 부동산 매물로 필터링된 정보와 부동산 경기 변화 정보를 통해 AI 예측을 진행합니다. 기타 변수들로 인한 오차가 존재할 수 있습니다.",
  predict:
    "재건축 계획을 토대로 현재 시점을 기준으로 준공 후 예상시세를 AI로 예측하는 롯데건설만의 독자적인 AI 기술입니다. 준공 예정 아파트와 유사한 부동산 매물로 필터링된 정보와 부동산 경기 변화 정보를 통해 향후 1년간의 가격변화까지 제공합니다. 기타 변수들로 인한 오차가 존재할 수 있습니다.",
};

export const getLastSimulationDate = async (name: string | null) => {
  let date = null;
  if (name !== null)
    await axios
      .get("http://143.248.90.184:443/construction_search/" + name)
      .then((res) => {
        date = res.data.last_simul_date;
      });
  return date;
};

export const getDongHo = async (id: string, date: string) => {
  //[TODO] should be change to real api not dummy
  const result = {
    dong: [],
    ho: [],
  };
  await axios
    .get("http://143.248.90.184:443/price_simulation/dong_ho")
    .then((res) => {
      result.dong = res.data[0]; // array of dong string
      result.ho = res.data[1]; // array of ho string
    });
  return result;
};

export const getSize = async (id: string) => {
  //[TODO] should be change to real api not dummy
  let result: number[] = [];
  await axios
    .get("http://143.248.90.184:443/sale_information/" + id + "/types")
    .then((res) => {
      result = res.data; // array of size number
    });
  return result;
};
