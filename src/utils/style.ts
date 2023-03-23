export const font_size = (px: number) => `${(px * 100 / 1080).toFixed(3)}vh`;
export const height_size = (px: number) => `${(px * 100 / 1080).toFixed(3)}vh`;
export const width_size = (px: number) => `${(px * 100 / 1920).toFixed(3)}vw`;

type AppColor = {
  [key: string]: string,
}

export const appColor: AppColor = {
  'white': '#FFFFFF',
  'whiteSmoky': '#FBFBFB',
  'black': '#333333',
  'purple': '#6449F3',
  'purpleSoft': '#A497EC',
  'purpleLight': '#EEEBFB',
  'purpleBright': '#FAF9FF',
  'gray': '#888888',
  'grayLight': '#E2E0E0',
  'blue': '#4F75FF',
  'blueLight': '#E2E9FF',
  'blueBright': '#F4F7F9',
  'redLight': '#FFF1ED',
};

export const transitionStyle = 'transition: all 0.3s;';