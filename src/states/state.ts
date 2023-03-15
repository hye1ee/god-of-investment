export const rootState: RootState = {
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
  },
  target: {
    id: null,
    name: null,
  }
}

export interface RootState {
  search: {
    location: {
      city: string,
      district: string,
    },
    step: boolean[],
    detail: {
      active: boolean,
      type: {
        redevelop: boolean,
        reconstruct: boolean,
      },
      priceAverage: {
        standard: string,
        min: number,
        max: number,
      },
      priceEstimate: {
        standard: string,
        min: number,
        max: number,
      },
    }
  },
  target: {
    id: null | string,
    name: null | string,
  }
}
