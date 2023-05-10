export const rootState: RootState = {
  search: {
    location: {
      city: '서울시',
      district: '종로구',
      filter: false,
    },
    step: new Array(14).fill(true),
    type: {
      redevelop: true,
      reconstruct: true,
    },
  },
  target: {
    id: null,
    name: null,
  },
  simulation: {
    step: 'A',
    dong: null,
    ho: null,
    size: null,
    price: {
      build: null,
      contribute: null,
    }
  }
}

export interface RootState {
  search: {
    location: {
      city: string,
      district: string,
      filter: boolean,
    },
    step: boolean[],
    type: {
      redevelop: boolean,
      reconstruct: boolean,
    },

  },
  target: {
    id: null | string,
    name: null | string,
  },
  simulation: {
    step: string,
    dong: null | string,
    ho: null | string,
    size: null | number,
    price: {
      build: null | number,
      contribute: null | number,
    }
  }
}
