export const rootState: RootState = {
  search: {
    location: {
      city: '서울시',
      district: '종로구',
    },
    step: new Array(10).fill(false),
    type: {
      redevelop: true,
      reconstruct: true,
    },
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
    type: {
      redevelop: boolean,
      reconstruct: boolean,
    },

  },
  target: {
    id: null | string,
    name: null | string,
  }
}
