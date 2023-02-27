export const rootState = {
  search: {
    location: {
      city: '서울시',
      district: '종로구',
    },
    step: new Array(10).fill(false),
    detail: {
      active: false,
      type: {
        redevelop: true,
        reconstruct: true,
      },
      priceAverage: {
        standard: "매물 가격 기준",
        min: Number.NEGATIVE_INFINITY,
        max: Number.POSITIVE_INFINITY,
      },
      priceEstimate: {
        standard: "매물 가격 기준",
        min: Number.NEGATIVE_INFINITY,
        max: Number.POSITIVE_INFINITY,
      },
    }
  }
}

