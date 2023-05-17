import axios from "axios";
import { host } from ".";

//[TODO] should be change to real api not dummy

// StepBoxA
export const getDongHo = async (): Promise<{ dong: string[], ho: string[] }> => {
  return await axios
    .get(host + "/price_simulation/dong_ho")
    .then((res) => {
      const dong = res.data[0] as string[]; // array of dong string
      const ho = res.data[1] as string[]; // array of ho string
      return { dong, ho };
    });
};

export const getSize = async (id: string): Promise<number[]> => {
  return await axios
    .get(host + "/sale_information/" + id + "/types")
    .then((res) => {
      const result = res.data as number[]; // array of size number
      return result;
    });
};

// StepBoxB
export const getPreprice = async (): Promise<number> => {
  return await axios
    .get(host + "/price_simulation/preprice")
    .then((res) => {
      return res.data as number; // number
    });
};

export const getPresim = async (): Promise<{ prices: number[], years: number[] }> => {
  return await axios
    .get(host + "/price_simulation/pre_sim_property")
    .then((res) => {
      const prices = res.data[0] as number[]; // array of price number
      const years = res.data[1] as number[]; // array of year number
      return { prices, years };
    });
};

export const getPrepriceList = async (): Promise<{ data: number[], labels: string[] }> => {
  return await axios
    .get(host + "/price_simulation/preprice_list")
    .then((res) => {
      const data = res.data[0] as number[]; // array of data number
      const labels = res.data[1] as string[]; // array of label string
      return { data, labels };
    });
};

export const getPostprice = async (): Promise<number> => {
  return await axios
    .get(host + "/price_simulation/postprice")
    .then((res) => {
      return res.data as number; // number
    });
};

export const getPostsim = async (): Promise<{ prices: number[], years: number[] }> => {
  return await axios
    .get(host + "/price_simulation/post_sim_property")
    .then((res) => {
      const prices = res.data[0] as number[]; // array of price number
      const years = res.data[1] as number[]; // array of year number
      return { prices, years };
    });
};

export const getPostpriceList = async (): Promise<{ data1: (number | null)[], data2: (number | null)[], labels: string[] }> => {
  return await axios
    .get(host + "/price_simulation/postprice_list")
    .then((res) => {
      console.log(res.data);
      const labels = res.data[0] as string[]; // array of label string
      const data1 = res.data[1][0] as (number | null)[]; // array of data number
      const data2 = res.data[2] as (number | null)[]; // array of data number
      return { data1, data2, labels };
    });
};

export const getModelFeature = async (id: string): Promise<{ data: number[], labels: string[] }> => {
  return await axios
    .get(host + "/construction/" + id + "/feature_importance")
    .then((res) => {
      const data = res.data.Data as number[]; // array of label string
      const labels = res.data.Labels as string[]; // array of data number
      return { data, labels };
    });
}

// StepBox C
export const getContactland = async (): Promise<number> => {
  return await axios
    .get(host + "/price_simulation/contactland")
    .then((res) => {
      return res.data as number; // number
    });
};

export const getMyland = async (): Promise<number> => {
  return await axios
    .get(host + "/price_simulation/myland")
    .then((res) => {
      return res.data as number; // number
    });
};