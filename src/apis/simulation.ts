import axios from "axios";
import { host } from ".";

//[TODO] should be change to real api not dummy

export const getLastDate = async (id: string): Promise<number> => {
  return await axios
    .get(host + "/construction/" + id + "/last_simul_date")
    .then((res) => {
      const date = res.data as number; // array of dong string
      console.log(date);
      return date;
    })
};

// StepBoxA
export const getDongHo = async (id: string): Promise<Record<string, string[]> | null> => {
  return await axios
    .get(host + "/construction/" + id + "/aprt_info/dong_ho_list")
    .then((res) => {
      const dongho = res.data as Record<string, string[]>; // array of dong string
      console.log(dongho);
      return dongho;
    })
    .catch(() => {
      return null; // simulation feature is not supported
    });
};

export const getSize = async (id: string, lastDate: number): Promise<number[] | null> => {
  return await axios
    .get(host + "/construction/" + id + "/apart_info/exclusive_area_list", { params: { last_simul_date: lastDate } })
    .then((res) => {
      const result = res.data as number[]; // array of size number
      return result;
    })
    .catch(() => {
      return null; // simulation feature is not supported
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