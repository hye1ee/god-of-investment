import axios from "axios";
import { host } from ".";

export const getConstructionInfo = async (consId: string): Promise<any> => {
  return await axios
    .get(host + "/construction/" + consId)
    .then((res) => {
      return res.data;
    });
};

export const getConstructionSheet = async (pnu: string): Promise<any> => {
  return await axios
    .get(host + "/lot/" + pnu)
    .then((res) => {
      return res.data;
    });
};

export const getConstructionStat = async (consId: string): Promise<any> => {
  return await axios
    .get(host + "/construction_stat/" + consId)
    .then((res) => {
      return res.data;
    });
};

export const getConstructionKeywords = async (consId: string): Promise<string[]> => {
  return await axios
    .get(host + "/construction/" + consId + '/similar')
    .then((res) => {
      return res.data.map((cons: any) => cons.ZONE_NM).filter((val: string) => val && val.length > 0);
    });
};

export const getConstructionLots = async (consId: string): Promise<any> => {
  return await axios
    .get(host + "/construction/" + consId + '/neighborlots')
    .then((res) => {
      return res.data;
    });
};
