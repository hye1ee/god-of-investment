export const rootState: RootState = {
  user: {
    id: '',
    name: '',
    email: '',
    depart: null,
  },
  detail: {
    target: null,
  },
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
    location: null,
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
  },
  issue: {
    id: null,
    summary: null,

  }
}

export interface RootState {
  user: {
    id: string,
    name: string,
    email: string,
    depart: number | null,
  },
  detail: {
    target: string | null,
  }
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
    location: null | string,
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
  },
  issue: {
    id: null | number,
    summary: null | string,
  }
}
