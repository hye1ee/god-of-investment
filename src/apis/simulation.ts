import axios from "axios";
import { host } from ".";
import { PostpriceInfo, PrepriceInfo, dateToqstring } from "../pages/simulation/utils";

export const getLastDate = async (id: string): Promise<number> => {
  return await axios
    .get(host + "/construction/" + id + "/last_simul_date")
    .then((res) => {
      const date = res.data as number; // array of dong string
      return date;
    })
};

// StepBoxA
export const getDongHo = async (id: string): Promise<Record<string, string[]> | null> => {
  return await axios
    .get(host + "/construction/" + id + "/aprt_info/dong_ho_list")
    .then((res) => {
      const dongho = res.data as Record<string, string[]>; // array of dong string
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

export const getPreprice = async (id: string, dong: string, ho: string, lastDate: number): Promise<PrepriceInfo> => {
  const area = await axios
    .get(host + "/construction/" + id + "/apart_info/" + dong + "/" + ho + "/exclusive_area")
    .then((res) => res.data as string);

  const price = await axios
    .get(host + "/ai_result/" + id + "/" + area + "/price/pre/" + lastDate)
    .then((res) => res.data as number);

  const weight = await axios
    .get(host + "/construction/" + id + "/apart_info/" + dong + "/" + ho + "/weight")
    .then((res) => res.data as number);

  const info = await axios
    .get(host + "/ai_result/" + id + "/" + area + "/pseudo_self_list/pre/" + lastDate)
    .then((res) => res.data as any);

  const stat = await axios
    .get(host + "/ai_result/" + id + "/" + area + "/prices/pre")
    .then((res) => res.data as any);

  return {
    price: Math.round(price * weight) as number,
    list: {
      areas: Object.values(info.Area) as number[],
      prices: Object.values(info.Price) as number[]
    },
    change: {
      data: stat.Data as number[],
      labels: dateToqstring(stat.Labels as number[]),
    }
  } as PrepriceInfo;
};

export const getPostprice = async (id: string, size: number, lastDate: number): Promise<PostpriceInfo> => {
  const price = await axios
    .get(host + "/ai_result/" + id + "/" + size + "/price/post/" + lastDate)
    .then((res) => {
      return res.data as number; // number
    });

  const info = await axios
    .get(host + "/ai_result/" + id + "/" + size + "/pseudo_self_list/post/" + lastDate)
    .then((res) => res.data as any);

  const stat = await axios
    .get(host + "/ai_result/" + id + "/" + size + "/prices/post")
    .then((res) => res.data as any);

  return {
    price,
    list: {
      areas: Object.values(info.Area) as number[],
      prices: Object.values(info.Price) as number[]
    },
    change: {
      data: stat.Data.map((val: any) => (val === 'null' ? null : val)) as (number | null)[],
      labels: dateToqstring(stat.Labels as number[]),
    }
  } as PostpriceInfo;

};
